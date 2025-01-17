const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    gender: {
        type: Boolean,
        default: 0, //0: male, 1: female
    },
    phoneNumber: {
        type: String,
        default: "",
    },
    dateOfBirth: {
        type: Date,
        default: new Date(),
    },
    verify: {
        type: Boolean,
        default: false,
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    profilePicture: {
        type: String,
        default: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg",
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
    otp: {
        type: Number,
    },
    expire_otp: {
        type: Date,
    },
});

module.exports = mongoose.model("User", UserSchema);
