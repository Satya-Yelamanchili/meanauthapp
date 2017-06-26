const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

//Actors Schema
const ActorssSchema = mongoose.Schema({
    birthname: { type: String, require: true },
    givenname: { type: String },
    gender: { type: String, require: true },
    dob: { type: Date },
    birthcity: { type: String },
    birthstate: { type: String },
    birthcountry: { type: String },
    bio: { type: String },
    picture: { data: Buffer, contentType: String }
});

const Actors = module.exports = mongoose.model('Actors', ActorssSchema);

module.exports.addactor = function (newActor, callback) {
    var promise = newActor.save(callback);
}

module.exports.getActorByName = function (name, callback) {
    const query = {givenname:{'$regex' : name, '$options' : 'i'}}; //{ givenname: { $regex: ".*" + name + ".*" } };  
    Actors.find(query, callback);
}