const { gql } = require('apollo-server-express');

const EtudiantType = require("./etudiants/etudiantType");

module.exports = gql`
type Query {
    getAll:[Etudiant!]
}
type Mutation {
    creerCompte(data: EtudiantInput):Etudiant
   
  }
${EtudiantType}`;

