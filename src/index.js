//import express, express-graphql middleware and schema
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

//Create server
const server = express();

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 5000

//mounting our schema on '/graphql' route
server.use('/graphql', graphqlHTTP((req, res, qql) => ({

    schema,
    graphql: dev,
    pretty: dev

})))

//starting server
server.listen(PORT, err => {
    if(err) throw err 
    console.log(`Ready on PORT ${PORT}`)
})