var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://ravimarolix123:<password>@cluster0.ghioxgn.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};
