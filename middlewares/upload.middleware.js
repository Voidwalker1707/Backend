import multer from "multer";

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./uploads')

    },
    filename: (req,file,cb)=>{
        cb(null, file.originalname)
    }
})


const soloImagenes= (req,file,cb)=>{
    const puntos = file.originalname.split(".")
    const ext = puntos[puntos.length-1]
    if (ext=="png"||ext=="jpg"||ext=="gif"){
        cb( null,true)
    }else{
        cb(new Error('solo aceptamos imagenes'))
    }
    cb()
}







const upload = multer({
    storage:storage,
    fileFilter: soloImagenes
})



export { upload };

