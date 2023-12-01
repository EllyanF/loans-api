import { describe, expect, it } from '@jest/globals';
import { customerInfo } from '../src/types/customerInfo';
import { getApprovedLoans } from '../src/services/loanService';
import { loanModalities } from '../src/enums/loanModalities';
import * as interestRates from '../src/enums/loanInterestRates';

describe('loanService', () => {
    it('should return only consignment loan', () => {
        const customer: customerInfo = {
            age: 20,
            cpf: '000.000.000-00',
            name: 'someName',
            income: 5000,
            location: 'MG'
        };

        expect(getApprovedLoans(customer)).toMatchObject({
            customer: customer.name,
            loans: [
                {
                    type: loanModalities.CONSIGNMENT,
                    interest_rate: interestRates.CONSIGNMENT_INTEREST_RATE
                }
            ]
        });
    })

    it('should return all loan types', () => {
        const customer: customerInfo = {
            age: 20,
            cpf: '000.000.000-00',
            name: 'someName',
            income: 5000,
            location: 'SP'
        };

        expect(getApprovedLoans(customer)).toMatchObject({
            customer: customer.name,
            loans: [
                {
                    type: loanModalities.PERSONAL,
                    interest_rate: interestRates.PERSONAL_INTEREST_RATE
                },
                {
                    type: loanModalities.GUARANTEED,
                    interest_rate: interestRates.GUARANTEED_INTEREST_RATE
                },
                {
                    type: loanModalities.CONSIGNMENT,
                    interest_rate: interestRates.CONSIGNMENT_INTEREST_RATE
                }
            ]
        });
    });

    it('should return only personal and with guarantee loans', () => {
        const customer: customerInfo = {
            age: 20,
            cpf: '000.000.000-00',
            name: 'someName',
            income: 3400.50,
            location: 'SP'
        };

        expect(getApprovedLoans(customer)).toMatchObject({
            customer: customer.name,
            loans: [
                {
                    type: loanModalities.PERSONAL,
                    interest_rate: interestRates.PERSONAL_INTEREST_RATE
                },
                {
                    type: loanModalities.GUARANTEED,
                    interest_rate: interestRates.GUARANTEED_INTEREST_RATE
                }
            ]
        });
    });
});