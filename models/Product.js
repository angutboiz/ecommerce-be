const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },

    stock: {
        //số lượng tồn kho
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
    update_by: {
        type: Date,
    },
});

module.exports = mongoose.model("Product", ProductSchema);
