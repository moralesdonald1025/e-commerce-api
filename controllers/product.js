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
/*module.exports.updateProduct = (reqParams, reqBody) => {
	let updatedProduct = {
		name: reqBody.name,
		description: reqBody.description,
		price: reqBody.price
	}
return Product.findByIdAndUpdate(reqParams.productId, updatedProduct).then((product, error) => {
	if(error){
		return false;
	}else{
		return "Product Updated Successfully"
	}
})
}

*/

module.exports.updateProduct = (reqParams, userData) => {

return Product.findById(reqParams.productId).then(product => {
if(userData.isAdmin){
		product.name = reqBody.name,
		product.description = reqBody.description,
		product.price = reqBody.price

return product.save().then((saved, err) => {
if(err){
return false
}
else{
return true
}
})
}
else{
return false
}
})
}








//update product end here
//archieve inactive product

module.exports.archieveProduct = (reqParams, reqBody) => {
	let archievedProduct = {
		isActive: false
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






