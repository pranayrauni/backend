import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    descrption: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, {timestamps: true})

export const Product = mongoose.model('Product', productSchema)

// mongodb m v image store kar sakte hain buffer k format m par aisa karna nhi chahiye database heavy ho jayega... image kahi aur store kar lo fir uska url database m store kar lo