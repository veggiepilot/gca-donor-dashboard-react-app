const express = require('express');
const { graphQLHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();


//connect to mlab database
mongoose.connect();
mongoose.connection.once('open', () => {
    console.log('connected to database')
});

app.use('graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log(`Listening to requests on port 4000`)
});