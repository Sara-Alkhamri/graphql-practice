const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const queries = ('./queries')

module.exports = new GraphQLSchema ({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    })
})
