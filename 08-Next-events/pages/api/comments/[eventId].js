// /api/comments/eventId

import { addComment, getComments, getCommentsByEventId } from "../../../db-utility/utility";

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

        

        const newComment = await addComment({
            email: email,
            name: name,
            text: text,
            eventId: eventId
        })

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

        const documents = await getCommentsByEventId(eventId)
        
        res.status(200).json({comments: documents})
    }
}

export default handler