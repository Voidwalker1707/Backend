export function errorHandler(error,req,res,next) {
    
    console.log(error.name)
    console.log(error.message)
    if (error.name === "CastError") {
        return res.status(404).json({ error: "that is not an id" });
    } 
    next()
}