const DemandeEnsService = require("../../../services/enseignants/demandeEnsService");
const DemandeEnsResolver = {
  Query: {
    findEnseignantById: async (_, { id }) => {
      return await DemandeEnsService.findEnseignantById(id);
    },
    getEnseignants: async () => {
      return await DemandeEnsService.getEnseignants();
    },
  },
  Mutation: {
    demandeEnseignant: async (_, { data }) => {
      return await DemandeEnsService.demandeEnseignant(data);
    },
    accepterDemandeEnseignement: async (_, { enseignantId }) => {
      return await DemandeEnsService.accepterDemandeEnseignement(enseignantId);
    },
    refuserDemandeEnseignement: async (_, { enseignantId }) => {
      return await DemandeEnsService.refuserDemandeEnseignement(enseignantId);
    },
  },
  Demande : {
    enseignant_matieres: async (parent) => {
      return await DemandeEnsService.getMatieres(parent.id);
    },
  },
};
module.exports = DemandeEnsResolver;
