const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const auth = require("../auth")


router.post("/", auth.verify, (req, res) => {

	const userData = 
		auth.decode(req.headers.authorization)
	



	productController.addProduct(req.body, {userData: userData.id, isAdmin:userData.isAdmin}).then(resultFromController => res.send(resultFromController))
})



//retrive all products
router.get("/all", (req, res) => {
	productController.getAllProducts().then(resultFromController => res.send(resultFromController));
})

//Retrieve all active Products
router.get("/allActive", (req, res) => {
	productController.getAllActive().then(resultFromController => res.send(resultFromController))
})

//retrieve specific product
router.get("/:productId", (req, res) => {
	console.log(req.params.productId)

	productController.getProduct(req.params).then(resultFromController => res.send(resultFromController));
}) 


//update a product
router.put("/:productId", auth.verify, (req, res) => {
	productController.updateProduct(req.params, req.body).then(resultFromController => res.send(resultFromController))
})




router.put("/:productId/archieve", auth.verify, (req, res) => {
	productController.archieveProduct(req.params, req.body).then(resultFromController => res.send(resultFromController))
})






module.exports = router;
