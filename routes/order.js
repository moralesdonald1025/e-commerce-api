const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");
const auth = require("../auth");
const mongoose = require("mongoose");
const Order = require("../models/Order")






//let do this order

//starts of temporary hide
router.post("/users/checkout", (req, res, next) => {
	let order = new Order({
		_id: mongoose.Types.ObjectId(),
		quantity: req.body.quantity,
		product: req.body.productId,
		userId: req.body.userId,
		price: req.body.price,
		purchasedOn: new Date,
		totalAmount: req.body.price * req.body.quantity
	});
	order
	.save()
	
	.then(result => {
		console.log(result);
		res.status(201).json(result);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		})
	
	});
});

//temporary hide only

//Route to order a user to a product
//tempo hide also
//

/*router.get("/", (req, res) => {
	orderController.getAllOrders().then(resultFromController => res.send(resultFromController));
})*/

/*
router.post("/addOrder", auth.verify, (req, res) => {

	const userData = 
		auth.decode(req.headers.authorization)
	



	productController.addOrder(req.body, {userData: userData.id, isAdmin:userData.isAdmin}).then(resultFromController => res.send(resultFromController))
})
*/
//ends of tempo hide


router.post("/users/checkout", (req, res) => {

	const userData = 
		auth.decode(req.headers.authorization)
	



	orderController.createOrder(req.body, userData).then(resultFromController => res.send(resultFromController))
})




/*
router.post("/createOrder", auth.verify, (req, res) => {
	let data = {
		userId: req.body.userId,
		productId: req.body.productId,
		
	}
	userController.createOrder(data).then(resultFromController => res.send(resultFromController));
})
*/

//retrieve all orders admin only
//get method
router.get("/users/orders", auth.verify, (req, res) => {

	const userData = 
		auth.decode(req.headers.authorization)
	

/*const userData = auth.decode(req.headers.authorization)	*/


	orderController.getAllOrders(userData).then(resultFromController => res.send(resultFromController))
})



////


/*router.post("/addOrder", auth.verify, (req, res) => {

	const userData = 
		auth.decode(req.headers.authorization)
	



	productController.addOrder(req.body, {userData: userData.id, isAdmin:userData.isAdmin}).then(resultFromController => res.send(resultFromController))
})*/





















module.exports = router;