import express from "express";
import { mangasFileRouter } from "./mangas.file.router.js";
import { mangasRouter } from "./mangas.router.js";
import { mangasViewsRouter } from "./mangas.views.router.js";
import { authRouter } from "./auth.router.js";
const router = express.Router();


export function routerMangas(app){
    app.use("/auth", authRouter)
    app.use("/mangas", mangasViewsRouter)
    app.use("/api/v1", router);

    router.use("/file/mangas",mangasFileRouter);
    router.use("/mangas", mangasRouter);
}