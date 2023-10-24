import Joi from "joi"

const simpleMiddleware = (req,res,next)=>{

    const {Nombre,Direccion,Correo,Contraseña,historial_de_compra} = req.body
    const schema = Joi.object({
        Nombre: Joi.string().min(3).max(10).required(),
        Correo: Joi.string().email().required(),
        Contraseña: Joi.string().min(8).pattern( new RegExp(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
        )).required()
    })
    const value = schema.validate({
        Nombre:Nombre,
        Correo:Correo,
        Contraseña:Contraseña
    })
    if (value.error) {
        
        res.status(500).send(value.error)
        
    } else {
        next()
    }
    
}

export { simpleMiddleware }

