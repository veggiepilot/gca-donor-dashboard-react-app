const graphql = require("graphql");
const Donor = require("../models/donor");
const Student = require("../models/student");
const User = require("../models/user");

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} = graphql;

const DonorType = new GraphQLObjectType({
    name: "Donor",
    fields: () => ({
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        address1: {type: GraphQLString},
        address2: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        zip: {type: GraphQLInt},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        donations: {type: GraphQLInt},
    })
});

const StudentType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        parentEmail: {type: GraphQLString},
        fundingNeeded: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        donors: {
            type: new GraphQLList(DonorType),
            resolve(parent, args) {
                return Donor.find({});
            }
        },
        students: {
            type: new GraphQLList(StudentType),
            resolve(parent, args) {
                return Student.find({})
            }
        }, 
        donor: {
            type: DonorType,
            args: { id: {type: GraphQLID}},
            resolve(parent, args){
                return Donor.findById(args.id);
            }
        }, 
        student: {
            type: StudentType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Student.findById(args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});