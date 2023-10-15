const EnseignantService = require("../../../services/enseignants/enseignantService");
const EnseignantResolver = {
  Query: {
    findEnseignantById: async (_, { id }) => {
      return await EnseignantService.findEnseignantById(id);
    },
    getEnseignants: async () => {
      return await EnseignantService.getEnseignants();
    },
  },
  Mutation: {
    demandeEnseignant: async (_, { data }) => {
      return await EnseignantService.demandeEnseignant(data);
    },
    accepterDemandeEnseignement: async (_, { enseignantId }) => {
      return await EnseignantService.accepterDemandeEnseignement(enseignantId);
    },
    refuserDemandeEnseignement: async (_, { enseignantId }) => {
      return await EnseignantService.refuserDemandeEnseignement(enseignantId);
    },
  },
  Enseignant : {
    enseignant_matieres: async (parent) => {
      return await EnseignantService.getMatieres(parent.id);
    },
  },
};
module.exports = EnseignantResolver;
