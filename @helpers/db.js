const mongoose = require('mongoose')

async function startDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewURLParser:true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology:true
        })

        console.log('Connected to database');
    }
    catch(error){
        console.log(`Unable to connect to Database ${error.massage}`);
    }
}

module.exports = startDB