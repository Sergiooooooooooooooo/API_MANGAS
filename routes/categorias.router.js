//API POSTMAN
import express from "express";
export const categoriasRouter = express.Router();
import {index, create, show, update, destroy} from "../services/categoria.crud.services.js";

categoriasRouter.get("/", async (req, res) => {
    const categorias = await index();   
    res.json({categorias});
})

categoriasRouter.post('/', async (req, res) => {
    const categoria = await req.body;
    const newCategoria = await create(categoria)
    res.status(201).json({categoria: newCategoria});
})

categoriasRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const categoria = await show(id);
    if (!categoria) {
        return res.status(404)
        .json({error: 'Categoria not found'});
    }
    res.json({categoria});
})

categoriasRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const categoria = req.body;
    const updatedCategoria = await update(id, categoria);
    if (!updatedCategoria) {
        return res.status(404)
        .json({error: 'Categoria not found'});
    }
    res.json({categoria: updatedCategoria});
    })

categoriasRouter.delete('/:id', async (req, res) => {
        const id = req.params.id; 
        const deletedCategoria = await destroy(id); 
    
        if (!deletedCategoria) {
            return res.status(404).json({ error: 'Categoria not found' });
        }

        res.status(200).json({ message: 'Categoria deleted successfully', categoria: deletedCategoria });
    });
    
