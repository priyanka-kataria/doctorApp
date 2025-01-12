const express = require('express');
const { AddDoctor, adminLogin } = require('../controller/AdminController');
const upload = require('../middleware/multer');
const { check } = require("express-validator");
const { protect } = require('../middleware/authAdmin');
const router = express.Router();

router.post('/add_doctor',protect,AddDoctor);
router.post('/login', adminLogin)

module.exports = router;
