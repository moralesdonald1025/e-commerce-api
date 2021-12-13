const jwt = require("jsonwebtoken");
const secret = "KayaKoTo";



module.exports.createAccessToken = (user) => {
	
	const data = {
		id: user._id,
		email: user.email,
		isAdmin: user.isAdmin
	};
	return jwt.sign(data, secret, {})
}


module.exports.verify = (req, res, next) => {
	let token = req.headers.authorization;
	if(typeof token !== "undefined"){
		console.log(token);

		//"Bearer" 
		token = token.slice(7, token.length);
		//Validate the token using "verify" method
		return jwt.verify(token, secret, (err, data) => {
			//if our JWT is not valid
			if(err){
				return res.send({auth: "failed"});
			}else{

				next();
			}
		})
	}else{
		//if token does not exist
		return res.send({auth: "failed"});
	}
}


module.exports.decode = (token) => {
	//Token receive and is not undefined
	if(typeof token !== "undefined"){
		token = token.slice(7, token.length);

		return jwt.verify(token, secret, (err, data) => {
			if (err){
				return null;
			}else{
		
				return jwt.decode(token, {complete: true}).payload;
			}
		})
	}else{
		return null;
	}
}





