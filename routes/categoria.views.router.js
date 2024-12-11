import express from "express";
import { index, create, destroy, update } from "../services/categoria.crud.services.js";
export const categoriasViewsRouter = express.Router();

categoriasViewsRouter.use((req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/categoriasAuth/login");
    }
})

categoriasViewsRouter.get("/", async (req, res) => {
    const categorias = await index()
    res.render("admin/categorias", {
        categorias,
        user: req.user
    });
})

categoriasViewsRouter.post("/", async (req, res) => {
    let { nombre} = req.body;
    await create ({ nombre});
    res.redirect("/admin/categorias");
})

categoriasViewsRouter.post("/edit/:id", async (req, res) => {
    const { id } = req.params;
    let {nombre} = req.body;
    await update (id, {nombre});
    res.redirect("/admin/categorias");
})

categoriasViewsRouter.post("/destroy/:id", async (req, res) => {
    const { id } = req.params;
    await destroy (id);
    res.redirect("/admin/categorias");
})