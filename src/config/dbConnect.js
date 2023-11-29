import mongoose, { mongo } from "mongoose";



async function connDB() {
    const urlConn = 'mongodb+srv://lucasrogerio:;LucasDGT1002@cluster0.oaxmq5w.mongodb.net/livraria?retryWrites=true&w=majority'
    mongoose.connect(urlConn)

    return mongoose.connection
}

export default connDB