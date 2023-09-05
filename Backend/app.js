const express = require("express");
const app = express();
const mongoose = require("mongoose");
const EmployeeRouter = require("./routes/EmpRoutes");
const bodyParser = require('body-parser');
 
//middleware
app.use(express.json());
app.use("/", EmployeeRouter);
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1/mydb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => { // Successfully connected
        console.log("Successfully connected");
      })
      .catch((err) => {
        // Catch any potential error
        console.log("Unable to connect to MongoDB. Error: " + err);
      });
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;