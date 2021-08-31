const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        desc: {
            type: String,
            trim: true,
            required: true,
            maxlength: 2000
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        size: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }
        ,
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        quantity: {
            type: Number
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        sold: {
            type: Number,
            default: 0
        },
        shipping: {
            required: false,
            type: Boolean
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)