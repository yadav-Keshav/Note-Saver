const mongoose = require("mongoose");
const connectDB = async (DB_URL) => {
    try {
        const conn = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connection successfull`)
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

module.exports = connectDB;