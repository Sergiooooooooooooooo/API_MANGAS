import express from "express";
export const mangasRouter = express.Router();
import {index, create, show, update, destroy} from "../services/mangas.services.js";

mangasRouter.get("/", async (req, res) => {
    const mangas = await index();   
    res.json({mangas});
})

mangasRouter.post('/', async (req, res) => {
    const manga = await req.body;
    const newManga = await create(manga)
    res.status(201).json({manga: newManga});
})

mangasRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const manga = await show(id);
    if (!manga) {
        return res.status(404)
        .json({error: 'Manga not found'});
    }
    res.json({manga});
})

mangasRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const manga = req.body;
    const updatedManga = await update(id, manga);
    if (!updatedManga) {
        return res.status(404)
        .json({error: 'Manga not found'});
    }
    res.json({manga: updatedManga});
    })

    mangasRouter.delete('/:id', async (req, res) => {
        const id = req.params.id; 
        const deletedManga = await destroy(id); 
    
        if (!deletedManga) {
            return res.status(404).json({ error: 'Manga not found' });
        }

        res.status(200).json({ message: 'Manga deleted successfully', manga: deletedManga });
    });
    
