import express from "express";
import { formulario, create, destroy, update } from "../services/formulario.services.js";
export const ordenesViewsRouter = express.Router();

ordenesViewsRouter.use((req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/ordenesAuth/login");
    }
})

ordenesViewsRouter.get("/", async (req, res) => {
    const formularios = await formulario()
    res.render("admin/orders", {
        formularios,
        user: req.user
    });
})


ordenesViewsRouter.post("/", async (req, res) => {
    let { nombre, documento, apellido, direccion, telefono, confirmacionManga } = req.body;
    await create ({ nombre, documento, apellido, direccion, telefono, confirmacionManga});
    res.redirect("/admin/orders");
})

ordenesViewsRouter.post("/edit/:id", async (req, res) => {
    const { id } = req.params;
    let { nombre, documento, apellido, direccion, telefono, confirmacionManga } = req.body;
    await create ({ nombre, documento, apellido, direccion, telefono, confirmacionManga});
    res.redirect("/admin/orders");
})

ordenesViewsRouter.post("/destroy/:id", async (req, res) => {
    const { id } = req.params;
    await destroy (id);
    res.redirect("/admin/orders");
})
