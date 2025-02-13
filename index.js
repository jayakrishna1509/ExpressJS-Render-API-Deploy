var express = require("express");
// var fetch = require("node-fetch");
var app = express();
app.get("/", async (req, res) => {
  // app.get("/products", async (req, res) => {
  const data = await fetch("https://fakestoreapi.com/products");
  const data_json = await data.json();
  //   res.send(data_json);
  //   res.send(req.query.category);
  var category = req.query.category;
  var filter_data;
  switch (category) {
    case "men":
      filter_data = data_json.filter((val) => {
        return val.category === "men's clothing";
      });
      break;
    case "women":
      filter_data = data_json.filter((val) => {
        return val.category === "women's clothing";
      });
      break;
    case "jewelery":
      filter_data = data_json.filter((val) => {
        return val.category === "jewelery";
      });
      break;
    case "electronics":
      filter_data = data_json.filter((val) => {
        return val.category === "electronics";
      });
      break;
    default:
      filter_data = data_json;
      break;
  }
  res.send(filter_data);
});

// start the server
app.listen(3007, () => {
  console.log("Server is running on port 3007");
});

// check the server
// http://localhost:3007/products?category=men
// http://localhost:3007/products?category=women
// http://localhost:3007/products?category=jewelery
// http://localhost:3007/products?category=electronics
