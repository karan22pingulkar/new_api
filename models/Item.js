const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const itemSchema = new mongoose.Schema({
    ImgUrl:{
        type:String,
        required:true
    },
    MedicineName: {
        type: String,
        required: true,
        trim: true
    },
    Composition: {
        type: String,
        required: true
    },
    Uses: {
        type: String,
        required: true
    },
    Manufacturer: {
        type: ObjectID,
        required: true,
        ref: 'User'
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})
const Item = mongoose.model('Item', itemSchema)
module.exports = Item