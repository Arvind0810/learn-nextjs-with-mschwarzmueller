import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import { S3 } from '@aws-sdk/client-s3'

const s3 = new S3({
    region: 'ap-south-1',
    credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

const db = sql('meals.db')

export async function getMeals(){
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    // throw new Error("Loading meals failed")
    return db.prepare("SELECT * FROM meals").all()
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title)
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extension}`
   
    const bufferedImage = await meal.image.arrayBuffer()

    await s3.putObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: Buffer.from(bufferedImage),
        ContentType: meal.image.type,
      })
      .then(() => {
        meal.image = fileName

    db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
        `).run(meal)
      })
      .catch((error) => {
        console.error('Failed to upload file: ' + error)
      })
    
    
}