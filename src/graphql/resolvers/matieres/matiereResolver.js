const MatiereService=require("../../../services/matieres/matiereService");
const MatiereResolver={
    Query:{
getAllMatiere:async()=>{
    return MatiereService.getAll();
},

    },
    Mutation:{
        createMatiere:async(_,{data},context)=>{
            
            try{
                const {user}=context;
                if(user.userType!=="ADMIN")
                {
                    throw new Error("Vous ne pouvez effectuer cette action..");
                }

                return MatiereService.create(data);

            }catch(error)
            {
                throw error;
            }
            
        },
        updateMatiere:async(_,{id,data},context)=>{
            try{
                const {user}=context;
                if(user.userType!=="ADMIN")
                {
                    throw new Error("Vous ne pouvez effectuer cette action..");
                }
                return MatiereService.update(id,data);

            }catch(error)
            {
                throw error;
            }


           
        },

    },
    Matiere:{
        courses:async(parent)=>{
        return await MatiereService.geCourses(parent._id);
        },
        etudiants:async(parent)=>{
            return await MatiereService.getEtudiants(parent._id);
        }
    },

}
module.exports=MatiereResolver;