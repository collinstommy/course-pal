const { GraphQLServer } = require('graphql-yoga')

const { findById } = require('./utils/graphql')

const allContent = [
  { id: "c1", title: 'Intro to React', author: 'Wes Bos', type: 'videoSeries', url: 'https://reactforbeginners.com/', tags: ['react'], rating: 4.1},
  { id: "c2", title: 'Modern React with Redux', author: 'Stephen Grider', type: 'videoSeries', url: 'https://www.udemy.com/react-redux/', tags: ['react', 'redux'], rating: 3},
  { id: "c3", title: 'Best CSS Frameworks of 2018', author: 'Stephen Grider', type: 'videoSeries', url: 'https://hackernoon.com/top-5-most-popular-css-frameworks-that-you-should-pay-attention-to-in-2017-344a8b67fba1', rating: 1.1 },
  { id: "c4", title: 'JS for Beginners', author: 'Johanes', type: 'videoSeries', url: 'https://www.udemy.com', tags: ['css', 'sass', 'html'], rating: 4.7 },
  { id: "c5", title: 'Redux and React', author: 'Johanes', type: 'videoSeries', url: 'https://www.udemy.com', rating: 4.2 },
  { id: "c6", title: 'Learn Python the Hardwat', author: 'Stephen Grider', type: 'videoSeries', url: 'https://hackernoon.com/top-5-most-popular-css-frameworks-that-you-should-pay-attention-to-in-2017-344a8b67fba1', rating: 1.1 },
  { id: "c7", title: 'Java and Spring', author: 'Johanes', type: 'videoSeries', url: 'https://www.udemy.com', tags: ['css', 'sass', 'html'], rating: 4.7 },
  { id: "c8", title: 'Building large scale apps in Java', author: 'Johanes', type: 'videoSeries', url: 'https://www.udemy.com', rating: 4.2 },
];

const allUsers = [
  { id: "user1", email: 'tomascollins@gmailcom', userName: "collinstommy", bookmarked:  [{ id: "c1", title: 'Intro to React', author: 'Wes Bos', type: "Video"}] },
  { id: "user2", email: 'jimbob@gmailcom', userName: "jbob56", bookmarked:  [] },
  { id: "user3", email: 'jessieb@gmailcom', userName: "jessieb", bookmarked:  []}
];

const typeDefs = `
  type Query {
    contents: [Content!]!
    content(id: ID!): Content
    users: [User!]!
    user(id: ID!): User
  }

  type Content {
    id: String!
    title: String!
    author: String!
    type: ContentType!
    url: String!
    lengthInHours: Float
    tags: [String!]
    rating: Float!
  }

  type User {
    id: String!, 
    email: String!
    bookmarked: [Content]
    userName: String!
  }

  enum ContentType {
    videoSeries
    video
    article
    course
  }
`



const resolvers = {
  Query: {
    content: (obj, args, context) => { return findById(args.id, allContent) },
    contents: () => allContent,
    users: () => allUsers,
    user: (obj, args, context) => { return findById(args.id, allUsers) }
  },
}

const options = { port: 4000 }
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(options, () => console.log('Server is running on localhost:' + options.port))
