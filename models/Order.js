const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderSchema = new Schema ({

_id: mongoose.Schema.Types.ObjectId,
product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
quantity: { type: Number, default: 1, required: true },
totalAmount: {
	type: Number
},
purchasedOn: {
	type: Date
}

})


module.exports = mongoose.model("Order", orderSchema);