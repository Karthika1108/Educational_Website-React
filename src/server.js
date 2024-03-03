const express=require('express')
const {collection,collectionForm}=require('./mongo')

const cors=require('cors')
const app=express();
const mongoose=require('mongoose')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post('/signup',async(req,res)=>{
    const{username,email,phone,password}=req.body
    const data={
        username:username,
        email:email,
        phone:phone,
        password:password
    }
    try{
         const check=await collection.findOne({email:email})
         if(check){
            res.json('exists')
         }
         else{
            const status =  await collection.insertMany([data])
            if(status){
            res.json("inserted");
            console.log("record inserted")
            }
            
         }
    }catch(e){
        console.log(e);
    }
})
app.post('/login',async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await collection.findOne({email:email})
        if(check){
                    if(check.password===password ){
                        res.json('exists')
                    }
                   
                    else{
                     res.json('Pincorrect')
                    }
                 }
        else{
            res.json('Aincorrect')
        }
    }catch(e){
        console.log(e)
    }
})

app.listen(8001,()=>{
    console.log("Server listening to the port 8000");
})