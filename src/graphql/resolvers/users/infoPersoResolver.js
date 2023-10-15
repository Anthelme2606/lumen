const InformationPersonnelleService=require("../../../services/users/infoPersoService");
const InformationPersonnelleResolver={
Query:{

},
Mutation:{
    saveInfo:async(_,{data})=>{
        return InformationPersonnelleService.saveInfo(data);
    },
    updateInfo:async(_,{id,data})=>{

        return InformationPersonnelleService.updateInfo(id,data);
    },
   
},

}
module.exports=InformationPersonnelleResolver;