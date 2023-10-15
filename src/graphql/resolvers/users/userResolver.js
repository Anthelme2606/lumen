const UserService=require("../../../services/users/userService");
const jwt=require("jsonwebtoken");
const  SECRET_KEY =process.env.JWT_SECRET;
const UserResolver={

     Query:{
       currentUser:async(_,__,context)=>{
            if(!context.currentUser) return null;
            return context.currentUser;
        },

    },
     Mutation:{
        signup:async(parent,{userData})=>{
            return await UserService.create(userData);
        },
        login:async(_,{loginData})=>{
            
            return await UserService.login(loginData);
        },

    },
    User:{
        infoPerso:async(parent)=>{
            return await UserService.getInfoPerso(parent.id);
        }
            },
}
module.exports=UserResolver;