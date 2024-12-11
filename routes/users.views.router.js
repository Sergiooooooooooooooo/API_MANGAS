import express from "express";
import { index, create, destroy, update } from "../services/usuarios.services.js";
export const usersViewsRouter = express.Router();

usersViewsRouter.use((req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/usersAuth/login");
    }
})

usersViewsRouter.get("/", async (req, res) => {
    const users = await index()
    res.render("admin/users", {
        users,
        user: req.user
    });
})

usersViewsRouter.post("/", async (req, res) => {
    let { username, password } = req.body;
    await create ({ username, password });
    res.redirect("/admin/users");
})

usersViewsRouter.post("/edit/:id", async (req, res) => {
    const { id } = req.params;
    let {username, password} = req.body;
    await update (id, {username, password});
    res.redirect("/admin/users");
})

usersViewsRouter.post("/destroy/:id", async (req, res) => {
    const { id } = req.params;
    await destroy (id);
    res.redirect("/admin/users");
})