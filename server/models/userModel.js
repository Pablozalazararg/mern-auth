
import mongoose from "mongoose";
//creamos el esquema, con el constructor de schema
const userSchema = new mongoose.Schema({
  name:{type:String,require:true},
  //no se permitirá crear usuario con email repetidos
  email:{type:String,require:true,unique:true},
  password:{type:String,require:true},
  //verificación mediante email OTP
  verifyOtp:{type:String,require:true,default:''},
  //tiempo de expiración de OTP
  verifyOtpExpireAt:{type:Number,default:0},
  //por default se crea un usuario con la verificación en false
  isAccountVerified:{type:Boolean,default:false},
  //verificación para restablecer la contraseña
  resetOtp:{type:String,default:''},
  //tiempo de expiración de OTP de restablecimiento 
  resetOtpExpireAt:{type:Number,default:0}
})
//en lugar de crear una y otra vez el modelo de usuario
//primero trata de buscar el modelo y si este no esta disponible creara el esquema
const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel