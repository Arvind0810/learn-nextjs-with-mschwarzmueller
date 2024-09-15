import { MongoClient } from 'mongodb'

async function handler(req, res){
    const username = process.env.MONGODB_USERNAME
    const password = process.env.MONGODB_PASSWORD
    if(req.method === 'POST'){
        const userEmail = req.body.email

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message: 'Invalid email address.'})
            return
        }

        const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@testdbs.0bchy.mongodb.net/?retryWrites=true&w=majority&appName=testdbs`)
        
        const db = client.db('events')

        await db.collection('emails').insertOne({email: userEmail})

        client.close()

        res.status(201).json({message: "Sign up!"})
    }
}

export default handler