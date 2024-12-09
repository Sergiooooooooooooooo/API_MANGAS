import express from "express";
import { formulario, create} from "../services/formulario.services.js";
export const formulariosViewsRouter = express.Router();

formulariosViewsRouter.get("/", async (req, res) => {
    const formularios = await formulario()
    res.render('checkout', {    
        formularios,
        user: formulario.user
    });
})

formulariosViewsRouter.post("/", async (req, res) => {
    let { nombre, documento, apellido, direccion, telefono } = req.body;
    await create ({ nombre, documento, apellido, direccion, telefono });
    req.session.carrito = [];  // Vaciar el carrito (vaciar el array de mangas en la sesión)

    // Redirigir al usuario a la página de inicio (o alguna página de confirmación)
    res.redirect("/");
})
