const Product = require("../models/Product")



module.exports.addProduct = (reqBody, userData) => {

    return Product.findById(userData.userId).then(result => {

        if (userData.isAdmin == false) {
            return "You are not an admin"
        } else {
            let newProduct = new Product({
                name: reqBody.name,
                description: reqBody.description,
                price: reqBody.price,
                imageUrl: reqBody.imageUrl
            })
        
            //Saves the created object to the database
            return newProduct.save().then((product, error) => {
                //if Product creation failed
                if(error) {
                    return false
                } else {
                    //Product creation successful
                    return "Product creation successful"
                }
            })
        }
        
    });    
}


//Something wrong with syntax



//retrieve all products
module.exports.getAllProducts = () => {
	return Product.find({}).then(result => {
	return result
	})
}








//Retrieve all active cproduct
module.exports.getAllActive = () => {
	return Product.find({isActive: true}).then(result => {
		return result
	})
}

//Retrieve a specific product

module.exports.getProduct = (reqParams) => {
	return Product.findById(reqParams.productId).then(result => {
		return result;
	})
}

//Update a product
module.exports.updateProduct = (reqParams, reqBody) => {
	let updatedProduct = {
		name: reqBody.name,
		description: reqBody.description,
		price: reqBody.price
	}
//find by id and update
return Product.findByIdAndUpdate(reqParams.productId, updatedProduct).then((product, error) => {
	if(error){
		return false;
	}else{
		return "Product Updated Successfully"
	}
})
}


//archieve inactive product

module.exports.archieveProduct = (reqParams, reqBody) => {
	let archievedProduct = {
		isActive: reqBody.isActive
	}
//find by id and update
return Product.findByIdAndUpdate(reqParams.productId, archievedProduct).then((product, error) => {
	if(error){
		return false;
	}else{
		return true
	}
})
}






