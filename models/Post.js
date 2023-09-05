const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title : { 
        type: String,
        required : true,
    },
    caption : {
        type: String,
        required : true,
    },
    image : {
        type: String,
    },
    cloudinaryId : {
        type: String,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})


module.exports = mongoose.model('Post', PostSchema) 