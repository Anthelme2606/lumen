const {gql}=require("apollo-server-express");
module.exports=gql`
type Course {
  id: ID!
  nom: String
  description: String
 fichier:String
 user:User
 
}

input CourseInput {
  nom: String!
  description: String
  fichier:String
  enseignant: ID
  
  
  
}

input CourseUpdateInput {
  nom: String
  description: String
  fichier:String
  
}


`;