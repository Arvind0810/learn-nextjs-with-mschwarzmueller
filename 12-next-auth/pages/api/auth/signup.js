import hashPassword from "../../../lib/auth"
import connectDB from "../../../lib/db"

async function handler(req, res){

    const client = await connectDB()

    const db = client.db('next_auth')

    if(req.method === 'POST'){
        const {email, password} = req.body

        if(!email || !email.includes('@') || !password || password.trim().length < 7){
            return res.status(422).json({
                message: "Invalid input - password should be atleast 7 charecters long."
            })
        }

        const exestingEmail = await db.collection('users').findOne({
            email: email
        })

        if(exestingEmail){
            return res.status(422).json({message: "User with this email already exists"})
        }

        const hashedPassword = await hashPassword(password)

        const result = await db.collection('users').insertOne({
            email: email,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "User created successfully",
            ...result
        })
    }
}

export default handler