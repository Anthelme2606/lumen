const MatiereRepository=require("../../repositories/matieres/matiereRepository");
class MatiereService {

    static async createMatiere(data)
    {
        return MatiereRepository.createMatiere(data);
    }
    static async updateMatiere(id,data)
    {
        return MatiereRepository.updateMatiere(id,data);
    }
    static async getAllMatiere(data)
    {
        return MatiereRepository.getAllMatiere(data);
    }
    static async getMatieresByEnseignant(enseignantId)
    {
        return MatiereRepository.getMatieresByEnseignant(enseignantId);
    }


}
module.exports=MatiereService;