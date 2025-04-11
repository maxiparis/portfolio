import express from "express";
import { sendEmailHandler } from "../controllers/emailHandler";
import { getCommitsHandler } from "../controllers/githubHandler";

export const apiRouter = express.Router();

// Define routes
apiRouter.post("/sendemail", sendEmailHandler);
apiRouter.get("/commits", getCommitsHandler);