import mongoose from "mongoose";

const connectDB = async () => {
  //este evento de mongoose se emite cuando e el evento es 'connected'
  mongoose.connection.on('connected',()=>console.log("Database Connected"))
  //establece conexión con la base de datos
  await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`)
}

export default connectDB;