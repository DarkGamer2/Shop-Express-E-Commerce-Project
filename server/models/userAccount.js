const mongoose=require('mongoose');
const Schema=mongoose.Schema;

userAccountSchema=new Schema({
    userFirstName:String,
    userLastName:String,
    userEmail:String,
    userPhone:String,
    userPassword:String
});


const Account=mongoose.model('Account',userAccountSchema);

module.exports=Account;