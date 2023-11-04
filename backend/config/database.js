const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(
        process.env.DB_URL
     ).then(()=>console.log("DB connection successful"))
};

module.exports = connectDatabase;