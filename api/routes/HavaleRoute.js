const express = require('express');
const router = express.Router();

const HavaleController = require('../controllers/HavaleController');
const auth = require("../middleware/isAuth");

router.post('/gecmis', auth, HavaleController.GecmisHavaleler);
router.post('/yenihavale', auth, HavaleController.YeniHavale);

module.exports = router;