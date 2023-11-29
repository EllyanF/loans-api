import { customerInfo } from "../types/customerInfo";
import { availableLoans } from "../types/availableLoans";
import { loanModalities } from "../enums/loanModalities";
import * as interestRates from "../enums/loanInterestRates";

function approvePersonalLoan(customer: customerInfo): Object | void {
    const firstRequirement = customer.income <= 3000;
    const secondRequirement = (customer.income >= 3000 && customer.income <= 5000) 
        && customer.age < 30 && customer.location === 'SP';

    if (firstRequirement || secondRequirement) {
        return {
            type: loanModalities.PERSONAL,
            interest_rate: interestRates.PERSONAL_INTEREST_RATE
        }
    }
}

function approveGuaranteedLoan(customer: customerInfo): Object | void {
    const firstRequirement = customer.income <= 3000;
    const secondRequirement = (customer.income >= 3000 && customer.income <= 5000) 
        && customer.age < 30 && customer.location === 'SP';

    if (firstRequirement || secondRequirement) {
        return {
            type: loanModalities.GUARANTEED,
            interest_rate: interestRates.GUARANTEED_INTEREST_RATE
        }
    }
}

function approveConsignedLoad(customer: customerInfo): Object | void {
    if (customer.income >=5000) {
        return {
            type: loanModalities.CONSIGNMENT,
            interest_rate: interestRates.CONSIGNMENT_INTEREST_RATE
        }
    }
}

function verifyLoan(customer: customerInfo): Object[] {
    const approvedLoans = [] as any[];

    const verifyLoanConditions = [
        approvePersonalLoan(customer), 
        approveGuaranteedLoan(customer),
        approveConsignedLoad(customer)
    ];

    verifyLoanConditions.forEach((loan) => {
        if (loan instanceof Object) {
            approvedLoans.push(loan);
        }
    });

    return approvedLoans;
}

export function getApprovedLoans(customer: customerInfo): availableLoans {
    const approvedLoans: availableLoans = {
        customer: customer.name,
        loans: verifyLoan(customer)
    }

    return approvedLoans;
}