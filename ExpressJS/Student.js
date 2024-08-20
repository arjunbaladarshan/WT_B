const mongoose = require('mongoose');

const schema = mongoose.Schema({
    rollNo: Number,
    name: String,
    semester: Number,
    email: String,
    mobile: String,
    age: Number
});

module.exports = mongoose.model("Student",schema);