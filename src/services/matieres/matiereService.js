const MatiereRepository=require("../../repositories/matieres/matiereRepository");
const CoursRepository=require("../../repositories/cours/coursRepository");
const UserRepository=require("../../repositories/users/userRepository");
const Upload=require("../../publics/functions/upload");
class MatiereService {

    static async create(data)
    {
        try{

            if(data.image){
                data.image=await Upload.uploadFile(data.image);
                return MatiereRepository.create(data);
    
            }
        }catch(err){
            throw err;
        }

    }
    static async updateMatiere(id,data)
    {
        return MatiereRepository.update(id,data);
    }
    static async getAll()
    {
        return MatiereRepository.getAll();
    }
    static async getMatieresByEnseignant(enseignantId)
    {
        return MatiereRepository.getMatieresByEnseignant(enseignantId);
    }
    static async getUsersWhoChoose(userId){

    }
    static async geCourses(matiereId){
        try{
            const matiere= await MatiereRepository.getById(matiereId);
            if(!matiere){
                throw new Error("Any find with this key");
            }
           const courseIds=matiere.cours;
            const courses=await CoursRepository.getByIds(courseIds);
             if(courses){
                return courses;
             }
        }catch(err){
            throw err;
        }
    }
    static async getEtudiants(matiereId){

        try{
            const matiere= await MatiereRepository.getById(matiereId);
            if(!matiere){
                throw new Error("Any find with this key");
            }
           const userIds=matiere.userWhoChoose.map((user)=>user.userId);
            const users=await UserRepository.getByIds(userIds);
             if(users){
                return users;
             }
        }catch(err){
            throw err;
        }  
    }
    


}
module.exports=MatiereService;