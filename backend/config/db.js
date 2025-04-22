import mongoose from "mongoose";

class ConnectDb {
    static instance;

    constructor() {
        if(ConnectDb.instance){
            return ConnectDb.instance
        }
        ConnectDb.instance = this;
    }
    async connect() {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {});
            console.log('MongoDB Connected');

        } catch (error){
            console.error(`Error connecting to MongoDB: ${error.message}`)
        }
    }
    static getInstance(){
        if(!ConnectDb.instance){
            ConnectDb.instance = new ConnectDb();
        }
        return ConnectDb.instance;
    }
}

export default ConnectDb;