const express = require("express");
const {graphqlHTTP} = require("express-graphql"); //allows express to understand graphql
//provides a simple way to create an express server that runs the graphql api
//use it as middleware on a single route (remeber graphql has a single endpoint)
//acts as a handler function for graphql requests to the server
const schema = require('./schema/schema');


const app = express();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for requests on port:4000");
})