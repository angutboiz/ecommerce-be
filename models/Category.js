const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["Thời trang", "Điện thoại", "Máy tính", "Đồ gia dụng", "Ô tô", "Xe máy", "Đồ chơi", "Sách", "Thực phẩm"],
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
});

module.exports = mongoose.model("Category", CategorySchema);
