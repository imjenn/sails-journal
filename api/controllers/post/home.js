module.exports = async function(req, res) {

    const allPosts = await Post.find()

    res.view('pages/home',
        {allPosts}
    )
}