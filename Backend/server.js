const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");// to handle the cors errors
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;//Backend Port

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// Correct Mongoose connection configuration
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once("open",() =>{
    console.log("Mongodb Connection Success!");
  })
  const stockRouter = require("./routes/stocks.js");
  
  app.use("/stock",stockRouter);
  app.listen(PORT, ()=>{
    console.log(`Server is up and running on port number: ${PORT}`)
  })


