const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");

const Product = require("../models/Product");

const Order = require("../models/Order")



////start dito headache


/*module.exports.getAllOrders = (userData) => {

return Order.find({}).then(order => {
if(userData.isAdmin){
return order
}else{
	return "Cant get all orders you are not an admin"
}

}

)}*/






































/*module.exports.getOrders = (req, res) => {
  return Order.find({ 'user.userId': req.user._id })
    .then(orders => {
     
      return orders
    })
    .catch(err => console.log(err));
};*/
//dito start ng paghide

/*module.exports.createOrder = (req, res) => {
	return Order.find({ "user.userId": req.user._id }).then(result => {
		let totalAmount  = result.quantity * result.price;

		return totalAmount;
	})

}*/


/*module.exports.order = async (data) => {
	//Add the product ID in the orders array of the user
	let isUserUpdated = await User.findById(data.userId).then(user => {
		// Add the productId in the user's orders array
		user.orders.push({productId: data.productId})
		//Save the updated user information in the database
		return user.save().then((user, error) => {
			if (error){
				return false;
			}else{
				return true;
			}
		})
	})

	//Add the user ID in the enrollees array in the course
	let isProductUpdated = await Product.findById(data.productId).then(product => {
		//Adds the userId in the course's enrollees array
		product.orderers.push({userId: data.userId})

		// Save the updated course information in the database
		return product.save().then((product, error) => {
			if(error){
				return false;
			}else{
				return true
			}
		})
	})
	//Condition that will check if the user and course documents have been updated
	if(isUserUpdated && isProductUpdated){
		return true;
	}else{
		return false
	}
}*/

//dito end




module.exports.getAllOrders = () => {
	return Order.find({}).then(result => {
		return result;
	})
}



/*module.exports.createOrder = () => {

}*/


/*module.exports.addOrder = (reqBody, userData) => {

    return Order.findById(userData.userId).then(result => {

        if (userData.isAdmin == false) {
            return "You are an admin can't add order"
        } else {
            let newOrder = new Order({
            	email: reqBody.email
                name: reqBody.name,
            })
        
            //Saves the created object to the database
            return newOrder.save().then((order, error) => {
                //if Product creation failed
                if(error) {
                    return false
                } else {
                    //Product creation successful
                    return "Order creation successful"
                }
            })
        }
        
    });    
}*/






/*module.exports.createOrder = (req, res) => {
	return Order.find({ "user.userId": req.user._id }).then(result => {
		return result;
	})

}


///////////////////////
module.exports.createOrder = async (req, res) => {
	let isOrderUpdated = await Order.find(data.userId).then(user => {
		return result;
	})

}
*/



//get all orders starts here

module.exports.getAllOrders = (userData) => {

return Order.find({}).then(order => {
if(userData.isAdmin){
return order
}else{
	return "Cant get all orders you are not an admin"
}

}

)}



















module.exports.addOrder = (reqBody, userData) => {

    return Order.findById(userData.userId).then(result => {

        if (userData.isAdmin == false) {
            return "You are an admin can't add order"
        } else {
            let newOrder = new Order({
            	email: reqBody.email
                name: reqBody.name,
                price: reqBody.price,
                quantity: reqBody.quantity,
                totalAmount: reqBody.price * reqBody.quantity
            })
        
            //Saves the created object to the database
            return newOrder.save().then((order, error) => {
                //if Product creation failed
                if(error) {
                    return false
                } else {
                    //Product creation successful
                    return "Order creation successful"
                }
            })
        }
        
    });    
}

















