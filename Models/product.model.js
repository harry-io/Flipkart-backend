const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    category: {
        type: String,
        require: true
    },

    rating: {
        type: Number,
        require: true
    },

    is_assured: {
        type: Boolean,
        require: true
    },

    original_price: {
        type: Number,
        require: true
    },

    final_price: {
        type: Number,
        require: true
    },


    discount: {
        type: Number,
        require: true
    },

    images: {
        type: [String],
        require: true
    },

    specifications: {
        type: [String],
        require: true
    },


    description: {
        type: String,
        require: true
    },



    createdAt: {
        type: String,
        default: Date.now()
    }

},
    {
        versionKey: false
    }
);


const productModel = mongoose.model("product", productSchema);

module.exports = productModel;