const postModel = require("../model/post.model")




async function addPostContoller(req,res){
    const {post_url, caption} = req.body


    const newPost = await postModel.create({
        post_url : post_url,
        caption : caption
    })

    res.status(201).json({
        message : "Post created sucessfully"
    })
    
}





module.exports = {
    addPostContoller
}