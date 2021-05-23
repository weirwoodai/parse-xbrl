export function loadFundamentalAccountingConcepts(xbrl) {
  // Assets
  xbrl.fields['Assets'] = xbrl.getFact('us-gaap:Assets').getMostRecentValue();

  // Current Assets
  xbrl.fields['CurrentAssets'] = xbrl.getFact('us-gaap:AssetsCurrent').getMostRecentValue();

  // Noncurrent Assets
  xbrl.fields['NoncurrentAssets'] = xbrl.getFact('us-gaap:AssetsNoncurrent').getMostRecentValue();

  // LiabilitiesAndEquity
  xbrl.fields['LiabilitiesAndEquity'] =
    xbrl.getFact('us-gaap:LiabilitiesAndStockholdersEquity').getMostRecentValue() ||
    xbrl.getFact('us-gaap:LiabilitiesAndPartnersCapital').getMostRecentValue();

  // Liabilities
  xbrl.fields['Liabilities'] = xbrl.getFact('us-gaap:Liabilities').getMostRecentValue();

  // CurrentLiabilities
  xbrl.fields['CurrentLiabilities'] = xbrl
    .getFact('us-gaap:LiabilitiesCurrent')
    .getMostRecentValue();

  // Noncurrent Liabilities
  xbrl.fields['NoncurrentLiabilities'] = xbrl
    .getFact('us-gaap:LiabilitiesNoncurrent')
    .getMostRecentValue();

  // CommitmentsAndContingencies
  xbrl.fields['CommitmentsAndContingencies'] = xbrl
    .getFact('us-gaap:CommitmentsAndContingencies')
    .getMostRecentValue();

  // TemporaryEquity
  xbrl.fields['TemporaryEquity'] =
    xbrl.getFact('us-gaap:TemporaryEquityRedemptionValue').getMostRecentValue() ||
    xbrl.getFact('us-gaap:RedeemablePreferredStockCarryingAmount').getMostRecentValue() ||
    xbrl.getFact('us-gaap:TemporaryEquityCarryingAmount').getMostRecentValue() ||
    xbrl
      .getFact('us-gaap:TemporaryEquityValueExcludingAdditionalPaidInCapital')
      .getMostRecentValue() ||
    xbrl
      .getFact('us-gaap:TemporaryEquityCarryingAmountAttributableToParent')
      .getMostRecentValue() ||
    xbrl.getFact('us-gaap:RedeemableNoncontrollingInterestEquityFairValue').getMostRecentValue();

  // Equity
  xbrl.fields['Equity'] =
    xbrl
      .getFact('us-gaap:StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest')
      .getMostRecentValue() ||
    xbrl.getFact('us-gaap:StockholdersEquity').getMostRecentValue() ||
    xbrl
      .getFact('us-gaap:PartnersCapitalIncludingPortionAttributableToNoncontrollingInterest')
      .getMostRecentValue() ||
    xbrl.getFact('us-gaap:PartnersCapital').getMostRecentValue() ||
    xbrl.getFact('us-gaap:CommonStockholdersEquity').getMostRecentValue() ||
    xbrl.getFact('us-gaap:MemberEquity').getMostRecentValue() ||
    xbrl.getFact('us-gaap:AssetsNet').getMostRecentValue();

  // EquityAttributableToNoncontrollingInterest
  xbrl.fields['EquityAttributableToNoncontrollingInterest'] =
    xbrl.getFact('us-gaap:MinorityInterest').getMostRecentValue() ||
    xbrl
      .getFact('us-gaap:PartnersCapitalAttributableToNoncontrollingInterest')
      .getMostRecentValue();

  // EquityAttributableToParent
  xbrl.fields['EquityAttributableToParent'] =
    xbrl.getFact('us-gaap:StockholdersEquity').getMostRecentValue() ||
    xbrl.getFact('us-gaap:LiabilitiesAndPartnersCapital').getMostRecentValue();

  // Revenues
  xbrl.fields['Revenues'] =
    xbrl.getFact('us-gaap:Revenues').getMostRecentValue() ||
    xbrl.getFact('us-gaap:SalesRevenueNet').getMostRecentValue() ||
    xbrl.getFact('us-gaap:SalesRevenueServicesNet').getMostRecentValue() ||
    xbrl.getFact('us-gaap:RevenuesNetOfInterestExpense').getMostRecentValue() ||
    xbrl.getFact('us-gaap:RegulatedAndUnregulatedOperatingRevenue').getMostRecentValue() ||
    xbrl.getFact('us-gaap:HealthCareOrganizationRevenue').getMostRecentValue() ||
    xbrl.getFact('us-gaap:InterestAndDividendIncomeOperating').getMostRecentValue() ||
    xbrl.getFact('us-gaap:RealEstateRevenueNet').getMostRecentValue() ||
    xbrl.getFact('us-gaap:RevenueMineralSales').getMostRecentValue() ||
    xbrl.getFact('us-gaap:OilAndGasRevenue').getMostRecentValue() ||
    xbrl.getFact('us-gaap:FinancialServicesRevenue').getMostRecentValue() ||
    xbrl.getFact('us-gaap:RegulatedAndUnregulatedOperatingRevenue').getMostRecentValue();

  // CostOfRevenue
  xbrl.fields['CostOfRevenue'] =
    xbrl.getFact('us-gaap:CostOfRevenue').getMostRecentValue() ||
    xbrl.getFact('us-gaap:CostOfServices').getMostRecentValue() ||
    xbrl.getFact('us-gaap:CostOfGoodsSold').getMostRecentValue() ||
    xbrl.getFact('us-gaap:CostOfGoodsAndServicesSold').getMostRecentValue();

  // GrossProfit
  xbrl.fields['GrossProfit'] = xbrl.getFact('us-gaap:GrossProfit').getMostRecentValue();

  // OperatingExpenses
  xbrl.fields['OperatingExpenses'] =
    xbrl.getFact('us-gaap:OperatingExpenses').getMostRecentValue() ||
    xbrl.getFact('us-gaap:OperatingCostsAndExpenses').getMostRecentValue();

  // CostsAndExpenses
  xbrl.fields['CostsAndExpenses'] = xbrl.getFact('us-gaap:CostsAndExpenses').getMostRecentValue();

  // OtherOperatingIncome
  xbrl.fields['OtherOperatingIncome'] = xbrl
    .getFact('us-gaap:OtherOperatingIncome')
    .getMostRecentValue();

  // OperatingIncomeLoss
  xbrl.fields['OperatingIncomeLoss'] = xbrl
    .getFact('us-gaap:OperatingIncomeLoss')
    .getMostRecentValue();

  // NonoperatingIncomeLoss
  xbrl.fields['NonoperatingIncomeLoss'] = xbrl
    .getFact('us-gaap:NonoperatingIncomeExpense')
    .getMostRecentValue();

  // InterestAndDebtExpense
  xbrl.fields['InterestAndDebtExpense'] = xbrl
    .getFact('us-gaap:InterestAndDebtExpense')
    .getMostRecentValue();

  // IncomeBeforeEquityMethodInvestments
  xbrl.fields['IncomeBeforeEquityMethodInvestments'] = xbrl
    .getFact(
      'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments'
    )
    .getMostRecentValue();

  // IncomeFromEquityMethodInvestments
  xbrl.fields['IncomeFromEquityMethodInvestments'] = xbrl
    .getFact('us-gaap:IncomeLossFromEquityMethodInvestments')
    .getMostRecentValue();

  // IncomeFromContinuingOperationsBeforeTax
  xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] =
    xbrl
      .getFact(
        'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments'
      )
      .getMostRecentValue() ||
    xbrl
      .getFact(
        'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest'
      )
      .getMostRecentValue();

  // IncomeTaxExpenseBenefit
  xbrl.fields['IncomeTaxExpenseBenefit'] =
    xbrl.getFact('us-gaap:IncomeTaxExpenseBenefit').getMostRecentValue() ||
    xbrl.getFact('us-gaap:IncomeTaxExpenseBenefitContinuingOperations').getMostRecentValue();

  // IncomeFromContinuingOperationsAfterTax
  xbrl.fields['IncomeFromContinuingOperationsAfterTax'] = xbrl
    .getFact(
      'us-gaap:IncomeLossBeforeExtraordinaryItemsAndCumulativeEffectOfChangeInAccountingPrinciple'
    )
    .getMostRecentValue();

  // IncomeFromDiscontinuedOperations
  xbrl.fields['IncomeFromDiscontinuedOperations'] =
    xbrl.getFact('us-gaap:IncomeLossFromDiscontinuedOperationsNetOfTax').getMostRecentValue() ||
    xbrl
      .getFact('us-gaap:DiscontinuedOperationGainLossOnDisposalOfDiscontinuedOperationNetOfTax')
      .getMostRecentValue() ||
    xbrl
      .getFact('us-gaap:IncomeLossFromDiscontinuedOperationsNetOfTaxAttributableToReportingEntity')
      .getMostRecentValue();

  // ExtraordinaryItemsGainLoss
  xbrl.fields['ExtraordinaryItemsGainLoss'] = xbrl
    .getFact('us-gaap:ExtraordinaryItemNetOfTax')
    .getMostRecentValue();

  // NetIncomeLoss
  xbrl.fields['NetIncomeLoss'] =
    xbrl.getFact('us-gaap:ProfitLoss').getMostRecentValue() ||
    xbrl.getFact('us-gaap:NetIncomeLoss').getMostRecentValue() ||
    xbrl.getFact('us-gaap:NetIncomeLossAvailableToCommonStockholdersBasic').getMostRecentValue() ||
    xbrl.getFact('us-gaap:IncomeLossFromContinuingOperations').getMostRecentValue() ||
    xbrl.getFact('us-gaap:IncomeLossAttributableToParent').getMostRecentValue() ||
    xbrl
      .getFact(
        'us-gaap:IncomeLossFromContinuingOperationsIncludingPortionAttributableToNoncontrollingInterest'
      )
      .getMostRecentValue();

  // NetIncomeAvailableToCommonStockholdersBasic
  xbrl.fields['NetIncomeAvailableToCommonStockholdersBasic'] = xbrl
    .getFact('us-gaap:NetIncomeLossAvailableToCommonStockholdersBasic')
    .getMostRecentValue();

  // #PreferredStockDividendsAndOtherAdjustments
  xbrl.fields['PreferredStockDividendsAndOtherAdjustments'] = xbrl
    .getFact('us-gaap:PreferredStockDividendsAndOtherAdjustments')
    .getMostRecentValue();

  // #NetIncomeAttributableToNoncontrollingInterest
  xbrl.fields['NetIncomeAttributableToNoncontrollingInterest'] = xbrl
    .getFact('us-gaap:NetIncomeLossAttributableToNoncontrollingInterest')
    .getMostRecentValue();

  // #NetIncomeAttributableToParent
  xbrl.fields['NetIncomeAttributableToParent'] = xbrl
    .getFact('us-gaap:NetIncomeLoss')
    .getMostRecentValue();

  // OtherComprehensiveIncome
  xbrl.fields['OtherComprehensiveIncome'] = xbrl
    .getFact('us-gaap:OtherComprehensiveIncomeLossNetOfTax')
    .getMostRecentValue();

  // ComprehensiveIncome
  xbrl.fields['ComprehensiveIncome'] =
    xbrl
      .getFact(
        'us-gaap:ComprehensiveIncomeNetOfTaxIncludingPortionAttributableToNoncontrollingInterest'
      )
      .getMostRecentValue() ||
    xbrl.getFact('us-gaap:ComprehensiveIncomeNetOfTax').getMostRecentValue();

  // ComprehensiveIncomeAttributableToParent
  xbrl.fields['ComprehensiveIncomeAttributableToParent'] = xbrl
    .getFact('us-gaap:ComprehensiveIncomeNetOfTax')
    .getMostRecentValue();

  // ComprehensiveIncomeAttributableToNoncontrollingInterest
  xbrl.fields['ComprehensiveIncomeAttributableToNoncontrollingInterest'] = xbrl
    .getFact('us-gaap:ComprehensiveIncomeNetOfTaxAttributableToNoncontrollingInterest')
    .getMostRecentValue();

  // NetCashFlow
  xbrl.fields['NetCashFlow'] =
    xbrl.getFact('us-gaap:CashAndCashEquivalentsPeriodIncreaseDecrease').getMostRecentValue() ||
    xbrl.getFact('us-gaap:CashPeriodIncreaseDecrease').getMostRecentValue() ||
    xbrl.getFact('us-gaap:NetCashProvidedByUsedInContinuingOperations').getMostRecentValue();

  // NetCashFlowsOperating
  xbrl.fields['NetCashFlowsOperating'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInOperatingActivities')
    .getMostRecentValue();

  // NetCashFlowsInvesting
  xbrl.fields['NetCashFlowsInvesting'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInInvestingActivities')
    .getMostRecentValue();

  // NetCashFlowsFinancing
  xbrl.fields['NetCashFlowsFinancing'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInFinancingActivities')
    .getMostRecentValue();

  // NetCashFlowsOperatingContinuing
  xbrl.fields['NetCashFlowsOperatingContinuing'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInOperatingActivitiesContinuingOperations')
    .getMostRecentValue();

  // NetCashFlowsInvestingContinuing
  xbrl.fields['NetCashFlowsInvestingContinuing'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInInvestingActivitiesContinuingOperations')
    .getMostRecentValue();
  // NetCashFlowsFinancingContinuing
  xbrl.fields['NetCashFlowsFinancingContinuing'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInFinancingActivitiesContinuingOperations')
    .getMostRecentValue();

  // NetCashFlowsOperatingDiscontinued
  xbrl.fields['NetCashFlowsOperatingDiscontinued'] = xbrl
    .getFact('us-gaap:CashProvidedByUsedInOperatingActivitiesDiscontinuedOperations')
    .getMostRecentValue();

  // NetCashFlowsInvestingDiscontinued
  xbrl.fields['NetCashFlowsInvestingDiscontinued'] = xbrl
    .getFact('us-gaap:CashProvidedByUsedInInvestingActivitiesDiscontinuedOperations')
    .getMostRecentValue();

  // NetCashFlowsFinancingDiscontinued
  xbrl.fields['NetCashFlowsFinancingDiscontinued'] = xbrl
    .getFact('us-gaap:CashProvidedByUsedInFinancingActivitiesDiscontinuedOperations')
    .getMostRecentValue();

  // NetCashFlowsDiscontinued
  xbrl.fields['NetCashFlowsDiscontinued'] = xbrl
    .getFact('us-gaap:NetCashProvidedByUsedInDiscontinuedOperations')
    .getMostRecentValue();

  // ExchangeGainsLosses
  xbrl.fields['ExchangeGainsLosses'] =
    xbrl.getFact('us-gaap:EffectOfExchangeRateOnCashAndCashEquivalents').getMostRecentValue() ||
    xbrl
      .getFact('us-gaap:EffectOfExchangeRateOnCashAndCashEquivalentsContinuingOperations')
      .getMostRecentValue() ||
    xbrl
      .getFact('us-gaap:CashProvidedByUsedInFinancingActivitiesDiscontinuedOperations')
      .getMostRecentValue();
}
