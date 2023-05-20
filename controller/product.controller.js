const productModel = require("../Models/product.model");




const getProductController = async (req, res) => {
    let { title, brand, sort, page, order, value, limit, rating, price_gte, price_lte } = req.query;
    try {

        // argument object
        let args = {};

        //  Search by title
        if (title) {
            args.title = { $regex: title, $options: "i" }
        }

        // filter by brand
        if (brand) {
            args.brand = brand;
        }

        // data limit
        if (!limit) {
            limit = 0;
        }

        if (!page) {
            page = 1;
        }


        if (price_gte && price_lte) {
            args.final_price = { $gte: +price_gte, $lte: +price_lte }
        }

        let skip = (page - 1) * limit;

        let sorted = {};

        if (sort == "rating" || "discount" || "price" || "createdAt") {
            sort == "price" ? sorted["final_price"] = !order ? "asc" : order : sorted[sort] = !order ? "asc" : order;
        }





        let productData = await productModel.find(args).limit(limit).skip(skip).sort(sorted)

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
};



const updateProductController = async (req, res) => {
    const { productId } = req.params;
    try {
        await productModel.findByIdAndUpdate({ _id: productId }, req.body);
        res.status(200).send({ mssg: "Product was updated successfully!" });
    } catch (error) {
        console.log("product", error);
        res.status(400).send({ mssg: error.message });
    };
};


const deleteProductController = async (req, res) => {
    const { deleteId } = req.params;
    try {
        await productModel.findByIdAndDelete({ _id: deleteId });
        res.status(200).send({ mssg: "Product was deleted successfully!" });
    } catch (error) {
        console.log("product", error);
        res.status(400).send({ mssg: error.message });
    };
};



const getProductByIdController = async (req, res) => {
    const { productID } = req.params;
    try {
        let data = await productModel.findOne({ _id: productID });
        res.status(200).send({ data })
    } catch (error) {
        console.log("product", error);
        res.status(400).send(error);
    };
};



module.exports = { getProductController, createProductController, updateProductController, deleteProductController, getProductByIdController }