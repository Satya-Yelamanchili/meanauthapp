const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String,
        require: true
    },
    username:{
        type:String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByID = function(id, callback){
    User.findById(id, callback);
} 

module.exports.getUserByUsername = function(username, callback){
    const query = {username:username};
    User.findOne(query, callback);
} 
    
module.exports.adduser = function(newUser,callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            newUser.password = hash;
            var promise = newUser.save(callback);
        });
    });
}