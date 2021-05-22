export function loadFundamentalAccountingConcepts(xbrl) {
  // Assets
  xbrl.fields['Assets'] = xbrl.getFact('us-gaap:Assets').getMostRecent()?.value;

  // Current Assets
  xbrl.fields['CurrentAssets'] = xbrl.getFact('us-gaap:AssetsCurrent').getMostRecent()?.value;

  // Noncurrent Assets
  xbrl.fields['NoncurrentAssets'] = xbrl.getFact('us-gaap:AssetsNoncurrent').getMostRecent()?.value;

  // LiabilitiesAndEquity
  xbrl.fields['LiabilitiesAndEquity'] =
    xbrl.getFact('us-gaap:LiabilitiesAndStockholdersEquity').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:LiabilitiesAndPartnersCapital').getMostRecent()?.value;

  // Liabilities
  xbrl.fields['Liabilities'] = xbrl.getFact('us-gaap:Liabilities').getMostRecent()?.value;

  // CurrentLiabilities
  xbrl.fields['CurrentLiabilities'] = xbrl
    .getFact('us-gaap:LiabilitiesCurrent')
    .getMostRecent()?.value;

  // Noncurrent Liabilities
  xbrl.fields['NoncurrentLiabilities'] = xbrl
    .getFact('us-gaap:LiabilitiesNoncurrent')
    .getMostRecent()?.value;

  // CommitmentsAndContingencies
  xbrl.fields['CommitmentsAndContingencies'] = xbrl
    .getFact('us-gaap:CommitmentsAndContingencies')
    .getMostRecent()?.value;

  // TemporaryEquity
  xbrl.fields['TemporaryEquity'] =
    xbrl.getFact('us-gaap:TemporaryEquityRedemptionValue').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:RedeemablePreferredStockCarryingAmount').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:TemporaryEquityCarryingAmount').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:TemporaryEquityValueExcludingAdditionalPaidInCapital').getMostRecent()
      ?.value ||
    xbrl.getFact('us-gaap:TemporaryEquityCarryingAmountAttributableToParent').getMostRecent()
      ?.value ||
    xbrl.getFact('us-gaap:RedeemableNoncontrollingInterestEquityFairValue').getMostRecent()?.value;

  // Equity
  xbrl.fields['Equity'] =
    xbrl
      .getFact('us-gaap:StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest')
      .getMostRecent()?.value ||
    xbrl.getFact('us-gaap:StockholdersEquity').getMostRecent()?.value ||
    xbrl
      .getFact('us-gaap:PartnersCapitalIncludingPortionAttributableToNoncontrollingInterest')
      .getMostRecent()?.value ||
    xbrl.getFact('us-gaap:PartnersCapital').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:CommonStockholdersEquity').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:MemberEquity').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:AssetsNet').getMostRecent()?.value;

  // EquityAttributableToNoncontrollingInterest
  xbrl.fields['EquityAttributableToNoncontrollingInterest'] =
    xbrl.getFact('us-gaap:MinorityInterest').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:PartnersCapitalAttributableToNoncontrollingInterest').getMostRecent()
      ?.value;

  // EquityAttributableToParent
  xbrl.fields['EquityAttributableToParent'] =
    xbrl.getFact('us-gaap:StockholdersEquity').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:LiabilitiesAndPartnersCapital').getMostRecent()?.value;

  // Revenues
  xbrl.fields['Revenues'] =
    xbrl.getFact('us-gaap:Revenues').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:SalesRevenueNet').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:SalesRevenueServicesNet').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:RevenuesNetOfInterestExpense').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:RegulatedAndUnregulatedOperatingRevenue').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:HealthCareOrganizationRevenue').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:InterestAndDividendIncomeOperating').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:RealEstateRevenueNet').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:RevenueMineralSales').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:OilAndGasRevenue').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:FinancialServicesRevenue').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:RegulatedAndUnregulatedOperatingRevenue').getMostRecent()?.value;

  // CostOfRevenue
  xbrl.fields['CostOfRevenue'] =
    xbrl.getFact('us-gaap:CostOfRevenue').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:CostOfServices').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:CostOfGoodsSold').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:CostOfGoodsAndServicesSold').getMostRecent()?.value;

  // GrossProfit
  xbrl.fields['GrossProfit'] = xbrl.getFact('us-gaap:GrossProfit').getMostRecent()?.value;

  // OperatingExpenses
  xbrl.fields['OperatingExpenses'] =
    xbrl.getFact('us-gaap:OperatingExpenses').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:OperatingCostsAndExpenses').getMostRecent()?.value;

  // CostsAndExpenses
  xbrl.fields['CostsAndExpenses'] = xbrl.getFact('us-gaap:CostsAndExpenses').getMostRecent()?.value;

  // OtherOperatingIncome
  xbrl.fields['OtherOperatingIncome'] = xbrl
    .getFact('us-gaap:OtherOperatingIncome')
    .getMostRecent()?.value;

  // OperatingIncomeLoss
  xbrl.fields['OperatingIncomeLoss'] = xbrl
    .getFact('us-gaap:OperatingIncomeLoss')
    .getMostRecent()?.value;

  // NonoperatingIncomeLoss
  xbrl.fields['NonoperatingIncomeLoss'] = xbrl
    .getFact('us-gaap:NonoperatingIncomeExpense')
    .getMostRecent()?.value;

  // InterestAndDebtExpense
  xbrl.fields['InterestAndDebtExpense'] = xbrl
    .getFact('us-gaap:InterestAndDebtExpense')
    .getMostRecent()?.value;

  // IncomeBeforeEquityMethodInvestments
  xbrl.fields['IncomeBeforeEquityMethodInvestments'] = xbrl
    .getFact(
      'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments'
    )
    .getMostRecent()?.value;

  // IncomeFromEquityMethodInvestments
  xbrl.fields['IncomeFromEquityMethodInvestments'] = xbrl
    .getFact('us-gaap:IncomeLossFromEquityMethodInvestments')
    .getMostRecent()?.value;

  // IncomeFromContinuingOperationsBeforeTax
  xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] =
    xbrl
      .getFact(
        'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments'
      )
      .getMostRecent()?.value ||
    xbrl
      .getFact(
        'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest'
      )
      .getMostRecent()?.value;

  // IncomeTaxExpenseBenefit
  xbrl.fields['IncomeTaxExpenseBenefit'] =
    xbrl.getFact('us-gaap:IncomeTaxExpenseBenefit').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:IncomeTaxExpenseBenefitContinuingOperations').getMostRecent()?.value;

  // IncomeFromContinuingOperationsAfterTax
  xbrl.fields['IncomeFromContinuingOperationsAfterTax'] = xbrl
    .getFact(
      'us-gaap:IncomeLossBeforeExtraordinaryItemsAndCumulativeEffectOfChangeInAccountingPrinciple'
    )
    .getMostRecent()?.value;

  // IncomeFromDiscontinuedOperations
  xbrl.fields['IncomeFromDiscontinuedOperations'] =
    xbrl.getFact('us-gaap:IncomeLossFromDiscontinuedOperationsNetOfTax').getMostRecent()?.value ||
    xbrl
      .getFact('us-gaap:DiscontinuedOperationGainLossOnDisposalOfDiscontinuedOperationNetOfTax')
      .getMostRecent()?.value ||
    xbrl
      .getFact('us-gaap:IncomeLossFromDiscontinuedOperationsNetOfTaxAttributableToReportingEntity')
      .getMostRecent()?.value;

  // ExtraordinaryItemsGainLoss
  xbrl.fields['ExtraordinaryItemsGainLoss'] = xbrl
    .getFact('us-gaap:ExtraordinaryItemNetOfTax')
    .getMostRecent()?.value;

  // NetIncomeLoss
  xbrl.fields['NetIncomeLoss'] =
    xbrl.getFact('us-gaap:ProfitLoss').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:NetIncomeLoss').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:NetIncomeLossAvailableToCommonStockholdersBasic').getMostRecent()
      ?.value ||
    xbrl.getFact('us-gaap:IncomeLossFromContinuingOperations').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:IncomeLossAttributableToParent').getMostRecent()?.value ||
    xbrl
      .getFact(
        'us-gaap:IncomeLossFromContinuingOperationsIncludingPortionAttributableToNoncontrollingInterest'
      )
      .getMostRecent()?.value;

  // NetIncomeAvailableToCommonStockholdersBasic
  xbrl.fields['NetIncomeAvailableToCommonStockholdersBasic'] = xbrl
    .getFact('us-gaap:NetIncomeLossAvailableToCommonStockholdersBasic')
    .getMostRecent()?.value;

  // #PreferredStockDividendsAndOtherAdjustments
  xbrl.fields['PreferredStockDividendsAndOtherAdjustments'] = xbrl
    .getFact('us-gaap:PreferredStockDividendsAndOtherAdjustments')
    .getMostRecent()?.value;

  // #NetIncomeAttributableToNoncontrollingInterest
  xbrl.fields['NetIncomeAttributableToNoncontrollingInterest'] = xbrl
    .getFact('us-gaap:NetIncomeLossAttributableToNoncontrollingInterest')
    .getMostRecent()?.value;

  // #NetIncomeAttributableToParent
  xbrl.fields['NetIncomeAttributableToParent'] = xbrl
    .getFact('us-gaap:NetIncomeLoss')
    .getMostRecent()?.value;

  // OtherComprehensiveIncome
  xbrl.fields['OtherComprehensiveIncome'] = xbrl
    .getFact('us-gaap:OtherComprehensiveIncomeLossNetOfTax')
    .getMostRecent()?.value;

  // ComprehensiveIncome
  xbrl.fields['ComprehensiveIncome'] =
    xbrl
      .getFact(
        'us-gaap:ComprehensiveIncomeNetOfTaxIncludingPortionAttributableToNoncontrollingInterest'
      )
      .getMostRecent()?.value ||
    xbrl.getFact('us-gaap:ComprehensiveIncomeNetOfTax').getMostRecent()?.value;

  // ComprehensiveIncomeAttributableToParent
  xbrl.fields['ComprehensiveIncomeAttributableToParent'] = xbrl
    .getFact('us-gaap:ComprehensiveIncomeNetOfTax')
    .getMostRecent()?.value;

  // ComprehensiveIncomeAttributableToNoncontrollingInterest
  xbrl.fields['ComprehensiveIncomeAttributableToNoncontrollingInterest'] = xbrl
    .getFact('us-gaap:ComprehensiveIncomeNetOfTaxAttributableToNoncontrollingInterest')
    .getMostRecent()?.value;

  // NetCashFlow
  xbrl.fields['NetCashFlow'] =
    xbrl.getFact('us-gaap:CashAndCashEquivalentsPeriodIncreaseDecrease').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:CashPeriodIncreaseDecrease').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:NetCashProvidedByUsedInContinuingOperations').getMostRecent()?.value;

  // NetCashFlowsOperating
  xbrl.fields['NetCashFlowsOperating'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInOperatingActivities')
    .getMostRecent()?.value;

  // NetCashFlowsInvesting
  xbrl.fields['NetCashFlowsInvesting'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInInvestingActivities')
    .getMostRecent()?.value;

  // NetCashFlowsFinancing
  xbrl.fields['NetCashFlowsFinancing'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInFinancingActivities')
    .getMostRecent()?.value;

  // NetCashFlowsOperatingContinuing
  xbrl.fields['NetCashFlowsOperatingContinuing'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInOperatingActivitiesContinuingOperations')
    .getMostRecent()?.value;

  // NetCashFlowsInvestingContinuing
  xbrl.fields['NetCashFlowsInvestingContinuing'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInInvestingActivitiesContinuingOperations')
    .getMostRecent()?.value;
  // NetCashFlowsFinancingContinuing
  xbrl.fields['NetCashFlowsFinancingContinuing'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInFinancingActivitiesContinuingOperations')
    .getMostRecent()?.value;

  // NetCashFlowsOperatingDiscontinued
  xbrl.fields['NetCashFlowsOperatingDiscontinued'] = xbrl
    .getFact('us-gaap:CashProvidedByUsedInOperatingActivitiesDiscontinuedOperations')
    .getMostRecent()?.value;

  // NetCashFlowsInvestingDiscontinued
  xbrl.fields['NetCashFlowsInvestingDiscontinued'] = xbrl
    .getFact('us-gaap:CashProvidedByUsedInInvestingActivitiesDiscontinuedOperations')
    .getMostRecent()?.value;

  // NetCashFlowsFinancingDiscontinued
  xbrl.fields['NetCashFlowsFinancingDiscontinued'] = xbrl
    .getFact('us-gaap:CashProvidedByUsedInFinancingActivitiesDiscontinuedOperations')
    .getMostRecent()?.value;

  // NetCashFlowsDiscontinued
  xbrl.fields['NetCashFlowsDiscontinued'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInDiscontinuedOperations')
    .getMostRecent()?.value;

  // ExchangeGainsLosses
  xbrl.fields['ExchangeGainsLosses'] =
    xbrl.getFact('us-gaap:EffectOfExchangeRateOnCashAndCashEquivalents').getMostRecent()?.value ||
    xbrl
      .getFact('us-gaap:EffectOfExchangeRateOnCashAndCashEquivalentsContinuingOperations')
      .getMostRecent()?.value ||
    xbrl
      .getFact('us-gaap:CashProvidedByUsedInFinancingActivitiesDiscontinuedOperations')
      .getMostRecent()?.value;
}
