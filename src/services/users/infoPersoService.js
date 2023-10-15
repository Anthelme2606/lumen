const InformationPersonnelleRepository=require("../../repositories/users/infoPersoRepository");
class InformationPersonnelleService {
    static async saveInfo(data) {
        return await InformationPersonnelleRepository.saveInfo(data);
    }
    static async getByUser(userId)
    {
        return InformationPersonnelleRepository.getByUser(userId);
    }
    static async updateInfo(id,data)
    {
        return InformationPersonnelleRepository.updateInfo(id,data);
    }
    
}
module.exports=InformationPersonnelleService;