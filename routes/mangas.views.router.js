import express from "express";
import { index, create, destroy, update } from "../services/mangas.services.js";
export const mangasViewsRouter = express.Router();

mangasViewsRouter.use((req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/auth/login");
    }
})

mangasViewsRouter.get("/", async (req, res) => {
    const mangas = await index()
    res.render('index', {
        mangas,
        user: req.user
    });
})

mangasViewsRouter.post("/", async (req, res) => {
    let { titulo, autor, genero, volumenes, fechaPublicacion, sinopsis, calificacion, editorial } = req.body;
    await create ({ titulo, autor, genero, volumenes, fechaPublicacion, sinopsis, calificacion, editorial, precio, imagen});
    res.redirect("/mangas");
})

mangasViewsRouter.post("/edit/:id", async (req, res) => {
    const { id } = req.params;
    let { titulo, autor, genero, volumenes, fechaPublicacion, sinopsis, calificacion, editorial } = req.body;
    await update (id, {titulo, autor, genero, volumenes, fechaPublicacion, sinopsis, calificacion, editorial, precio, imagen});
    res.redirect("/mangas");
})

mangasViewsRouter.post("/destroy/:id", async (req, res) => {
    const { id } = req.params;
    await destroy (id);
    res.redirect("/mangas");
})