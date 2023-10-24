export function logger(req,res,next) {
    
    console.log("method:", req.method)
    console.log("path:", req.path)
    console.log("body:", req.body)
    console.log("params:", req.params)
    console.log("----------------------")
    next()
}