const express = require("express");

const customer = require("./api/customer/CustomerController.js");
const employee = require("./api/employee/EmployeeController.js");
const product = require("./api/products/ProductsController");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use("/customer", customer);
app.use("/employee", employee);
app.use("/product", product);


app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});