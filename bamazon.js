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
    if(err) throw err;
    console.log("Connected!");
    makeTable();
})

const makeTable = () => {
    connection.query("SELECT * FROM products", function(err,res){
        for(var i=0; i < res.length; i++){
            console.log(res[i].itemId + " || " + res[i].productName + " || " +
                        res[i].categoryName + " || " + res[i].price + "|| " +
                        res[i].productQuantity + "\n");
        }
    askCustomer(res);
    })
}

const askCustomer = function(res){
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: 'What would you like to buy!?'
    }]).then(function(answer){
        var correct = false;
        for(var i=0; i < res.length; i++){
            if(res[i].productName == answer.choice){
                correct = true;
                var product = answer.choice;
                var id = i;
                inquirer.prompt({
                    type: 'input',
                    name: 'quant',
                    message: 'How many would you like to purchase?',
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        } else {
                            return false;
                        }
                    }
                }).then(function(answer){
                    if((res[id].productQuantity-answer.quant) > 0){
                        connection.query(" 'UPDATE Products SET productQuantity=' " + (res[id].productQuantity-answer.quant) +
                        " 'WHERE productName=' " + product + "'",
                        function(err, res2){
                            console.log("Product successfully purchased! Your total is " + res[id].price*answer.quant + " Dollars");
                            makeTable();
                        })
                    } else {
                        console.log("Not a valid purchase.");
                        askCustomer(res);
                    }
                })
            }
        }
    })
}