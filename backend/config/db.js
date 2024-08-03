const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connection Successful ${mongoose.connection.host}`)
  } catch (error) {
    console.log(`Error In DB Connection ${error}`);
  }
};
module.exports=connectDb