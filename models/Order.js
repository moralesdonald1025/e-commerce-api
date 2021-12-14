const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderSchema = new Schema ({

_id: mongoose.Schema.Types.ObjectId,
product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
quantity: { type: Number, default: 1, required: true },
totalAmount: {
	type: Number
},
email:{
	type:"String"
},
price: {
	type: Number
},
purchasedOn: {
	type: Date
},
userId: {
	type: String,
	 ref: "product"
}

})


module.exports = mongoose.model("Order", orderSchema);