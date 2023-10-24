import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import User from "../models/usuario.js";
//get
async function getUsers (req,res,next){
    try {
        
        const findUsers = await User.find({});
        res.status(200).json(findUsers)
        
    } catch (error) {
        next(error)
    }

}
//get by id

async function getOneUser(req,res,next) {
    try {
        const id = req.params.id
        const userFound = await User.findById(id).exec()
        res.status(200).json(userFound)
        
    } catch (error) {
        next(error)
    }
}









// Post
// createUser
async function createUser(req, res, next) {
    const userProps = req.body;
    // Obtener la contraseña sin encriptar del cuerpo de la solicitud
    const plainPassword = userProps.Contraseña;
    
    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(plainPassword, 10);

        // Asignar la contraseña encriptada al objeto de usuario
        userProps.Contraseña = hashedPassword;

        // Crear un nuevo objeto de usuario
        const newUser = new User(userProps);

        // Guardar el nuevo usuario en la base de datos
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

//Patch
const patchUsers = async(req, res,next)=>{
    try {
        const id = req.params.id
        const newProps = req.body
        const updated = await User.findByIdAndUpdate(id,newProps,{ new: true }).exec()
        res.status(200).json(updated)
        //res.status(200).end()
    } catch (error) {
        next(error)
    }

}
//delete 

const deleteUser = async(req,res,next)=>{

    try {
        const id = req.params.id
        const result = await User.findByIdAndRemove(id).exec()
        res.status(200).json(result)
        
        
    } catch (error) {
        next(error)
    }
}




const login = async (req,res,next)=>{
    const {correo, contraseña} = req.body
    jwt.sign({correo,contraseña},process.env.JWT_SECRET,(err,token)=>{
        if (err) {
            next(err)
        } else {
            res.json( {"msg":"Token creado", token: token})
        }
    })

}

const uploadAvatar = (req,res,next)=>{
    console.log(req.file)
    const id = req.params.id
    const img = `http://localhost:3000/${req.file.path}`
    
    res.json({"success":req.file})
}



export { createUser, deleteUser, getOneUser, getUsers, login, patchUsers, uploadAvatar };

