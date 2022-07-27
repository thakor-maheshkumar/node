const express = require('express')
const UserController = require('../controllers/User')
const router = express.Router();


router.post('/', UserController.create);
router.get('/',UserController.findAll);
router.get('/:id',UserController.findOne);
module.exports = router
