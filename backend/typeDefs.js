const { gql } = require('apollo-server-express')

const typeDefs = gql `
    type Post {
        id : ID
        title : String
        description : String
    }

    type Query {
        getAllPosts: [Post]
        getPost(id : ID) : Post
    }

    input PostInput{
        title : String
        description : String
    }

    type Mutation {
        createPost(post : PostInput) : Post
        updatePost(id : ID, post : PostInput) : Post
        deletePost(id : ID) : String
    }
`

module.exports = typeDefs