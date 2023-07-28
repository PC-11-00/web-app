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
import { GroupGeneralData } from './groupGeneralData';
import { SavingsAccountApplicationTimelineData } from './savingsAccountApplicationTimelineData';
import { DatatableData } from './datatableData';
import { StaffData } from './staffData';
import { ChargeData } from './chargeData';
import { EnumOptionData } from './enumOptionData';
import { SavingsProductData } from './savingsProductData';
import { SavingsAccountSubStatusEnumData } from './savingsAccountSubStatusEnumData';
import { SavingsAccountSummaryData } from './savingsAccountSummaryData';
import { CurrencyData } from './currencyData';
import { SavingsAccountStatusEnumData } from './savingsAccountStatusEnumData';
import { ClientData } from './clientData';
import { SavingsAccountChargeData } from './savingsAccountChargeData';
import { SavingsAccountTransactionData } from './savingsAccountTransactionData';
import { TaxGroupData } from './taxGroupData';


export interface SavingsAccountData { 
    accountNo?: string;
    accrualBasedAccountingEnabledOnSavingsProduct?: boolean;
    activatedOnDate?: string;
    activationLocalDate?: string;
    allowOverdraft?: boolean;
    annualFee?: SavingsAccountChargeData;
    cashBasedAccountingEnabledOnSavingsProduct?: boolean;
    chargeOptions?: Array<ChargeData>;
    charges?: Array<SavingsAccountChargeData>;
    clientData?: ClientData;
    clientId?: number;
    clientName?: string;
    currency?: CurrencyData;
    datatables?: Array<DatatableData>;
    dateFormat?: string;
    daysToDormancy?: number;
    daysToEscheat?: number;
    daysToInactive?: number;
    depositType?: EnumOptionData;
    depositTypeId?: number;
    enforceMinRequiredBalance?: boolean;
    existingReversedTransactionIds?: Set<number>;
    existingTransactionIds?: Set<number>;
    externalId?: string;
    fieldOfficerId?: number;
    fieldOfficerName?: string;
    fieldOfficerOptions?: Array<StaffData>;
    glAccountIdForInterestOnSavings?: number;
    glAccountIdForSavingsControl?: number;
    groupGeneralData?: GroupGeneralData;
    groupId?: number;
    groupName?: string;
    id?: number;
    interestCalculationDaysInYearType?: EnumOptionData;
    interestCalculationDaysInYearTypeId?: number;
    interestCalculationDaysInYearTypeOptions?: Array<EnumOptionData>;
    interestCalculationType?: EnumOptionData;
    interestCalculationTypeId?: number;
    interestCalculationTypeOptions?: Array<EnumOptionData>;
    interestCompoundingPeriodType?: EnumOptionData;
    interestCompoundingPeriodTypeId?: number;
    interestCompoundingPeriodTypeOptions?: Array<EnumOptionData>;
    interestPostingPeriodType?: EnumOptionData;
    interestPostingPeriodTypeId?: number;
    interestPostingPeriodTypeOptions?: Array<EnumOptionData>;
    isDormancyTrackingActive?: boolean;
    lastActiveTransactionDate?: string;
    lastSavingsAccountTransaction?: SavingsAccountTransactionData;
    lienAllowed?: boolean;
    locale?: string;
    lockedInUntilDate?: string;
    lockinPeriodFrequency?: number;
    lockinPeriodFrequencyType?: EnumOptionData;
    lockinPeriodFrequencyTypeId?: number;
    lockinPeriodFrequencyTypeOptions?: Array<EnumOptionData>;
    maxAllowedLienLimit?: number;
    minBalanceForInterestCalculation?: number;
    minOverdraftForInterestCalculation?: number;
    minRequiredBalance?: number;
    minRequiredOpeningBalance?: number;
    newSavingsAccountTransactionData?: Array<SavingsAccountTransactionData>;
    nominalAnnualInterestRate?: number;
    nominalAnnualInterestRateOverdraft?: number;
    officeId?: number;
    onHoldFunds?: number;
    overdraftLimit?: number;
    productId?: number;
    productOptions?: Array<SavingsProductData>;
    reasonForBlock?: string;
    rowIndex?: number;
    savingsAccountSummaryData?: SavingsAccountSummaryData;
    savingsAccountTransactionData?: Array<SavingsAccountTransactionData>;
    savingsAccountTransactionSummaryWrapper?: object;
    savingsAccountTransactionsWithPivotConfig?: Array<SavingsAccountTransactionData>;
    savingsAmountOnHold?: number;
    savingsHelper?: object;
    savingsProduct?: SavingsProductData;
    savingsProductData?: SavingsProductData;
    savingsProductId?: number;
    savingsProductName?: string;
    startInterestCalculationDate?: string;
    status?: SavingsAccountStatusEnumData;
    subStatus?: SavingsAccountSubStatusEnumData;
    submittedOnDate?: string;
    summary?: SavingsAccountSummaryData;
    taxGroup?: TaxGroupData;
    timeline?: SavingsAccountApplicationTimelineData;
    transactions?: Array<SavingsAccountTransactionData>;
    updatedTransactions?: Array<SavingsAccountTransactionData>;
    withHoldTax?: boolean;
    withdrawalFee?: SavingsAccountChargeData;
    withdrawalFeeForTransfers?: boolean;
    withdrawalFeeTypeOptions?: Array<EnumOptionData>;
}

