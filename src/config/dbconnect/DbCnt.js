const mongoose = require('mongoose');
async function connect(){
    try{
   await mongoose.connect('mongodb://127.0.0.1:27017/DBTest1')
     console.log('conect success')
    }catch(error){
        console.log('Connected failure!');
    }
    

}
module.exports={connect}