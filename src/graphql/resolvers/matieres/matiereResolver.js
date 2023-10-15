const MatiereService=require("../../../services/matieres/matiereService");
const MatiereResolver={
    Query:{
getAllMatiere:async()=>{
    return MatiereService.getAllMatiere();
},

    },
    Mutation:{
        createMatiere:async(_,{data})=>{
            return MatiereService.createMatiere(data);
        },
        updateMatiere:async(_,{id,data})=>{
            return MatiereService.updateMatiere(id,data);
        }

    }

}
module.exports=MatiereResolver;