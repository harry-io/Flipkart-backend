const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },

    slug: {
        type: String,
        lowercase: true
    }


},
    {
        versionKey: false
    }
);


const categoryModel = mongoose.model("category", categorySchema);


module.exports = categoryModel;