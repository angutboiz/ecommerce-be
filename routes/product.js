const express = require("express");
const { Get,GetbyId,Create,Update,Delete } = require("../controllers/productController");
const { authMiddleware, checkAdminMiddleware } = require("../middleware/authorizationMiddleWare");
const router = express.Router();

router.get("/admin", authMiddleware, checkAdminMiddleware, getAllProfile);
router.get("/", authMiddleware, getProfile);

module.exports = router;
