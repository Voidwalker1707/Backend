
import mongoose from 'mongoose';

const ropaSchema = new mongoose.Schema({
    // Define la estructura de tu modelo aquí
    categoria: {type: String, required: true},
    nombre: {type: String, required: true},
    tela: {type: String, required: true},
    talla: {type: String, required: true},
    tipo: {type: String, required: true},
    genero: {type: String, required: true},
    numero_de_linea: {type: Number, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    color:{type: String, required: true},
    cantidad_en_stock:{type: Number, required: true},
    imagen: {type: String, required: true}

});
ropaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    }
})



const Ropa = mongoose.model('Ropa', ropaSchema)

export { Ropa };

