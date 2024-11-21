import express from "express";
import { index } from "../services/mangas.services.js";
export const mangasViewsRouter = express.Router();

mangasViewsRouter.get("/", async (req, res) => {
    const mangas = await index()
    res.render('index', {
        mangas
    });
})