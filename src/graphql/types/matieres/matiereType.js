const {gql}=require("apollo-server-express");
module.exports=gql`
type Matiere {
  id: ID!
  nom: String
  description: String
 # enseignants: [Enseignant]
  niveauDifficulte: String
  nombreEtudiantsInscrits: Int
  dureeCours: String
  prerequis: String
  langueEnseignement: String
  objectifsApprentissage: [String]
  coutAchat: Float
 
}

input MatiereInput {
  nom: String!
  description: String
  enseignants: ID
  niveauDifficulte: String
  nombreEtudiantsInscrits: Int
  dureeCours: String
  prerequis: String
  langueEnseignement: String
  objectifsApprentissage: [String]
  coutAchat: Float!
  
  
}

input MatiereUpdateInput {
  nom: String
  description: String
  enseignants: ID
  niveauDifficulte: String
  nombreEtudiantsInscrits: Int
  dureeCours: String
  prerequis: String
  langueEnseignement: String
  objectifsApprentissage: [String]
  coutAchat: Float
  
}


`;