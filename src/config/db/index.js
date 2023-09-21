
const mongoose = require('mongoose')

async function connect () {

    try {
        await mongoose.connect(process.env.MONGODB,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }

}

module.exports = {connect}