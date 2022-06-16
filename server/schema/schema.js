const graphql = require("graphql");
const _ = require("lodash");

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID,
    GraphQLInt,
    GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({

    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({

        name: "Author",
        fields: () => ({
            id: {type: GraphQLID},
            name: {type: GraphQLString},
            age: {type: GraphQLInt}
        })

});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //names of queries
        getBook: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //code to get data from db/other source
            }
        },

        getAuthor: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){

            }
        }
    }


});

module.exports = new GraphQLSchema({
    query: RootQuery
});