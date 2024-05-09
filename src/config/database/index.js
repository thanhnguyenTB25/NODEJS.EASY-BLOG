const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect('mongodb://localhost:27017/myDB');
        console.log("client connected !");
    } catch (err) {
        console.log('error:',err);
        process.exit();

    }
}

module.exports = {connect}