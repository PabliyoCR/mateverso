const Post = require('./models/Post.model')

const resolvers = {
    Query: {
        getAllPosts: async() => {
            return await Post.find()
        },
        getPost: async(parent, args, context, info) => {
            return await Post.findById(args.id)
        }
    },
    Mutation: {
        createPost: async(parent, args, context, info) => {
            const { title, description } = args.post
            const post = new Post({ title, description })
            await post.save()
            return post
        },
        updatePost: async(parent, args, context, info) => {
            const { id } = args
            const { title, description } = args.post
            const post = await Post.findByIdAndUpdate(id, { title, description }, { new: true })
            return post
        },
        deletePost: async(parent, args, context, info) => {
            await Post.findByIdAndDelete(args.id)
            return 'Post Deleted'
        }
    }
}

module.exports = resolvers