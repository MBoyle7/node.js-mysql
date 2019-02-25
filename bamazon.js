const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Arsenal$7",
    PORT: 3306,
    database: "bamazonDB"
});

connection.connect(function(err){
    if(err){
    console.log('Error connecting to bamazonDB');
    return;
    }
    console.log('Connected');

    beginApp();
});

// Function to start the app
const beginApp = function(){
    connection.query("SELECT * FROM Products", function(err, result) {
        if (err) throw err;
        return (getBamazonProducts(result));
      
      });
}

// Function to display all of the products available for sale in a table
const getBamazonProducts = function (Products){
    console.log("Welcome to Bamazon!");
    for (var i = 0; i < Products.length; i++) {
        const productsResults = "\r\n"+
        "ItemID: " + Products[i].itemId+"\r\n"+
        "Product Description: " + Products[i].productName+"\r\n"+
        "Department: " + Products[i].categoryName+"\r\n"+
        "Price: $ "+ Products[i].price+"\r\n"+
        "Current Stock: " + Products[i].productQuantity;
        console.log(productsResults);
    }
    
}

const