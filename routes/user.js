const express = require("express");
const router = express.Router();
const auth = require("../auth")

const userController = require("../controllers/user")
//Route for checking if the user's email is already exist in the database
router.post("/signup", (req, res)=>{
	userController.signUp(req.body).then(result => res.send(result))
})

//Routes for User Registration
/*router.post("/signup", (req, res) => {
	userController.signUpUser(req.body).then(result => res.send(result));
})*/

//Routes for authenticating a user

router.post('/login', (req, res) => {
	userController.loginUser(req.body).then(result => res.send(result))
})


router.get("/details", auth.verify, (req, res) => {

       	const userData = auth.decode(req.headers.authorization)	
	//get all task function
	//call the task controller
	userController.getProfile({userId: userData.id}).then(result => res.send(result));
})





//

router.post("/orders", auth.verify, (req, res) => {
	let data = {
		userId: req.body.userId,
		productId: req.body.productId
	}
	userController.order(data).then(resultFromController => res.send(resultFromController));
})


router.get("/userDetails", auth.verify, (req, res) => {

       	const userData = auth.decode(req.headers.authorization)	
	//get all task function
	//call the task controller
	userController.getAllUsers({userId: userData.id}).then(result => res.send(result));
})


module.exports = router;


//
router.get("/orderDetails", auth.verify, (req, res) => {

       	const orderData = auth.decode(req.headers.authorization)	
	//get all task function
	//call the task controller
	userController.getAllUsers({ordersId: orderData._ordersId}).then(result => res.send(result));
})


module.exports = router;



