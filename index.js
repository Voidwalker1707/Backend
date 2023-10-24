import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { dbConnection } from './database/db.js';
import { errorHandler } from './middlewares/error.handler.js';
import { logger } from './middlewares/logger.js';
import { unknownEndpoint } from './middlewares/unknownEndpoint.js';
import { authRouter } from './routes/auth.routes.js';
import profileRouter from './routes/profile.routes.js';
import { ropaRouter } from './routes/ropa.routes.js';
import { ventaRopaRouter } from './routes/ropa_ventas.routes.js';
import { UserRouter } from './routes/user.routes.js';
import { ventaRouter } from './routes/ventas.routes.js';
const app = express();
const port = process.env.PORT;




app.use(express.json());
app.use(cors());
app.use(logger)
app.use("/api/v1/ropa", ropaRouter);
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/venta", ventaRouter)
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/profile",profileRouter)
app.use("/api/v1/ventaropa",ventaRopaRouter)
app.use("/api/v1/welcome",(req,res)=>{
        res.status(200).json({message:"welcome to my api rest"})
})
app.use(unknownEndpoint)
app.use(errorHandler)


async function main() {
        await dbConnection();
        app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`);
        });
}

main();
