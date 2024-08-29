import db from './db'

export function createUser(email, password){
    const result = db
        .prepare('INSERT INTO users (email, password) VALUES(?,?)')
        .run(email, password)
    return result.lastInsertRowid
}

export function getUser(email){
    const result = db
    .prepare('SELECT * FROM users WHERE email = ?').run(email)
    return result
}