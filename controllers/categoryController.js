import { createCategory, findAllCategories } from "../db/actions/categoria.actions.js";

export const createCategoryController = async (req, res) => {
    try {
        const result = await createCategory(req.body.nombre);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllCategoriesController = async (req, res) => {
    try {
        const result = await findAllCategories();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
