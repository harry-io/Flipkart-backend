const productModel = require("../Models/product.model");





const getProductController = async (req, res) => {
    try {
        let productData = await productModel.find();
        res.status(200).send({
            totalcount: productData.length,
            product: productData
        })

    } catch (error) {
        console.log("Product", error);
        res.status(500).send({
            success: false,
            message: "Error In Product",
            error
        });
    }
};



const createProductController = async (req, res) => {
    const { title, category, rating, is_assured, original_price, final_price, images, specifications, description, createdAt } = req.body;
    try {
        let newProduct = await new productModel(req.body).save();
        res.status(201).send({
            success: true,
            message: "new product created",
        })

    } catch (error) {
        console.log("Product", error);
        res.status(500).send({
            success: false,
            message: "Error In Product",
            error
        });
    }
}


module.exports = { getProductController, createProductController }