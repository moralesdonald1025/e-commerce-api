const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/order");
const bodyParser = require("body-parser")
const app = express();
const port = 4000;
const ejs = require("ejs")

app.use(cors());
app.set("view engine", "ejs")

app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/users", userRoutes)

app.use("/api/product", productRoutes)

app.use("/api/order", orderRoutes);

mongoose.connect("mongodb+srv://admin:admin@cluster0.ek4rh.mongodb.net/myFullDatabase?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", () => console.log("Now Connected to my Database"));

app.listen(process.env.PORT || port, () => console.log(`ecommerce API server is now listening to port ${process.env.PORT || port}`))

app.get("/api/users/signup", function (req, res) {
	res.render("index")
});

/*app.get("/api/product/all", function (req, res) {
	res.render("allProducts", {
		productList: result
	})
})*/

app.get("/api/users/login", function (req, res){
	res.render("login")
})



















