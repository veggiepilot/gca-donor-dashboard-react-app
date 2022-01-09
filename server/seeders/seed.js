if (process.env.NODE_ENV !== 'production'){require('dotenv').config()};
const mongoose = require('mongoose');
const { Donor, Student, User } = require('../models');
const donorSeed = require("./donorData.json"); 
const studentSeed = require("./studentData.json");
const userSeed = require("./userData.json");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
});

const seedDonor = async () => {
    await Donor.deleteMany({})
    .then(() => Donor.collection.insertMany(donorSeed))
    .then((data) => {
        console.log(data.insertedCount + ' records inserted!')
    }) 
    .catch(err => {
        console.error(err)
    })
};

const seedStudent = async () => {  
    await Student.deleteMany({})
    .then(() => Student.collection.insertMany(studentSeed))
    .then((data) => {
        console.log(data.insertedCount + ' records inserted!')
    }) 
    .catch(err => {
        console.error(err)
    })
};

const seedUser = async () => {  
    await User.deleteMany({})
    .then(() => User.collection.insertMany(userSeed))
    .then((data) => {
        console.log(data.insertedCount + ' records inserted!')
    }) 
    .catch(err => {
        console.error(err)
    })
};

seedDonor();
seedStudent();
seedUser();





