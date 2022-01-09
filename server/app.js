if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gca-dashboard', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`Listening to requests on port 4000`);
});
