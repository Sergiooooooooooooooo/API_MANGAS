import express from "express";
import { mangasFileRouter } from "./mangas.file.router.js";
import { mangasRouter } from "./mangas.router.js";
import { mangasViewsRouter } from "./mangas.views.router.js";
import { authRouter } from "./auth.router.js";
import { mangasProductsViewsRouter } from "./mangas.products.views.router.js";
import { carritoViewsRouter } from "./carrito.views.router.js";
import { formulariosViewsRouter } from "./formulario.router.js";



const router = express.Router();


export function routerMangas(app){
    app.use("/auth", authRouter);
    app.use("/", mangasProductsViewsRouter);
    //app.use("/api/v1", router);
    app.use("/mangas", mangasViewsRouter);
    app.use("/carrito", carritoViewsRouter)
    app.use("/formulario", formulariosViewsRouter)


    router.use("/file/mangas",mangasFileRouter);
    router.use("/mangas", mangasRouter);
}