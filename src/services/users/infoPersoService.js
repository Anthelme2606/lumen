const InformationPersonnelleRepository = require("../../repositories/users/infoPersoRepository");
const Upload = require("../../publics/functions/upload");
class InformationPersonnelleService {
  static async saveInfo(data) {
    try {
      if (data.profile) {
        data.profile = await Upload.readFile(data.profile);
        return await InformationPersonnelleRepository.saveInfo(data);
      }
    } catch (err) {
      throw err;
    }
  }
  static async getByUser(userId) {
    return InformationPersonnelleRepository.getByUser(userId);
  }
  static async updateInfo(id, data) {
    return InformationPersonnelleRepository.updateInfo(id, data);
  }
}
module.exports = InformationPersonnelleService;
