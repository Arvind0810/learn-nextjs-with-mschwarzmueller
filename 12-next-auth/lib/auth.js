import { hash } from 'bcryptjs'

async function hashPassword(password){
    return await hash(password, 12)
}

export default hashPassword