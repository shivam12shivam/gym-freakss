const { Signup , Login } = require("../Controllers/AuthController");
const {userVerification} =require("../Middlewares/AuthMiddleware")
const {cutdata,bulkdata} =require("../Models/DietModel");

const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.get('/getData', cutdata);
router.get('/getDatabulk',bulkdata);
router.post('/',userVerification);
module.exports = router;