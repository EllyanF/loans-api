import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const cpfRegex = /^[\d]{3}.[\d]{3}.[\d]{3}-[\d]{2}$/;

const schema = Joi.object({
    "age": Joi.number().required(),
    "cpf": Joi.string().pattern(new RegExp(cpfRegex)).required(),
    "name": Joi.string().required(),
    "income": Joi.number().required(),
    "location": Joi.string().valid(
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 
        'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 
        'SP', 'SE', 'TO').required()
});

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const {error, value} = schema.validate(req.body);
    if (error) {
        return res.status(400).json({error: error.message});
    }

    next();
}

export {validateRequest, schema};