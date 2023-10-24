import mongoose from "mongoose";



const url = process.env.URL

async function dbConnection() {
    
    await mongoose.connect(url);

}

export { dbConnection };

