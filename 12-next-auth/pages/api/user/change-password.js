import { verifyPassword } from "../../../lib/auth"
import connectDB from "../../../lib/db"

async function handler(req, res){
    if(req.method !== 'PATCH'){
        return
    }
    const client = await connectDB()

    const db = client.db('next_auth')
    const {email, oldPassword, newPassword} = req.body

    const user = await db.collection('users').findOne({
        email: email
    })
    if(!user){
        return res.status(422).json({
            message: "User not found"
        })
    }

    const isVerified = verifyPassword(oldPassword, user.password)
    if(!isVerified){
        return res.status(422).json({
            message: "Old password did not match"
        })
    }
    console.log(req.body)
    return res.status(201).json({message: "success"})
}

export default handler