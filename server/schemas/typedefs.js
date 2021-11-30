const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String]
    description: String
    bookId: String
    title: String
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    getUser: User
  }

  input BookInput {
    authors: [String]
    description: String
    bookId: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    deleteBook(bookId: ID!): User
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
  }
`;

module.exports = typeDefs;
