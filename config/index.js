import dotenv from 'dotenv'

dotenv.config({path:"../.env"})

export default {
    aws: {
        acessKey: process.env.aws_access_key_id,
        secretAcessKey: process.env.aws_secret_access_key
    },
    server: {
        port: process.env.PORT
    },
    queue: {
        url: process.env.QUEUE_URL
    }
}
