const mongoose=require('mongoose')
//model
const Comment=mongoose.model('Comment',{
    message:{type:String},
    product:{type:String},
    user:{type:String},
})
module.exports={Comment}
