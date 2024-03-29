const express = require("express");
const { addUser, getUsers, getUser, editUser, deleteUser} = require("../controllers/user-controller");
const router = express.Router();


router.post('/add',addUser)
router.get('/all',getUsers)
router.get('/:id',getUser)
router.post('/:id',editUser)
router.delete('/:id',deleteUser);


module.exports = router