const mongoose = require("mongoose");

const connectToDatabase = async () => {
    const dbURI = "mongodb://127.0.0.1:27017/sn";
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error in connecting to Database")
    }
}

module.exports = {
    connectToDatabase,
}