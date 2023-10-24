import { Ropa } from "../models/ropa.js";

//get
async function getRopa (req,res,next){
    try {
        
        const findRopa = await Ropa.find({});
        res.status(200).json(findRopa)
        
    } catch (error) {
        next(error)
    }

}
//get by id

async function getOneRopa(req,res,next) {
    try {
        const id = req.params.id
        const ropaFound = await Ropa.findById(id).exec()
        res.status(200).json(ropaFound)
        
    } catch (error) {
        next(error)
    }
}










const postRopa = async (req, res,next) => {
    const ropaProps = req.body;
    const newRopa = new Ropa(ropaProps);
    
    try {
        await newRopa.save();
        res.status(201).json(newRopa);
    } catch (error) {
        next(error)
    }
}

//patch

const patchRopa = async(req, res,next)=>{
    try {
        const id = req.params.id
        const newProps = req.body
        const updated = await Ropa.findByIdAndUpdate(id,newProps,{ new: true }).exec()
        res.status(200).json(updated)
        //res.status(200).end()
    } catch (error) {
        next(error)
    }

}

//delete

const deleteRopa = async(req,res,next)=>{

    try {
        const id = req.params.id
        const result = await Ropa.findByIdAndRemove(id).exec()
        res.status(200).json(result)
        
        
    } catch (error) {
        next(error)
    }
}





export { deleteRopa, getOneRopa, getRopa, patchRopa, postRopa };

