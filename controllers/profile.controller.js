import User from "../models/usuario.js";
const getProfile = async (req,res,next)=>{
    const {userId} = req
    const foundUser= await User.findOne({_id: userId})
    const newUser = {Nombre:foundUser.Nombre,Correo:foundUser.Correo}
    res.status(200).json({
        ok:true,
        newUser
    })
}

export { getProfile };

