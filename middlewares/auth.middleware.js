import jwt from "jsonwebtoken";

const auth  = (req,res,next)=>{
    let token =  req.headers['x-access-token'] || req.headers.authorization || ''
    
    if (token.startsWith("Bearer ")){
        token = token.slice(7,token.length)
    }
    
    
    if (!token) {
        return res.json({"msg":"el token no debe ir vacio"})
    }
   /*  jwt.verify(token,process.env.JWT_SECRET,(err,token)=>{
        if (err) {
            res.status(401).json(err)
            return
        }else{
            next()
        }
    }) */
    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = uid;
        next();
      } catch (error) {
        next(error);
      } 
}

export { auth };

