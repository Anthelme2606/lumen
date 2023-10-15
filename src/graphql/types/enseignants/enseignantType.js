const { gql } = require("apollo-server-express");
module.exports = gql`
  type Enseignant {
    id: ID!
    nom: String!
    email: String!
    domainesExpertise: [String!]!
    curriculumVitae: String
    lettreMotivation: String
    casierJudiciaire: String
    diplomeCertification: String
    demandeAcceptee: String!
    enseignant_matieres: [Matiere!]
  }

  input CreerEnseignantInput {
    nom: String!
    email: String!
    domainesExpertise: [String!]!
    curriculumVitae: String
    lettreMotivation: String
    casierJudiciaire: String
    diplomesCertifications: String
  }

  input UpdateEnseignantInput {
    nom: String
    email: String
    domainesExpertise: [String]
    curriculumVitae: String
    lettreMotivation: String
    casierJudiciaire: String
    diplomeCertification: String
  }
  type DemandeReponse {
    success: Boolean
    message: String
  }
`;
