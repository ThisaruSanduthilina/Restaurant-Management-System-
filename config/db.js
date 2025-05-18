const mongoose = require('mongoose');

//function mongodb connection

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected".bgCyan.white);
    }catch (error) {
        console.log("MongoDB connection error:",error.colors.bgred);

    }
};