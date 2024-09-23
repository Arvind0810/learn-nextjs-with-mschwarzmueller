import { MongoClient } from 'mongodb'

async function connectDB(){
    const username = process.env.MONGODB_USERNAME
    const password = process.env.MONGODB_PASSWORD
    return await MongoClient.connect(`mongodb+srv://${username}:${password}@testdbs.0bchy.mongodb.net/?retryWrites=true&w=majority&appName=testdbs`)
}

export default connectDB