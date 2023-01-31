var mongoose = require('mongoose');
//Set up default mongoose connection
module.exports = function () {
    var mongoDB = "mongodb+srv://issa98:password98@cluster0.sqbai0e.mongodb.net/?retryWrites=true&w=majority"

    mongoose.set('strictQuery', false)
    mongoose.connect(mongoDB, { useNewUrlParser: true })
        .then(() => console.log('connecting to database...'))
        .catch((e) => { console.log(e); })
}