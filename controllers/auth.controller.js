import User from "../models/usuario.js";
import { generateToken } from "../utils/token.js";
export const signUp = async (req,res,next) =>{
    const {Correo,Contraseña} = req.body
    const userProps = req.body;
    const newUser = new User(userProps);
    
    try {
        const user = await User.findOne({Correo})
        if (user){
            return res.status(401).json({error:"email already exist"})
        }
        
        newUser.Contraseña = await newUser.encryptPassword(Contraseña)
        await newUser.save();

        const token = generateToken(newUser) 
        res.status(201).json({newUser,token});
    } catch (error) {
        next(error)
    }

}
/* 
export const signIn = async(req,res)=>{

    const {Correo, Contraseña} = req.body
    const foundUser = User.findOne({Correo})

    if(!foundUser){
        return res.status(404).json({error: "email does not exist"})
    }
    const validPassword = await foundUser.validatePassword(Contraseña)

    if(!validPassword){
        return res.status(401).json({error:"incorrect password"})
    }
    const token = generateToken(foundUser)
res.status(200).json(token)
}
 */
export const signIn = async (req, res) => {
    const { Correo, Contraseña } = req.body;
    const foundUser = await User.findOne({ Correo });

    if (!foundUser) {
        return res.status(404).json({ error: "email does not exist" });
    }

    const validPassword = await foundUser.validatePassword(Contraseña);

    if (!validPassword) {
        return res.status(401).json({ error: "incorrect password" });
    }

    const token = generateToken(foundUser);
    res.status(200).json(token);
}
