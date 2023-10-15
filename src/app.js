const express = require('express');
const mongoose = require('mongoose');
//const { ApolloServer } = require('apollo-server-express');
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
//const { json } = require("body-parser");
const cors = require("cors");
const http = require("http");
const User=require("./models/users/userModel");

const jwt =require("jsonwebtoken");
const { json } = require("body-parser");

const dbConfig=require("../config/dbConfig");
const context=require("../context/context");
const morgan = require("morgan");
//const http=require('http');
require("dotenv").config();
const app = express();



const typeDefs = require('./graphql/types/index');
const resolvers = require('./graphql/resolvers/index');


const startServer = async () => {
  const app = express();
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: true }));
  const httpServer = http.createServer(app);

  dbConfig.connect();

  // testService();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    includeStacktraceInErrorResponses: false,
  });
  await server.start();
  app.use(
    "/",
    cors(),
    json(),
   expressMiddleware(server, {
      context: context,
    })
  );
  new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000/`);
};

startServer();
