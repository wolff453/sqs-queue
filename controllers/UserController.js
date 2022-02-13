 
export const UserController = ({ awsService }) => {
    const handle = async (req, res) => {
        try {
            await awsService.sendMessageToQueue(req.body)
            return res.status(200).send({message:"Dados enviado com sucesso"})
        } catch (error) {
            return res.status(200).send({message:`Ocorreu um erro ${error}`})
        }
    }
    return {
        handle
    }
}