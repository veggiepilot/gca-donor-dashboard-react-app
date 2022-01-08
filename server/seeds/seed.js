const db = require('../config/connection');
const { Donor, Student, User } = require('../models');
const donorSeeds = require("./donorData.json");
const studentSeeds = require("./studentData.json");
const userSeeds = require("./userData.json");

db.once('open', async () => {
    try {
        await Donor.deleteMany({});
        await Student.deleteMany({});
        await User.deleteMany({});

        await Donor.create(donorSeeds);
        await User.create(userSeeds);
        await Student.create(studentSeeds)
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('data seeded');
    process.exit 
})