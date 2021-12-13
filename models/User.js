const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: [true, "Email is required"]
	},
	password: {
		type: String,
		required: [true, "Password is required"]
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	orders: [
	{
		productId: {
			type: String,
			required: [true, "Product ID is required"]
		},
		orderedOn: {
			type: Date,
			default: new Date
		},
		status: {
			type: String,
			default: "Ordered"
		},
		price: {
			type: Number
		}
	}
	]
	

})


module.exports = mongoose.model("User", userSchema);



