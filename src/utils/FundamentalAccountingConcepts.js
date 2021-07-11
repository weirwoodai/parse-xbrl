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

  // NetIncome
  xbrl.fields['NetIncome'] =
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
}
