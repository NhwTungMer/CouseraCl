const mongoose = require ('mongoose')

const Schemaa = mongoose.Schema

const Login = new Schemaa ({
name:{type: String,maxLength:225},
password : {type: String}
// image :{type:String},
// createAt:{type:Data,default:Data.now},
// updateAt:{type:Data,default:Data.now}
})
const collection = new mongoose.model("DB1",Login)
module.exports = collection