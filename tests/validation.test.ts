import { describe, expect } from "@jest/globals";
import { schema, validateRequest } from "../src/middlewares/requestValidator";
import { NextFunction, Request, Response } from "express";

jest.mock('../src/middlewares/requestValidator', () => {
    const originalModule = jest.requireActual('../src/middlewares/requestValidator');

    return {
        __esmodule: true,
        ...originalModule,
        schema: {
            validate: jest.fn(),
        }
    }
});

describe('validation', () => {
    it('should return error if validation fails', () => {
        const validateMock = schema.validate as jest.Mock;

        validateMock.mockReturnValueOnce('Validation Error');

        const req = { body: {} } as Request;
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
        const next = jest.fn() as NextFunction;
        const validatonResult = schema.validate(req);

        validateRequest(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(validatonResult).toBe('Validation Error');
        expect(next).not.toHaveBeenCalled();
    });

    it('should execute next if validation passes', () => {
        const mockRequest = {
            body: {
                age: 20,
                cpf: '000.000.000-00',
                name: 'someName',
                income: 5000,
                location: 'MG'
            }
        }

        const req = mockRequest as Request;
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
        const next = jest.fn() as NextFunction;

        validateRequest(req, res, next);
        
        expect(next).toHaveBeenCalled();
    });
})