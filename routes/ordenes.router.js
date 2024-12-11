import express from "express";
export const ordenesRouter = express.Router();
import {index, create, show, update, destroy} from "../services/ordenes.services.js";

ordenesRouter.get("/", async (req, res) => {
    const ordenes = await index();   
    res.json({ordenes});
})

ordenesRouter.post('/', async (req, res) => {
    const orden = await req.body;
    const newOrden = await create(orden)
    res.status(201).json({orden: newOrden});
})

ordenesRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const orden = await show(id);
    if (!orden) {
        return res.status(404)
        .json({error: 'Pedido not found'});
    }
    res.json({orden});
})

ordenesRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const orden = req.body;
    const updatedOrden = await update(id, orden);
    if (!updatedOrden) {
        return res.status(404)
        .json({error: 'Pedido not found'});
    }
    res.json({orden: updatedOrden});
    })

ordenesRouter.delete('/:id', async (req, res) => {
        const id = req.params.id; 
        const deletedOrden = await destroy(id); 
    
        if (!deletedOrden) {
            return res.status(404).json({ error: 'Orden not found' });
        }

        res.status(200).json({ message: 'Orden deleted successfully', orden: deletedOrden });
    });
    
