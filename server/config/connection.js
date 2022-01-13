const mongoose = require("mongoose");

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gca-dashboard', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

module.exports = mongoose.connection;