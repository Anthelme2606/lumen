const DemandeEnsRepository=require("../../repositories/enseignants/demandeEnsRepository");
const MatiereRepository=require("../../repositories/matieres/matiereRepository");

const Upload=require("../../publics/functions/upload");
//console.log(Upload.readFile("file.png"));
//curriculumVitae: String, 
  //lettreMotivation: String,
//
  //casierJudiciaire: String, 
class DmandeEnsService {

    static async demandeEnseignant(data) {
      try{
        data.curriculumVitae=await Upload.uploadFile(data.curriculumVitae);
        data.lettreMotivation =await Upload.uploadFile(data.lettreMotivation);
        data.casierJudiciaire=await Upload.uploadFile(data.casierJudiciaire);
        
        
           return await DemandeEnsRepository.demandeEnseignant(data);
      }catch(erreur)
      {
        throw erreur;
      }

    }
   static async accepterDemandeEnseignement(enseignantId)
    {
      return await DemandeEnsRepository.accepterDemandeEnseignement(enseignantId);
    }
   static async refuserDemandeEnseignement(enseignantId)
    {
      return await DemandeEnsRepository.refuserDemandeEnseignement(enseignantId);
    }
    static async findEnseignantById(enseignantId)
    {
      return await DemandeEnsRepository.findEnseignantById(enseignantId);
    }
static async getEnseignants()
{
  return await DemandeEnsRepository.getEnseignants();
}
static async getMatieres(id){
  return await MatiereRepository.getMatieresByEnseignant(id);
}
}
module.exports=DmandeEnsService;