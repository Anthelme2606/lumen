const EnseignantRepository=require("../../repositories/enseignants/enseignantRepository");
const MatiereRepository=require("../../repositories/matieres/matiereRepository");

const FileUtil=require("../../publics/functions/fileUtil");
class EnseignantService {

    static async demandeEnseignant(data) {
      try{
        
         /*  data.diplomesCertifications= await FileUtil.fileControl(data.diplomesCertifications);
           
           data.diplomesCertifications= await FileUtil.saveFile(data.diplomesCertifications.originalename,data.diplomesCertifications.buffer);
           data.curriculumVitae= await FileUtil.fileControl(data.curriculumVitae);
           data.curriculumVitae= await FileUtil.saveFile(data.curriculumVitae.originalename,data.curriculumVitae.buffer);
           data.casierJudiciaire= await FileUtil.fileControl(data.casierJudiciaire);
           data.casierJudiciaire= await FileUtil.saveFile(data.casierJudiciaire.originalename,data.casierJudiciaire.buffer);
           data.lettreMotivation= await FileUtil.fileControl(data.lettreMotivation);
           data.lettreMotivation= await FileUtil.saveFile(data.lettreMotivation.originalename,data.lettreMotivation.buffer);
           */
           return await EnseignantRepository.demandeEnseignant(data);
      }catch(erreur)
      {
        throw erreur;
      }

    }
   static async accepterDemandeEnseignement(enseignantId)
    {
      return await EnseignantRepository.accepterDemandeEnseignement(enseignantId);
    }
   static async refuserDemandeEnseignement(enseignantId)
    {
      return await EnseignantRepository.refuserDemandeEnseignement(enseignantId);
    }
    static async findEnseignantById(enseignantId)
    {
      return await EnseignantRepository.findEnseignantById(enseignantId);
    }
static async getEnseignants()
{
  return await EnseignantRepository.getEnseignants();
}
static async getMatieres(id){
  return await MatiereRepository.getMatieresByEnseignant(id);
}
}
module.exports=EnseignantService;