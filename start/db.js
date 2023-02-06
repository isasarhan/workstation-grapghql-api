var mongoose = require('mongoose');
//Set up default mongoose connection
module.exports = function () {
    var mongoDB = process.env.MONGO_DB
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoDB, { useNewUrlParser: true })
        .then(() => console.log('connecting to database...'))
        .catch((e) => { console.log(e); })
}