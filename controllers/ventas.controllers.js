import Venta from "../models/ventas.js";

//get
async function getVentas (req,res,next){
    try {
        
        const findVentas = await Venta.find({}).populate("id_cliente")

        res.status(200).json(findVentas)
        
    } catch (error) {
        next(error)
    }

}
//get by id

async function getOneVenta(req,res,next) {
    try {
        const id = req.params.id
        const ventaFound = await Venta.findById(id).exec()
        res.status(200).json(ventaFound)
        
    } catch (error) {
        next(error)
    }
}









// Post
async function createVenta (req,res,next){
    const ventaProps = req.body;
    const newVenta = new Venta(ventaProps);
    
    try {
        await newVenta.save();
        res.status(201).json(newVenta);
    } catch (error) {
        next(error)
    }
}

//Patch
const patchVenta = async(req, res,next)=>{
    try {
        const id = req.params.id
        const newProps = req.body
        const updated = await Venta.findByIdAndUpdate(id,newProps,{ new: true }).exec()
        res.status(200).json(updated)
        //res.status(200).end()
    } catch (error) {
        next(error)
    }

}
//delete 

const deleteVenta = async(req,res,next)=>{

    try {
        const id = req.params.id
        const result = await Venta.findByIdAndRemove(id).exec()
        res.status(200).json(result)
        
        
    } catch (error) {
        next(error)
    }
}









export { createVenta, deleteVenta, getOneVenta, getVentas, patchVenta };

