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
    GraphQLSchema, 
    GraphQLNonNull
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
        students: {type: GraphQLInt},
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

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
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
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({})
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
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return User.findById(args.id);
            } 
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addDonor: {
            type: DonorType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                address1: {type: new GraphQLNonNull(GraphQLString)},
                address2: {type: new GraphQLNonNull(GraphQLString)},
                city: {type: new GraphQLNonNull(GraphQLString)},
                state: {type: new GraphQLNonNull(GraphQLString)},
                zip: {type: new GraphQLNonNull(GraphQLInt)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                phone: {type: new GraphQLNonNull(GraphQLString)},
                students: {type: new GraphQLNonNull(GraphQLString)},
            }
        },
        addStudent: {
            type: StudentType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                parentEmail: {type: new GraphQLNonNull(GraphQLString)},
                fundingNeeded: {type: new GraphQLNonNull(GraphQLString)},
                donors: {type: GraphQLString},
            }
        },
        addUser: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});