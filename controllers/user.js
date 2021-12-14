const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");
const Order = require("../models/Order")
const Product = require("../models/Product");


module.exports.signUp = (reqBody) => {
	return User.find({ email: reqBody.email }).then(result => {
		if(result.length > 0){
			return true;

		}else{
			//no duplicate email found
			let newUser = new User ({
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10),
	})

	//Save
	return newUser.save().then((user, error) => {
		if (error){
			return false;
		}else{
			//user registration is successful
			return `You are successfully registered`
		}
	})
	
		}
	})
}

//User Registration


/*/*module.exports.signUpUser = (reqBody) =>{
	let newUser = new User ({
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10),
	})

	//Save
	return newUser.save().then((user, error) => {
		if (error){
			return false;
		}else{
			//user registration is successful
			return true
		}
	})
}*/



//User Authentication
/*
Steps:
1. Check if the user email exist in our database. If the user doesn't exist, return false
2. if the user exists, compare the password provided in the login form with the password stored in the database
3. Generate/return a jsonwebtoken if the user is successfully logged in and return false if not
*/


module.exports.loginUser = (reqBody) => {

	return User.findOne({ email: reqBody.email }).then(result => {
		if (result == null){
			return false;
		}else{
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password)

		
		if(isPasswordCorrect){
		 
			return { accessToken: auth.createAccessToken(result.toObject())}
		}else{
			//password do not match
			return false
		}


		}
	})
}

module.exports.getProfile = (data) => {

	return User.findById(data.userId).then(result => {
		return result;

	});

};


//

module.exports.order = async (data) => {
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

//add the order id to the order routes
/*let isOrderUpdated = await Order.findById(data.userId).then(order => {
	order.order.push({userId: data.userId})

return order.save().then((order, error) => {
			if(error){
				return false;
			}else{
				return true
			}
		})
	})


	//Condition that will check if the user and course documents have been updated









	if(isOrderUpdated && isProductUpdated && isUserUpdated){
		return true;
	}else{
		return false
	}*/
}



	//get all users info


module.exports.getAllUsers = () => {
	return User.find({}).then(result => {
		return result;
	})
}




module.exports.getAllOrders =(reqBody) => {
	return User.find({orderId: reqBody._orderId}).then(result => {
		return result
	})
}


//setAsAdmin

/*module.exports.setAsAdmin = (reqParams, reqBody, userData) => {
	
	return User.findById(userData.userId, reqBody).then(result => {
		if(userData.isAdmin == false){
			return "You are not an admin can't assign another user as Admin"
		}else {
			return reqBody.isAdmin =success
			return User.findById(req.params.userId).then(result => {
				return result.isAdmin = true
			})
		}else{
			return false
		}
	})

	let setAsAdmin = {
		isAdmin: true
	}


//find by id and update
return User.findByIdAndUpdate(reqParams.userId, setAsAdmin).then((user, error) => {
	if(error){
		return false;
	}else{
		return true
	}
})
*/







module.exports.setAsAdmin = (reqParams,reqBody, userData) => {
	
	return User.findById(userData.userId ).then(result => {
		if(userData.isAdmin == false){
			return "You are not an admin can't assign another user as Admin"
		}else {
			return success
		/*	return User.findById(req.params.userId).then(result => {
				return result.isAdmin = true
			})*/
		}
	})

}







