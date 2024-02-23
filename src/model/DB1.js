const mongoose = require ('mongoose')

const Schemaa = mongoose.Schema

const DB1 = new Schemaa ({
name:{type: String,maxLength:225},
description : {type: String},
image :{type:String},
// createAt:{type:Data,default:Data.now},
// updateAt:{type:Data,default:Data.now}
})

module.exports = mongoose.model('DB1',DB1)