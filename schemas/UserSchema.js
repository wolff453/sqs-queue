import Joi from 'joi'

export const schemaValidatorMiddleware = (request, response, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
    const options = {
        abortEarly: false,
        allowUnknown: true, 
        stripUnknown: true 
    };
    const {error} = schema.validate(request.body , options)

    if(error) {
        return response.send({message: error.details.map(message => message.message)})
    }

    next()
}