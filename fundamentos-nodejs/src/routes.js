import { randomUUID } from "node:crypto"
import { DataBase } from './database.js'
import { buildRoutePath } from "./util/build-route-path.js"

const database = new DataBase

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handle: (req, res) => {
            const users = database.select('users')
            return res.end(JSON.stringify(users))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handle: (req, res) => {
            const { name, email } = req.body

            const user = {
                id: randomUUID(),
                name,
                email,
            }
            database.insert('users', user)
            
            return res.writeHead(201).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handle: (req, res) => {
            
        }
    }
]