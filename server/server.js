require("dotenv").config();

import express from "express";
const app=express();
import Account from "./models/userAccount";


app.post('/shop_express/api/createaccount',(req,res)=>{
    const account=new Account(req.body);

    account.save((err,account)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(account);
        }
    })
    .then((account)=>{
        console.log(`${account} saved to database`);
    });
})
app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})