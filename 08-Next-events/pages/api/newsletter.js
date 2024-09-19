
import { registerNewsleter } from '../../db-utility/utility'

async function handler(req, res){
    
    if(req.method === 'POST'){
        const userEmail = req.body.email

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message: 'Invalid email address.'})
            return
        }

        const newUser = await registerNewsleter(userEmail)

        res.status(201).json({
            message: 'Newsleter registered successfully',
            data: newUser
        })
    }
}

export default handler