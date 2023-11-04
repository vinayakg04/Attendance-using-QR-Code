const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAuthenticatedAdmin } = require('../middleware/auth');



/// admin route

router.route("/login").post(adminController.login);
router.route("/logout").get(adminController.logout);
router.route("/getAllAdmins").get(isAuthenticatedAdmin,adminController.getAllAdmin);
router.route("/getSingleAdmin/:id").get(isAuthenticatedAdmin,adminController.getSingleAdmin);
router.route("/deleteAdmin/:id").delete(isAuthenticatedAdmin,adminController.deleteAdmin);

module.exports = router;
