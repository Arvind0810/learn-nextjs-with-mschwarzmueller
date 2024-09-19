import DB from "./config";

const client = await DB()
        
const db = client.db('events')

export async function registerNewsleter(email){
    return await db.collection('emails').insertOne({email: email})
}

export async function addComment(comment){
    return await db.collection('comments').insertOne(comment)
}

export async function getComments(){
    return await db.collection('comments').find().sort({_id: -1}).toArray()
}

export async function getCommentsByEventId(eventId){
    return await db.collection('comments').find({eventId: eventId}).sort({_id: -1}).toArray()
}