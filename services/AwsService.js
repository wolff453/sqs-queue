import crypto from 'crypto'
import config from '../config/index.js'

export const AwsService = ({ aws }) => {
    const sendMessageToQueue = async (params) => {
        const dataToSend = {
            MessageBody: JSON.stringify(params),
            QueueUrl: config.queue.url,
            MessageGroupId: crypto.randomUUID()
        }
        await aws.sendMessage(dataToSend).promise()
    }
    return {
        sendMessageToQueue
    }
}



