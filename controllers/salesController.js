import { createSale, findById, findAll } from "../db/actions/venta.actions.js";

export const getAllSales = async (req, res) => {
    try {
        const sales = await findAll();
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getSaleById = async (req, res) => {
    try {
        const sale = await findById(req.params.id);
        res.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createNewSale = async (req, res) => {
    try {
        const sale = await createSale(req.body);
        res.status(201).json(sale);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
