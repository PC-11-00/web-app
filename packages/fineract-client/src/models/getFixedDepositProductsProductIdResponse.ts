/**
 * Apache Fineract REST API
 * Apache Fineract is a secure, multi-tenanted microfinance platform. The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform. The https://cui.fineract.dev[reference app] (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation. Until we complete the new REST API documentation you still have the legacy documentation available https://fineract.apache.org/legacy-docs/apiLive.htm[here]. Please check https://fineract.apache.org/docs/current[the Fineract documentation] for more information.
 *
 * The version of the OpenAPI document: 0.0.0-88635972
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GetFixedDepositProductsInterestCalculationType } from './getFixedDepositProductsInterestCalculationType';
import { GetFixedDepositProductsProductIdPreClosurePenalInterestOnType } from './getFixedDepositProductsProductIdPreClosurePenalInterestOnType';
import { GetFixedDepositProductsProductIdInterestCompoundingPeriodType } from './getFixedDepositProductsProductIdInterestCompoundingPeriodType';
import { GetFixedDepositProductsProductIdMaxDepositTermType } from './getFixedDepositProductsProductIdMaxDepositTermType';
import { GetFixedDepositProductsProductIdAccountingMappings } from './getFixedDepositProductsProductIdAccountingMappings';
import { GetFixedDepositProductsProductIdFeeToIncomeAccountMappings } from './getFixedDepositProductsProductIdFeeToIncomeAccountMappings';
import { GetFixedDepositProductsInterestCalculationDaysInYearType } from './getFixedDepositProductsInterestCalculationDaysInYearType';
import { GetFixedDepositProductsProductIdActiveChart } from './getFixedDepositProductsProductIdActiveChart';
import { GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings } from './getFixedDepositProductsProductIdPenaltyToIncomeAccountMappings';
import { GetFixedDepositProductsProductIdMinDepositTermType } from './getFixedDepositProductsProductIdMinDepositTermType';
import { GetFixedDepositProductsInterestPostingPeriodType } from './getFixedDepositProductsInterestPostingPeriodType';
import { GetFixedDepositProductsProductIdCurrency } from './getFixedDepositProductsProductIdCurrency';


/**
 * GetFixedDepositProductsProductIdResponse
 */
export interface GetFixedDepositProductsProductIdResponse { 
    accountingMappings?: GetFixedDepositProductsProductIdAccountingMappings;
    activeChart?: GetFixedDepositProductsProductIdActiveChart;
    currency?: GetFixedDepositProductsProductIdCurrency;
    description?: string;
    feeToIncomeAccountMappings?: Set<GetFixedDepositProductsProductIdFeeToIncomeAccountMappings>;
    id?: number;
    interestCalculationDaysInYearType?: GetFixedDepositProductsInterestCalculationDaysInYearType;
    interestCalculationType?: GetFixedDepositProductsInterestCalculationType;
    interestCompoundingPeriodType?: GetFixedDepositProductsProductIdInterestCompoundingPeriodType;
    interestPostingPeriodType?: GetFixedDepositProductsInterestPostingPeriodType;
    maxDepositTerm?: number;
    maxDepositTermType?: GetFixedDepositProductsProductIdMaxDepositTermType;
    minDepositTerm?: number;
    minDepositTermType?: GetFixedDepositProductsProductIdMinDepositTermType;
    name?: string;
    penaltyToIncomeAccountMappings?: Set<GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings>;
    preClosurePenalApplicable?: boolean;
    preClosurePenalInterest?: number;
    preClosurePenalInterestOnType?: GetFixedDepositProductsProductIdPreClosurePenalInterestOnType;
    shortName?: string;
}

