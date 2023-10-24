import bcrypt from "bcrypt";
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    // Define la estructura de tu modelo aquí
    Nombre: { type: String, required: true },
    Direccion: { type: String, required: true },
    Correo: { type: String, required: true },
    Contraseña: { type: String, required: true },
    historial_de_compra: { type: String }
});


userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    }
})

userSchema.methods.encryptPassword = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
  
    return hash;
  }

  userSchema.methods.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.Contraseña) 
} 

const User = mongoose.model("User", userSchema)

export default User 
