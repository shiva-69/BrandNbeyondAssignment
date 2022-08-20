const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./Database");
const app = express();
const { UserRouter} = require("./Routers/UserRouter");




app.use(cors());
app.use(express.json());
app.use(UserRouter);


connectToDatabase()
.then(() => {
    try {
        app.listen(3001, () => {
            console.log("Connected to Server");
        })
    } catch (error) {
        console.log("error in connecting to server")
    }
})