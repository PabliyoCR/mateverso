const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const port = 4000

async function startServer() {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({
        app,
        cors: {
            //origin: ["http://localhost:3000"]
        }
    })
    app.use((req, res) => {
        res.send("Hello from express apollo server")
    })
    await mongoose.connect('mongodb://localhost:27017/mateverso_db', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Mongoose connected...')
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

startServer()