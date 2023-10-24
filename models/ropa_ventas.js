import mongoose from "mongoose";
import { Ropa } from "./ropa.js";
import Venta from "./ventas.js";

const venta_ropaSchema = new mongoose.Schema({
    // Define la estructura de tu modelo aquí
    ID_venta: { type: [{type:mongoose.Schema.Types.ObjectId,ref:Venta}], required: true },
    ID_prenda: { type: [{type:mongoose.Schema.Types.ObjectId,ref:Ropa}], required: true },
    Precio_de_venta: { type: Number, required: true },
    Cantidad_vendida: { type: Number, required: true },
    
});

venta_ropaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    }
})

const ventaRopa = mongoose.model("ventaRopa", venta_ropaSchema)





export default ventaRopa