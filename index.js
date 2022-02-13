import express from 'express'
import config from './config/index.js'
import users from './routes/userRoutes.js'
import dotenv from 'dotenv'

dotenv.config()

const server = express()

server.use(express.json())
server.use(users)

server.listen(3001, () => {
    console.log("Rodando na porta", config.server.port)
})







