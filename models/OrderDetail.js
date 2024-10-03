const mongoose = require("mongoose");

const OrderDetailchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model("OrderDetail", OrderDetailchema);
