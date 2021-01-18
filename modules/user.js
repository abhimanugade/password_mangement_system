var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
mongoose.connect('mongodb://localhost:27017/email_verify', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
//mongodb+srv://mongodb:12345@cluster0.j90r5.mongodb.net/email_verify?retryWrites=true&w=majority
//mongodb://localhost:27017/email_verify
var conn = mongoose.Collection;
var userSchema = new mongoose.Schema({
    fname: {
        type: String,

    },
    lname: {
        type: String,

    },
    mobile_no: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    flag:{
        type:String,
    }
});
userSchema.plugin(mongoosePaginate);
var userModel = mongoose.model('users', userSchema);
module.exports = userModel;