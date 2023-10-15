const EnseignantModel = require("../../models/enseignants/enseignantModel");
class EnseignantRepository {


    static async demandeEnseignant(data) {
        try {
            const newEnseignant = new EnseignantModel(data);
            const ens=await newEnseignant.save();
            return  ens;
        }
        catch(erreur)
        {
            throw erreur;
        }
    }
   

 static async accepterDemandeEnseignement(demandeId) {
    try {
      // Recherchez la demande d'enseignement par son ID
      const demande = await EnseignantModel.findById(demandeId);

      if (!demande) {
        // La demande n'a pas été trouvée
        return { success: false, message: "Demande d'enseignement introuvable." };
      }

      demande.demandeAcceptee = true;

    
       await demande.save();

      return { success: true, message: "Demande d'enseignement acceptée avec succès." };
    } catch (error) {
     
      return { success: false, message: "Une erreur est survenue lors de l'acceptation de la demande d'enseignement." };
    }
  }

  static async refuserDemandeEnseignement(demandeId) {
    try {
     
      const demande = await EnseignantModel.findById(demandeId);

      if (!demande) {
      
        return { success: false, message: "Demande d'enseignement introuvable." };
      }

      demande.demandeAcceptee = false;

      await demande.save();

      return { success: true, message: "Demande d'enseignement refusée avec succès." };
    } catch (error) {
    
      return { success: false,
         message: 
        "Une erreur est survenue lors du refus de la demande d'enseignement." };
    }
  }
  static async findEnseignantById(enseignantId)
  {
   //console.log(EnseignantModel);
    try {

        const ens = await EnseignantModel.findById(enseignantId);
       
        return ens;
    } catch (erreur) {
        throw erreur;
    }
}
static async getEnseignants()
{
    try{
        const enseignants=await EnseignantModel.find({});
    return enseignants;
    }catch(error)
    {
        throw error;
    }
}
   

}
module.exports=EnseignantRepository;