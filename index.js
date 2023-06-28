const express = require('express');
const mongoose = require('mongoose');
const dishRouter = require('./routes/dishes');
const cors = require('cors')
const app = express();
const port = 5000;

mongoose.connect("mongodb+srv://adil:aadil%400321@cluster0.1ijveb9.mongodb.net/foodie-data")
    .then(() => console.log("DBConnection Successfull"))
    .catch((err) => console.log(err))

app.use(cors());
app.use(express.json());
app.use("/", dishRouter);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});