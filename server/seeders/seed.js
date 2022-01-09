if (process.env.NODE_ENV !== 'production'){require('dotenv').config()};
const mongoose = require('mongoose');
const { Donor, Student, User } = require('.../models');
const donorSeed = require("./donorData.json"); 
const studentSeed = require("./studentData.json");
const userSeed = require("./userData.json");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// const donorSeed = [
//     {
//         firstName: "Jon",
//         lastName: "Smith",
//         address1: "1234 Cherry Lane",
//         address2: "",
//         city: "Dallas",
//         state: "Texas",
//         zip: 45632,
//         email: "jonsmith@apple.com",
//         phone: 5550235555,
//         donation: [
//             {
//             amount: 4000
//             }
//         ]
//     },
//     {
//         firstName: "Donna",
//         lastName: "Summer",
//         address1: "322 Sunshine Drive",
//         address2: "",
//         city: "Los Angeles",
//         state: "California",
//         zip: 90210,
//         email: "donna.summer@gmail.com",
//         phone: 5554325555,
//         donation: [
//             {
//             amount: 5000
//             }
//         ]
//     },
//     {
//         firstName: "Jeff",
//         lastName: "Bezos",
//         address1: "324 Keystone Dr",
//         address2: "",
//         city: "Calabasas",
//         state: "California",
//         zip: 90234,
//         email: "jeff@amazon.com",
//         phone: 5556355555,
//         donation: [
//             {
//             amount: 1000
//             }
//         ]
//     },
//     {
//         firstName: "Katherine",
//         lastName: "Wilson",
//         address1: "4324 Lyster Lane",
//         address2: "",
//         city: "Troy",
//         state: "Michigan",
//         zip: 45632,
//         email: "kat@gmail.com",
//         phone: 5554785555,
//         donation: [
//             {
//             amount: 300
//             }
//         ]
//     },
//     {
//         firstName: "Bobby",
//         lastName: "Johnson",
//         address1: "34252 Test Dr",
//         address2: "",
//         city: "Atlanta",
//         state: "Georgia",
//         zip: 35428,
//         email: "",
//         phone: 5554895555,
//         donation: [
//             {
//             amount: 1000
//             }
//         ]
//     },
//     {
//         firstName: "Jane",
//         lastName: "Doe",
//         address1: "234 Fryer St",
//         address2: "",
//         city: "Augusta",
//         state: "Georgia",
//         zip: 30805,
//         email: "jane@gmail.com",
//         phone: 5556585555,
//         donation: [
//             {
//             amount: 6000
//             }
//         ]
//     },
//     {
//         firstName: "Don",
//         lastName: "Green",
//         address1: "3424 Redding Dr",
//         address2: "",
//         city: "Columbus",
//         state: "Georgia",
//         zip: 30872,
//         email: "don@gmail.com",
//         phone: 5558962145,
//         donation: [
//             {
//             amount: 300
//             }
//         ]
//     },
//     {
//         firstName: "Stephanie",
//         lastName: "Franco",
//         address1: "435 Spartan Dr",
//         address2: "",
//         city: "Savannah",
//         state: "Georgia",
//         zip: 30265,
//         email: "stephanie@gmail.com",
//         phone: 5553624856,
//         donation: [
//             {
//             amount: 2000
//             }
//         ]
//     }
// ];

Donor.deleteMany({})
    .then(() => Donor.collection.insertMany(donorSeed))
    .then((data) => {
        console.log(data.result.n + ' records inserted!')
        process.exit(0)
    }) 
    .catch(err => {
        console.error(err)
        process.exit(1);
    })

Student.deleteMany({})
.then(() => Student.collection.insertMany(studentSeed))
.then((data) => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
}) 
.catch(err => {
    console.error(err)
    process.exit(1);
})

User.deleteMany({})
.then(() => User.collection.insertMany(userSeed))
.then((data) => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
}) 
.catch(err => {
    console.error(err)
    process.exit(1);
})