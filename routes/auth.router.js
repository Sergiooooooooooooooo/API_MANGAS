import express from "express";
import passport from "passport";
export const authRouter = express.Router();
import { signup } from "../services/auth.services.js";

authRouter.get("/login", async (req, res) => {
    res.render("auth/login");
})


authRouter.post("/login", passport.authenticate('local', {
        successRedirect: '/mangas',
        failureRedirect: '/auth/login',
    })
)

authRouter.get("/logout", async (req, res) => {
    req.logout((err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/auth/login");
        }
    );
})

