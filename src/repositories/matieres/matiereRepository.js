const MatiereModel= require('../../models/matieres/matiereModel');

class MatiereRepository {
  static async createMatiere(data) {
    try {
      const nouvelleMatiere = new MatiereModel(data);
      const matiereCreee = await nouvelleMatiere.save();
      return matiereCreee;
    } catch (erreur) {
      throw erreur;
    }
  }

  static async updateMatiere(id, data) {
    try {
      const matiereMiseAJour = await MatiereModel.findByIdAndUpdate(id, data, {
        new: true, 
      });
      return matiereMiseAJour;
    } catch (erreur) {
      throw erreur;
    }
  }

  static async getAllMatiere() {
    try {
      const toutesLesMatieres = await MatiereModel.find();
      return toutesLesMatieres;
    } catch (erreur) {
      throw erreur;
    }
  }

  static async getMatieresByEnseignant(enseignantId) {
    try {
      const matieresDeLEnseignant = await MatiereModel.find({ enseignants: enseignantId });
      return matieresDeLEnseignant;
    } catch (erreur) {
      throw erreur;
    }
  }
}

module.exports = MatiereRepository;