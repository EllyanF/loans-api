import { Router } from "express";
import { getLoans } from "../handlers/loansHandler";

export const router: Router = Router();

router.post('/customer-loans', getLoans);