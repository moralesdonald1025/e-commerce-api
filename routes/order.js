const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");
const auth = require("../auth");
const mongoose = require("mongoose");
const Order = require("../models/Order")






//let do this order
router.post("/users/checkout", (req, res, next) => {
	const order = new Order({
		_id: mongoose.Types.ObjectId(),
		quantity: req.body.quantity,
		product: req.body.productId,
		userId: req.body.userId,
		price: req.body.price,
		purchasedOn: new Date
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



//Route to order a user to a product

router.post("/orders", auth.verify, (req, res) => {
	let data = {
		userId: req.body.userId,
		productId: req.body.productId,
		
	}
	userController.order(data).then(resultFromController => res.send(resultFromController));
})


//

router.get("/", (req, res) => {
	orderController.getAllOrders().then(resultFromController => res.send(resultFromController));
})


router.post("/addOrder", auth.verify, (req, res) => {

	const userData = 
		auth.decode(req.headers.authorization)
	



	productController.addOrder(req.body, {userData: userData.id, isAdmin:userData.isAdmin}).then(resultFromController => res.send(resultFromController))
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






module.exports = router;