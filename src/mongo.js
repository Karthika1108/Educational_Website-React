const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/courses')
.then(()=>{
    console.log('Connected succesfully');
})
.catch(()=>{
    console.log('Failed to connect');
})
const Regschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
 })
 const collection=mongoose.model('user',Regschema)
 module.exports={collection};