import ventaRopa from "../models/ropa_ventas.js";
//get
async function getVentaRopa (req,res,next){
    try {
        
        const findRopa = await ventaRopa.find({}).populate("ID_prenda ID_venta")
        res.status(200).json(findRopa)
        
    } catch (error) {
        next(error)
    }

}
//get by id

async function getOneVentaRopa(req,res,next) {
    try {
        const id = req.params.id
        const ropaFound = await ventaRopa.findById(id).exec()
        res.status(200).json(ropaFound)
        
    } catch (error) {
        next(error)
    }
}










const postVentaRopa = async (req, res,next) => {
    const ropaProps = req.body;
    const newRopa = new ventaRopa(ropaProps);
    
    try {
        await newRopa.save();
        res.status(201).json(newRopa);
    } catch (error) {
        next(error)
    }
}

//patch

const patchVentaRopa = async(req, res,next)=>{
    try {
        const id = req.params.id
        const newProps = req.body
        const updated = await ventaRopa.findByIdAndUpdate(id,newProps,{ new: true }).exec()
        res.status(200).json(updated)
        //res.status(200).end()
    } catch (error) {
        next(error)
    }

}

//delete

const deleteVentaRopa = async(req,res,next)=>{

    try {
        const id = req.params.id
        const result = await ventaRopa.findByIdAndRemove(id).exec()
        res.status(200).json(result)
        
        
    } catch (error) {
        next(error)
    }
}





export { deleteVentaRopa, getOneVentaRopa, getVentaRopa, patchVentaRopa, postVentaRopa };

