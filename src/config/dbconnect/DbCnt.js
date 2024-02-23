const mongoose = require('mongoose');
const conect = mongoose.connect('mongodb://127.0.0.1:27017/DBTest1')

  conect.then(()=>{
    console.log('conect success')
})  

.catch(()=>{
    console.log('cannt conect success')
})
// async function connect(){
//     try{
//    await mongoose.connect('mongodb://127.0.0.1:27017/DBTest1')
//      console.log('conect success')
//     }catch(error){
//         console.log('Connected failure!');
//     }
// }
const Login = new mongoose.Schema ({
    name:{type: String,maxLength:225},
    password : {type: String}
    // image :{type:String},
    // createAt:{type:Data,default:Data.now},
    // updateAt:{type:Data,default:Data.now}
    })
const collection = new mongoose.model("db1",Login)
 module.exports = collection


