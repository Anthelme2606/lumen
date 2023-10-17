const {gql}=require("apollo-server-express");
module.exports=gql`
type Matiere {
  id: ID!
  nom: String
  description: String
  image:Upload
 # enseignants: [Enseignant]
  niveauDifficulte: String
  nombreInscrits: Int
  dureeCours: String
  prerequis: String
  langueEnseignement: String
  objectifsApprentissage: String
  coutAchat: Float
  courses:[Course]
  etudiants:[User]
  
}

input MatiereInput {
  nom: String!
  description: String
  image:Upload
  niveauDifficulte: String
 
  dureeCours: String
  prerequis: String
  langueEnseignement: String
  objectifsApprentissage: String
  coutAchat: Float!
  
  
}

input MatiereUpdateInput {
  nom: String
  description: String
  image:Upload
  enseignants: ID
  niveauDifficulte: String
  nombreEtudiantsInscrits: Int
  dureeCours: String
  prerequis: String
  langueEnseignement: String
  objectifsApprentissage: [String]
  coutAchat: Float
  
}
scalar Upload 




`;