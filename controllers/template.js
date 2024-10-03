const SOModel = require("../models/SOModel");

const Get = async (req, res) => {
    try {
        const find = await SOModel.find();
        res.status(200).json(find);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server gặp lỗi, vui lòng thử lại sau ít phút" });
    }
};

const GetbyId = async (req, res) => {
    try {
        const { id } = req.body;
        const find = await SOModel.findById({ id });
        res.status(200).json(find);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server gặp lỗi, vui lòng thử lại sau ít phút" });
    }
};

const Create = async (req, res) => {
    try {
        const { title, image, quest } = req.body;
        if (!title || !quest || !image) {
            return res.status(400).json({ message: "Vui lòng điền đẩy đủ" });
        }

        const newModel = new SOModel({
            slug: slugify(title, { lower: true }) + "-" + Math.floor(Math.random() * 1000),
            title,
            image,
            quest,
            date: new Date(),
        });

        await newModel.save();
        res.status(201).json({ message: "Thêm thành công" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server gặp lỗi, vui lòng thử lại sau ít phút" });
    }
};

const Update = async (req, res) => {
    try {
        const id = req.params._id; // Lấy id từ URL

        if (!id) {
            return res.status(400).json({ message: "Bạn chưa đăng nhập, vui lòng reload lại trang", status: 400 });
        }
        const updateFields = {}; // Tạo đối tượng rỗng để chứa các trường cần cập nhật

        // Kiểm tra từng trường trong req.body và chỉ thêm vào các trường không undefined
        if (req.body.title !== undefined) updateFields.title = req.body.title;
        if (req.body.subject !== undefined) updateFields.subject = req.body.subject;
        if (req.body.content !== undefined) updateFields.content = req.body.content;
        if (req.body.img !== undefined) updateFields.img = req.body.img;
        if (req.body.noa !== undefined) updateFields.noa = req.body.noa;
        if (req.body.questions !== undefined) {
            updateFields.questions = req.body.questions;
            updateFields.noa += 1;
        }
        if (req.body.default !== undefined) updateFields.default = req.body.default;

        if (req.body.status !== undefined) updateFields.status = req.body.status;
        else updateFields.status = false;

        // Tìm và cập nhật quiz
        const updateModel = await SOModel.findByIdAndUpdate(
            id,
            {
                $set: updateFields, // Chỉ cập nhật các trường được gửi trong request
            },
            { new: true } // Trả về quiz đã được cập nhật
        );

        if (!updateModel) {
            return res.status(404).json({ message: "Không tìm thấy quiz để cập nhật", status: 404 });
        }

        res.status(200).json({ message: "Cập nhật Quiz thành công", updateModel });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server gặp lỗi, vui lòng thử lại sau ít phút" });
    }
};

const Delete = async (req, res) => {
    try {
        const { id } = req.body;
        await SOModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Xóa thành công" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server gặp lỗi, vui lòng thử lại sau ít phút" });
    }
};

module.exports = {
    Get,
    GetbyId,
    Create,
    Update,
    Delete,
};
