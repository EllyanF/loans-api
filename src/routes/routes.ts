import { Router } from "express";
import { loansHandler } from "../handlers/loansHandler";

export const router: Router = Router();

router.post('/customer-loans', loansHandler);