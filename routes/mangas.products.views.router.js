import express from "express";
import { tienda, create, destroy, update } from "../services/mangas.products.services.js";
export const mangasProductsViewsRouter = express.Router();

mangasProductsViewsRouter.get("/", async (req, res) => {
    const mangas = await tienda()
    res.render('tienda', {
        mangas,
        user: req.user
    });
})


// mangasProductsViewsRouter.post("/", async (req, res) => {
//     let { titulo, autor, genero, volumenes, fechaPublicacion, sinopsis, calificacion, editorial } = req.body;
//     await create ({ titulo, autor, genero, volumenes, fechaPublicacion, sinopsis, calificacion, editorial, precio });
//     res.redirect("/mangas");
// })

// mangasProductsViewsRouter.post("/edit/:id", async (req, res) => {
//     const { id } = req.params;
//     let { titulo, autor, genero, volumenes, fechaPublicacion, sinopsis, calificacion, editorial } = req.body;
//     await update (id, {titulo, autor, genero, volumenes, fechaPublicacion, sinopsis, calificacion, editorial, precio});
//     res.redirect("/mangas");
// })

// mangasProductsViewsRouter.post("/destroy/:id", async (req, res) => {
//     const { id } = req.params;
//     await destroy (id);
//     res.redirect("/mangas");
// })