const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        allBooks: [Book],
        getBook(isbn: String!): Book
    }
    
    type Book {
        title: String
        author: String
        year: Int!
        isbn: String!
    }
`;

exports.typeDefs = typeDefs
