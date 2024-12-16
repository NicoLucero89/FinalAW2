import { createProd, findAll, findById, findByCategory, updateNameById, deleteById } from "../db/actions/producto.actions.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductsByCategory = async (req, res) => {
    try {
        const products = await findByCategory(req.params.category);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = await createProd(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateProductNameById = async (req, res) => {
    try {
        const updatedProduct = await updateNameById(req.body.nombre, req.params.id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteProductById = async (req, res) => {
    try {
        const result = await deleteById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

