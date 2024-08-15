// require('colors');
require("dotenv").config();
const mongoose = require("mongoose");
const app = require('./app');
const port = process.env.PORT || 5000;


async function main() {
  try {
    // connect database
    await mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME })

    console.log('MongoDB is connected')
    app.listen(port, () => {
      console.log("Live Server: http://localhost:5000");
    });
  } catch (error) {
    console.log("Error :", error);
  }
}
main();



