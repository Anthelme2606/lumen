 const mongoose=require("mongoose");
 const lumenUserSchema=new mongoose.Schema({
    nom:String,
    prenom:String,
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:String,
    dateInscription:{
        type:String
    },
    userType:{
        type:String,
        enum:["ETUDIANT","ENSEIGNANT","SECRETAIRE","ADMIN"],
        default:"ETUDIANT",
    }


 });
 module.exports=mongoose.model("LumenUser",lumenUserSchema);