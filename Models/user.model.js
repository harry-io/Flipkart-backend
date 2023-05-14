const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },


    password: {
        type: String,
        require: true,
    },

    isAdmin: {
        type: Boolean,
        default: false,
        require: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;