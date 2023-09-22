
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Wallpaper = new Schema({
    title : {type : String},
    image : {type : String},
    video : {type : String},
    type : {type : String},
    URLHD : {type : String, default : ''},
    URL2K : {type : String, default : ''},
    URL4K : {type : String, default : ''},
}, {timestamps : true})

module.exports = mongoose.model('wallpapers', Wallpaper)