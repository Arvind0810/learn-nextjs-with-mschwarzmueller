'use server'

import { hashUserPassword } from "@/lib/hash"
import { createUser } from "@/lib/user"

export async function signup(prevState,formData){
    const email = formData.get('email')
    const password = formData.get('password')

    let errors = {}

    if(!email.includes('@')) {
        errors.email = 'Please enter a valid email.'
    }

    /* if(email){
        const existingUser = createUser(email)
        if(existingUser){
            errors.email = 'User with this email already exists.'
        }
    } */

    if(password.trim().length < 8){
        errors.password = 'Password must be atlease 8 charecter long'
    }

    if(Object.keys(errors).length > 0){
        return {
            errors
        }
    }

    const hashedPassword = hashUserPassword(password)
    console.log(email, hashedPassword)
    createUser(email, hashedPassword)
}