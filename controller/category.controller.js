const slugify = require("slugify");
const categoryModel = require("../Models/category.model");

const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ success: false, message: "Name Is Required" })
        }

        // category model
        const ExisitingCategory = await categoryModel.findOne({ name });
        if (ExisitingCategory) {
            return res.status(200).send({ success: true, message: "Category Already Exisits" })
        }


        const newCategory = await new categoryModel({ name, slug: slugify(name) }).save();
        res.status(201).send({
            success: true,
            message: "new category created",
        });

    } catch (error) {
        console.log("createCategoryController", error)
        res.status(500).send({
            success: false,
            message: "Error in category",
            error
        })
    }
};



const updateCategoryController = async (req, res) => {
    const { updateId } = req.params;
    try {

    } catch (error) {
        console.log("createCategoryController", error)
        res.status(500).send({
            success: false,
            message: "Error in category",
            error
        })
    }
}



module.exports = { createCategoryController }