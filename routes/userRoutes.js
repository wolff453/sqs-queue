import express from 'express'
import { schemaValidatorMiddleware } from '../schemas/UserSchema.js'
import { UserFactory } from '../factory/userFactory.js'


const users = express.Router()


users.use(schemaValidatorMiddleware)
users.post('/insert', UserFactory())

export default users