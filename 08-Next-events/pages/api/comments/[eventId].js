// /api/comments/eventId

import { MongoClient } from "mongodb";

async function handler(req, res){
    const username = process.env.MONGODB_USERNAME
    const password = process.env.MONGODB_PASSWORD
    const eventId = req.query.eventId;
    if(req.method === 'POST'){
        const {email, name, text} = req.body

        if(!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === ''){
            res.status(422).json({message: 'Invalid Input!'})
            return
        }

        const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@testdbs.0bchy.mongodb.net/?retryWrites=true&w=majority&appName=testdbs`)
        
        const db = client.db('events')

        const newComment = await db.collection('comments').insertOne({
            email: email,
            name: name,
            text: text,
            eventId: eventId
        })

        client.close()
        /* const newComment = {
            id: new Date().toISOString(),
            email: email,
            name: name,
            text: text,
        } */
        res.status(201).json({
            message: "Added Comment",
            comment: newComment
        })
    }

    if(req.method === 'GET'){
        const dummyComment = [
            {id: 'e1', name: 'Arvind', text: "This is the first comment"},
            {id: 'e2', name: 'Abel', text: "This is the second comment"}
        ]
        res.status(200).json({comments: dummyComment})
    }
}

export default handler