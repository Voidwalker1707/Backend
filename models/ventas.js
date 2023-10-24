import mongoose from "mongoose";
import { Ropa } from "./ropa.js";
import User from "./usuario.js";


const ventaSchema = new mongoose.Schema({
    // Define la estructura de tu modelo aquí
    Fecha_venta: { type: Date, required: true },
    id_cliente: { type: [{type:mongoose.Schema.Types.ObjectId, ref:User}], required: true },
    Productos_comprados: [{
        prendaID: { type: [{type:mongoose.Schema.Types.ObjectId, ref:Ropa}] },
        cantidad: Number
    }],
    Monto_Total: { type: Number, required: true },
    Metodo_de_pago: { type: String }
});

ventaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    }
})

const Venta = mongoose.model("Venta", ventaSchema)





export default Venta