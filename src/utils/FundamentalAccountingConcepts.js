export async function loadFundamentalAccountingConcepts(xbrl) {
  // Assets
  xbrl.fields['Assets'] = (await xbrl.getFact('us-gaap:Assets')).getMostRecentValue();

  // Current Assets
  xbrl.fields['CurrentAssets'] = (
    await await xbrl.getFact('us-gaap:AssetsCurrent')
  ).getMostRecentValue();

  // Noncurrent Assets
  xbrl.fields['NoncurrentAssets'] = (
    await await xbrl.getFact('us-gaap:AssetsNoncurrent')
  ).getMostRecentValue();

  // LiabilitiesAndEquity
  xbrl.fields['LiabilitiesAndEquity'] =
    (await xbrl.getFact('us-gaap:LiabilitiesAndStockholdersEquity')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:LiabilitiesAndPartnersCapital')).getMostRecentValue();

  // Liabilities
  xbrl.fields['Liabilities'] = (await xbrl.getFact('us-gaap:Liabilities')).getMostRecentValue();

  // CurrentLiabilities
  xbrl.fields['CurrentLiabilities'] = (
    await xbrl.getFact('us-gaap:LiabilitiesCurrent')
  ).getMostRecentValue();

  // Noncurrent Liabilities
  xbrl.fields['NoncurrentLiabilities'] = (
    await xbrl.getFact('us-gaap:LiabilitiesNoncurrent')
  ).getMostRecentValue();

  // CommitmentsAndContingencies
  xbrl.fields['CommitmentsAndContingencies'] = (
    await xbrl.getFact('us-gaap:CommitmentsAndContingencies')
  ).getMostRecentValue();

  // TemporaryEquity
  xbrl.fields['TemporaryEquity'] =
    (await xbrl.getFact('us-gaap:TemporaryEquityRedemptionValue')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:RedeemablePreferredStockCarryingAmount')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:TemporaryEquityCarryingAmount')).getMostRecentValue() ||
    (
      await xbrl.getFact('us-gaap:TemporaryEquityValueExcludingAdditionalPaidInCapital')
    ).getMostRecentValue() ||
    (
      await xbrl.getFact('us-gaap:TemporaryEquityCarryingAmountAttributableToParent')
    ).getMostRecentValue() ||
    (
      await xbrl.getFact('us-gaap:RedeemableNoncontrollingInterestEquityFairValue')
    ).getMostRecentValue();

  // Equity
  xbrl.fields['Equity'] =
    (
      await xbrl.getFact(
        'us-gaap:StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest'
      )
    ).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:StockholdersEquity')).getMostRecentValue() ||
    (
      await xbrl.getFact(
        'us-gaap:PartnersCapitalIncludingPortionAttributableToNoncontrollingInterest'
      )
    ).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:PartnersCapital')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:CommonStockholdersEquity')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:MemberEquity')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:AssetsNet')).getMostRecentValue();

  // EquityAttributableToNoncontrollingInterest
  xbrl.fields['EquityAttributableToNoncontrollingInterest'] =
    (await xbrl.getFact('us-gaap:MinorityInterest')).getMostRecentValue() ||
    (
      await xbrl.getFact('us-gaap:PartnersCapitalAttributableToNoncontrollingInterest')
    ).getMostRecentValue();

  // EquityAttributableToParent
  xbrl.fields['EquityAttributableToParent'] =
    (await xbrl.getFact('us-gaap:StockholdersEquity')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:LiabilitiesAndPartnersCapital')).getMostRecentValue();

  // Revenues
  xbrl.fields['Revenues'] =
    (await xbrl.getFact('us-gaap:Revenues')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:SalesRevenueNet')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:SalesRevenueServicesNet')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:RevenuesNetOfInterestExpense')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:RegulatedAndUnregulatedOperatingRevenue')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:HealthCareOrganizationRevenue')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:InterestAndDividendIncomeOperating')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:RealEstateRevenueNet')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:RevenueMineralSales')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:OilAndGasRevenue')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:FinancialServicesRevenue')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:RegulatedAndUnregulatedOperatingRevenue')).getMostRecentValue();

  // CostOfRevenue
  xbrl.fields['CostOfRevenue'] =
    (await xbrl.getFact('us-gaap:CostOfRevenue')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:CostOfServices')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:CostOfGoodsSold')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:CostOfGoodsAndServicesSold')).getMostRecentValue();

  // GrossProfit
  xbrl.fields['GrossProfit'] = (await xbrl.getFact('us-gaap:GrossProfit')).getMostRecentValue();

  // OperatingExpenses
  xbrl.fields['OperatingExpenses'] =
    (await xbrl.getFact('us-gaap:OperatingExpenses')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:OperatingCostsAndExpenses')).getMostRecentValue();

  // CostsAndExpenses
  xbrl.fields['CostsAndExpenses'] = (
    await xbrl.getFact('us-gaap:CostsAndExpenses')
  ).getMostRecentValue();

  // OtherOperatingIncome
  xbrl.fields['OtherOperatingIncome'] = (
    await xbrl.getFact('us-gaap:OtherOperatingIncome')
  ).getMostRecentValue();

  // OperatingIncomeLoss
  xbrl.fields['OperatingIncomeLoss'] = (
    await xbrl.getFact('us-gaap:OperatingIncomeLoss')
  ).getMostRecentValue();

  // NonoperatingIncomeLoss
  xbrl.fields['NonoperatingIncomeLoss'] = (
    await xbrl.getFact('us-gaap:NonoperatingIncomeExpense')
  ).getMostRecentValue();

  // InterestAndDebtExpense
  xbrl.fields['InterestAndDebtExpense'] = (
    await xbrl.getFact('us-gaap:InterestAndDebtExpense')
  ).getMostRecentValue();

  // IncomeBeforeEquityMethodInvestments
  xbrl.fields['IncomeBeforeEquityMethodInvestments'] = (
    await xbrl.getFact(
      'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments'
    )
  ).getMostRecentValue();

  // IncomeFromEquityMethodInvestments
  xbrl.fields['IncomeFromEquityMethodInvestments'] = (
    await xbrl.getFact('us-gaap:IncomeLossFromEquityMethodInvestments')
  ).getMostRecentValue();

  // IncomeFromContinuingOperationsBeforeTax
  xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] =
    (
      await xbrl.getFact(
        'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments'
      )
    ).getMostRecentValue() ||
    (
      await xbrl.getFact(
        'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest'
      )
    ).getMostRecentValue();

  // IncomeTaxExpenseBenefit
  xbrl.fields['IncomeTaxExpenseBenefit'] =
    (await xbrl.getFact('us-gaap:IncomeTaxExpenseBenefit')).getMostRecentValue() ||
    (
      await xbrl.getFact('us-gaap:IncomeTaxExpenseBenefitContinuingOperations')
    ).getMostRecentValue();

  // IncomeFromContinuingOperationsAfterTax
  xbrl.fields['IncomeFromContinuingOperationsAfterTax'] = (
    await xbrl.getFact(
      'us-gaap:IncomeLossBeforeExtraordinaryItemsAndCumulativeEffectOfChangeInAccountingPrinciple'
    )
  ).getMostRecentValue();

  // IncomeFromDiscontinuedOperations
  xbrl.fields['IncomeFromDiscontinuedOperations'] =
    (
      await xbrl.getFact('us-gaap:IncomeLossFromDiscontinuedOperationsNetOfTax')
    ).getMostRecentValue() ||
    (
      await xbrl.getFact(
        'us-gaap:DiscontinuedOperationGainLossOnDisposalOfDiscontinuedOperationNetOfTax'
      )
    ).getMostRecentValue() ||
    (
      await xbrl.getFact(
        'us-gaap:IncomeLossFromDiscontinuedOperationsNetOfTaxAttributableToReportingEntity'
      )
    ).getMostRecentValue();

  // ExtraordinaryItemsGainLoss
  xbrl.fields['ExtraordinaryItemsGainLoss'] = (
    await xbrl.getFact('us-gaap:ExtraordinaryItemNetOfTax')
  ).getMostRecentValue();

  // NetIncomeLoss
  xbrl.fields['NetIncomeLoss'] =
    (await xbrl.getFact('us-gaap:ProfitLoss')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:NetIncomeLoss')).getMostRecentValue() ||
    (
      await xbrl.getFact('us-gaap:NetIncomeLossAvailableToCommonStockholdersBasic')
    ).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:IncomeLossFromContinuingOperations')).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:IncomeLossAttributableToParent')).getMostRecentValue() ||
    (
      await xbrl.getFact(
        'us-gaap:IncomeLossFromContinuingOperationsIncludingPortionAttributableToNoncontrollingInterest'
      )
    ).getMostRecentValue();

  // NetIncomeAvailableToCommonStockholdersBasic
  xbrl.fields['NetIncomeAvailableToCommonStockholdersBasic'] = (
    await xbrl.getFact('us-gaap:NetIncomeLossAvailableToCommonStockholdersBasic')
  ).getMostRecentValue();

  // #PreferredStockDividendsAndOtherAdjustments
  xbrl.fields['PreferredStockDividendsAndOtherAdjustments'] = (
    await xbrl.getFact('us-gaap:PreferredStockDividendsAndOtherAdjustments')
  ).getMostRecentValue();

  // #NetIncomeAttributableToNoncontrollingInterest
  xbrl.fields['NetIncomeAttributableToNoncontrollingInterest'] = (
    await xbrl.getFact('us-gaap:NetIncomeLossAttributableToNoncontrollingInterest')
  ).getMostRecentValue();

  // #NetIncomeAttributableToParent
  xbrl.fields['NetIncomeAttributableToParent'] = (
    await xbrl.getFact('us-gaap:NetIncomeLoss')
  ).getMostRecentValue();

  // OtherComprehensiveIncome
  xbrl.fields['OtherComprehensiveIncome'] = (
    await xbrl.getFact('us-gaap:OtherComprehensiveIncomeLossNetOfTax')
  ).getMostRecentValue();

  // ComprehensiveIncome
  xbrl.fields['ComprehensiveIncome'] =
    (
      await xbrl.getFact(
        'us-gaap:ComprehensiveIncomeNetOfTaxIncludingPortionAttributableToNoncontrollingInterest'
      )
    ).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:ComprehensiveIncomeNetOfTax')).getMostRecentValue();

  // ComprehensiveIncomeAttributableToParent
  xbrl.fields['ComprehensiveIncomeAttributableToParent'] = (
    await xbrl.getFact('us-gaap:ComprehensiveIncomeNetOfTax')
  ).getMostRecentValue();

  // ComprehensiveIncomeAttributableToNoncontrollingInterest
  xbrl.fields['ComprehensiveIncomeAttributableToNoncontrollingInterest'] = (
    await xbrl.getFact('us-gaap:ComprehensiveIncomeNetOfTaxAttributableToNoncontrollingInterest')
  ).getMostRecentValue();

  // NetCashFlow
  xbrl.fields['NetCashFlow'] =
    (
      await xbrl.getFact('us-gaap:CashAndCashEquivalentsPeriodIncreaseDecrease')
    ).getMostRecentValue() ||
    (await xbrl.getFact('us-gaap:CashPeriodIncreaseDecrease')).getMostRecentValue() ||
    (
      await xbrl.getFact('us-gaap:NetCashProvidedByUsedInContinuingOperations')
    ).getMostRecentValue();

  // NetCashFlowsOperating
  xbrl.fields['NetCashFlowsOperating'] = (
    await xbrl.getFact('us-gaap:NetCashProvidedByUsedInOperatingActivities')
  ).getMostRecentValue();

  // NetCashFlowsInvesting
  xbrl.fields['NetCashFlowsInvesting'] = (
    await xbrl.getFact('us-gaap:NetCashProvidedByUsedInInvestingActivities')
  ).getMostRecentValue();

  // NetCashFlowsFinancing
  xbrl.fields['NetCashFlowsFinancing'] = (
    await xbrl.getFact('us-gaap:NetCashProvidedByUsedInFinancingActivities')
  ).getMostRecentValue();

  // NetCashFlowsOperatingContinuing
  xbrl.fields['NetCashFlowsOperatingContinuing'] = (
    await xbrl.getFact('us-gaap:NetCashProvidedByUsedInOperatingActivitiesContinuingOperations')
  ).getMostRecentValue();

  // NetCashFlowsInvestingContinuing
  xbrl.fields['NetCashFlowsInvestingContinuing'] = (
    await xbrl.getFact('us-gaap:NetCashProvidedByUsedInInvestingActivitiesContinuingOperations')
  ).getMostRecentValue();
  // NetCashFlowsFinancingContinuing
  xbrl.fields['NetCashFlowsFinancingContinuing'] = (
    await xbrl.getFact('us-gaap:NetCashProvidedByUsedInFinancingActivitiesContinuingOperations')
  ).getMostRecentValue();

  // NetCashFlowsOperatingDiscontinued
  xbrl.fields['NetCashFlowsOperatingDiscontinued'] = (
    await xbrl.getFact('us-gaap:CashProvidedByUsedInOperatingActivitiesDiscontinuedOperations')
  ).getMostRecentValue();

  // NetCashFlowsInvestingDiscontinued
  xbrl.fields['NetCashFlowsInvestingDiscontinued'] = (
    await xbrl.getFact('us-gaap:CashProvidedByUsedInInvestingActivitiesDiscontinuedOperations')
  ).getMostRecentValue();

  // NetCashFlowsFinancingDiscontinued
  xbrl.fields['NetCashFlowsFinancingDiscontinued'] = (
    await xbrl.getFact('us-gaap:CashProvidedByUsedInFinancingActivitiesDiscontinuedOperations')
  ).getMostRecentValue();

  // NetCashFlowsDiscontinued
  xbrl.fields['NetCashFlowsDiscontinued'] = (
    await xbrl.getFact('us-gaap:NetCashProvidedByUsedInDiscontinuedOperations')
  ).getMostRecentValue();

  // ExchangeGainsLosses
  xbrl.fields['ExchangeGainsLosses'] =
    (
      await xbrl.getFact('us-gaap:EffectOfExchangeRateOnCashAndCashEquivalents')
    ).getMostRecentValue() ||
    (
      await xbrl.getFact('us-gaap:EffectOfExchangeRateOnCashAndCashEquivalentsContinuingOperations')
    ).getMostRecentValue() ||
    (
      await xbrl.getFact('us-gaap:CashProvidedByUsedInFinancingActivitiesDiscontinuedOperations')
    ).getMostRecentValue();
}
