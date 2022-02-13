import { AwsService } from "../services/AwsService.js"
import AWS from 'aws-sdk'
import { UserController } from "../controllers/UserController.js"


export const UserFactory = () => {
    const aws = new AWS.SQS()
    const awsService = AwsService({aws})
    const userController = UserController({awsService})
    return userController.handle
}