const mongoose = require("mongoose");

const Orderchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model("Order", Orderchema);
