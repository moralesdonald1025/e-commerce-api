const mongoose = require("mongoose");
/*const Schema = mongoose.Schema;*/

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Product is required"]
	},
	description: {
		type: String,
		required: [true, "Description is required"]
	},
	price: {
		type: Number,
		required: [true, "Price is required"]
	},
	isActive: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		//current date and time when the course is created in our database
		default: new Date()
	},
	  imageUrl: {
    type: String,
    required: true
  },
	orderers: [
	{
		userId: {
			type: String,
		required: [true, "UserId is required"]
	},
	purchasedOn: {
		type: Date,
		default: new Date()
	}
	},
	totalAmount: {
		type: Number,
	},
	price: {
		type: Number
	}
	]
})


module.exports = mongoose.model("Product", productSchema)
