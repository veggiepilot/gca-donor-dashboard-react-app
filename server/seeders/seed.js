const db = require('../config/connection');
const { Donor, Student, User } = require('../models');
const donorSeed = require("./donorData.json"); 
const studentSeed = require("./studentData.json");
const userSeed = require("./userData.json");

db.once('open', async () => {
    try {
        await Donor.deleteMany({});
        await Student.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeed);
        await Donor.create(donorSeed);
        await Student.create(studentSeed);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('all done!');
    process.exit(0);
})
// const seedDonor = async () => {
//     await Donor.deleteMany({})
//     .then(() => Donor.collection.insertMany(donorSeed))
//     .then((data) => {
//         console.log(data.insertedCount + ' records inserted!')
//     }) 
//     .catch(err => {
//         console.error(err)
//     })
// };

// const seedStudent = async () => {  
//     await Student.deleteMany({})
//     .then(() => Student.collection.insertMany(studentSeed))
//     .then((data) => {
//         console.log(data.insertedCount + ' records inserted!')
//     }) 
//     .catch(err => {
//         console.error(err)
//     })
// };

// const seedUser = async () => {  
//     await User.deleteMany({})
//     .then(() => User.collection.insertMany(userSeed))
//     .then((data) => {
//         console.log(data.insertedCount + ' records inserted!')
//     }) 
//     .catch(err => {
//         console.error(err)
//     })
// };

// seedDonor();
// seedStudent();
// seedUser();
// console.log('all done!');
// process.exit(0);




