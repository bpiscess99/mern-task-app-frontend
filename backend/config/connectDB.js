const mongoose = require("mongoose")

const connectDB = async () =>{
    mongoose.set('strictQuery', false);
    try {
    const connect = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected`);
} catch (error) {
    console.log(error)
    process.exit(1)
    
 }
}
 

// hello
//  Second method of Mongodb connection
// const dotenv = require("dotenv").config()
// const express = require("express");
// const connectDB = require("./config/connectDB");
// const app = express();


// // Routes
// app.get("/", (req, res) => {
//     res.send('Home Page')
// });

// const PORT = process.env.PORT || 5000;

// module.exports = connectDB;

// const startServer = async() =>{
//     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`Server running on port ${PORT}`);
//         });
//     } catch (error) {
//      console.log(error)        
//     }
// };
// startServer()