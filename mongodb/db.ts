import mongoose from "mongoose";

const connectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@linkedin-clone-001.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000`;

if(!connectionString) {
  throw new Error("MongoDB connection string is not defined");
}

const connectDB = async () => {
    if(mongoose.connection?.readyState >= 1) {
        return;
    }

    try{
        console.log("Connecting to MongoDB...");
        await mongoose.connect(connectionString);
    } catch(error) {
        console.error("MongoDB connection error:", error);
    }
}


export default connectDB;


