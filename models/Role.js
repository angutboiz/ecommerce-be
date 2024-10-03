const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["admin", "customer","seller"],
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    desc: {
        type: String,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
    update_by: {
        type: Date,
    },
})

module.exports = mongoose.model("Role", RoleSchema);