// dummy database
// const post1 = {
//     id: 1, 
//     title: 'POST TITLE 1', 
//     body: 'SOME BODY 1'
// }
// const post2 = {
//     id: 2, 
//     title: 'POST TITLE 2', 
//     body: 'SOME BODY 2'
// }
// const post3 = {
//     id: 3, 
//     title: 'POST TITLE 3', 
//     body: 'SOME BODY 3'
// }
// const allPosts = [post1, post2, post3]

// const Post = require("../models/Post")

// const Post = require("../models/Post")

// const Post = require("../models/Post")

module.exports = {
    create: function (req, res) {
        const title = req.param('title')
        const body = req.param('body')
        sails.log.debug("title: " + title) // sails debug log 
        sails.log.debug("body: " + body)

        Post.create({ title: title, body: body }).exec(function(err) {
            if (err) {
                return res.serverError(err.toString());
            }
            return res.redirect('/home')
            // return res.send();
        })
    },

    findAll: async function (req, res) {
        try {
            const posts = await Post.find()
            res.send(posts)
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    findOne: function (req, res) {
        const postId = req.param('postId')

        const filteredPosts = allPosts.filter(p => p.id == postId)

        if (filteredPosts.length > 0) {
            res.send(filteredPosts[0])
        } else {
            res.send('Failed to find post by id: ' + postId)
        }
        res.send(postId)
    },

    delete: async function(req, res) {
        try {
            const postId = req.param('postId')
            await Post.destroy({ id: postId })
            res.send('Deleting...')
            res.redirect('/home')
        }
        catch (err) {
            res.serverError(err.toString())
        }
    }
}