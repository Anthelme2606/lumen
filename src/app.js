const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const jwt =require("jsonwebtoken");
const { json } = require("body-parser");

const dbConfig=require("../config/dbConfig");
const morgan = require("morgan");
require("dotenv").config();
const PORT=4000;

const cors = require('cors');
const app = express();
app.use(morgan("dev"));
dbConfig.connect();
const typeDefs = require('./graphql/types/index');
const resolvers = require('./graphql/resolvers/index');


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  
});
app.use(cors());
app.use(json());




app.listen(PORT,async()=>{

  await apolloServer.start();
apolloServer.applyMiddleware({app});

  console.log(`Serveur GraphQL en cours d'execution sur le port ${PORT}`)
})