import { Request, Response } from "express";
import { customerInfo } from "../types/customerInfo";
import { getApprovedLoans } from "../services/loanService";

export function loansHandler(req: Request, res: Response) {
    try {
        const customer: customerInfo = req.body;
    
        return res.json(getApprovedLoans(customer));
    } catch (error) {
        res.status(500).json(error)
    }
} 