const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { registerSchema, loginSchema, subscriptionSchema } = require("../../models");

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), ctrl.register);

authRouter.post("/login", validateBody(loginSchema), ctrl.login);

authRouter.post("/logout", authenticate, ctrl.logout);

authRouter.get("/current", authenticate, ctrl.getCurrent);

authRouter.patch("/", authenticate, validateBody(subscriptionSchema), ctrl.updateSubscription)

authRouter.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = authRouter;