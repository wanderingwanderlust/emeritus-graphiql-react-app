const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolver');
const app = express();
const PORT = 3001;
const MONGODB_URI = "mongodb://localhost:27017/my_local_db"
// const MONGODB_CLOUD = 


mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
mongoose.connection.once('open', function() {
    console.log('Connected to the database');
})
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error : ' + err);
})

app.use(cors());

app.get('/', function(req, res) { res.send('Hello World!') });
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(PORT, function() { console.log(`Server is listening on port ${PORT}`)});
