export function loadFundamentalAccountingConcepts(xbrl) {
  // Assets
  xbrl.fields['Assets'] = xbrl.getFact('us-gaap:Assets').getMostRecent()?.value || 0;

  // Current Assets
  xbrl.fields['CurrentAssets'] = xbrl.getFact('us-gaap:AssetsCurrent').getMostRecent()?.value || 0;

  // Noncurrent Assets
  xbrl.fields['NoncurrentAssets'] =
    xbrl.getFact('us-gaap:AssetsNoncurrent').getMostRecent()?.value || 0;
  if (!xbrl.fields['NoncurrentAssets']) {
    if (xbrl.fields['Assets'] && xbrl.fields['CurrentAssets']) {
      xbrl.fields['NoncurrentAssets'] = xbrl.fields['Assets'] - xbrl.fields['CurrentAssets'];
    }
  }

  // LiabilitiesAndEquity
  xbrl.fields['LiabilitiesAndEquity'] =
    xbrl.getFact('us-gaap:LiabilitiesAndStockholdersEquity').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:LiabilitiesAndPartnersCapital').getMostRecent()?.value ||
    0;

  // Liabilities
  xbrl.fields['Liabilities'] = xbrl.getFact('us-gaap:Liabilities').getMostRecent()?.value || 0;

  // CurrentLiabilities
  xbrl.fields['CurrentLiabilities'] =
    xbrl.getFact('us-gaap:LiabilitiesCurrent').getMostRecent()?.value || 0;

  // Noncurrent Liabilities
  xbrl.fields['NoncurrentLiabilities'] = xbrl
    .getFact('us-gaap:LiabilitiesNoncurrent')
    .getMostRecent()?.value;
  if (!xbrl.fields['NoncurrentLiabilities']) {
    if (xbrl.fields['Liabilities'] && xbrl.fields['CurrentLiabilities']) {
      xbrl.fields['NoncurrentLiabilities'] =
        xbrl.fields['Liabilities'] - xbrl.fields['CurrentLiabilities'];
    } else {
      xbrl.fields['NoncurrentLiabilities'] = 0;
    }
  }

  // CommitmentsAndContingencies
  xbrl.fields['CommitmentsAndContingencies'] =
    xbrl.getFact('us-gaap:CommitmentsAndContingencies').getMostRecent()?.value || 0;

  // TemporaryEquity
  xbrl.fields['TemporaryEquity'] =
    xbrl.getFact('us-gaap:TemporaryEquityRedemptionValue').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:RedeemablePreferredStockCarryingAmount').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:TemporaryEquityCarryingAmount').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:TemporaryEquityValueExcludingAdditionalPaidInCapital').getMostRecent()
      ?.value ||
    xbrl.getFact('us-gaap:TemporaryEquityCarryingAmountAttributableToParent').getMostRecent()
      ?.value ||
    xbrl.getFact('us-gaap:RedeemableNoncontrollingInterestEquityFairValue').getMostRecent()
      ?.value ||
    0;

  // RedeemableNoncontrollingInterest (added to temporary equity)
  var redeemableNoncontrollingInterest =
    xbrl.getFact('us-gaap:RedeemableNoncontrollingInterestEquityCarryingAmount').getMostRecent()
      ?.value ||
    xbrl
      .getFact('us-gaap:RedeemableNoncontrollingInterestEquityCommonCarryingAmount')
      .getMostRecent()?.value ||
    0;

  // This adds redeemable noncontrolling interest and temporary equity which are rare, but can be reported separately
  if (xbrl.fields['TemporaryEquity']) {
    xbrl.fields['TemporaryEquity'] =
      Number(xbrl.fields['TemporaryEquity']) + Number(redeemableNoncontrollingInterest);
  }

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
    xbrl.getFact('us-gaap:AssetsNet').getMostRecent()?.value ||
    0;

  // EquityAttributableToNoncontrollingInterest
  xbrl.fields['EquityAttributableToNoncontrollingInterest'] =
    xbrl.getFact('us-gaap:MinorityInterest').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:PartnersCapitalAttributableToNoncontrollingInterest').getMostRecent()
      ?.value ||
    0;

  // EquityAttributableToParent
  xbrl.fields['EquityAttributableToParent'] =
    xbrl.getFact('us-gaap:StockholdersEquity').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:LiabilitiesAndPartnersCapital').getMostRecent()?.value ||
    0;

  // BS Adjustments
  // If total assets is missing, try using current assets
  if (
    xbrl.fields['Assets'] === 0 &&
    xbrl.fields['Assets'] === xbrl.fields['LiabilitiesAndEquity'] &&
    xbrl.fields['CurrentAssets'] === xbrl.fields['LiabilitiesAndEquity']
  ) {
    xbrl.fields['Assets'] = xbrl.fields['CurrentAssets'];
  }

  // Added to fix Assets
  if (
    xbrl.fields['Assets'] === 0 &&
    xbrl.fields['LiabilitiesAndEquity'] !== 0 &&
    xbrl.fields['CurrentAssets'] === xbrl.fields['LiabilitiesAndEquity']
  ) {
    xbrl.fields['Assets'] = xbrl.fields['CurrentAssets'];
  }

  // Added to fix Assets even more
  if (
    xbrl.fields['Assets'] === 0 &&
    xbrl.fields['NoncurrentAssets'] === 0 &&
    xbrl.fields['LiabilitiesAndEquity'] !== 0 &&
    xbrl.fields['LiabilitiesAndEquity'] === xbrl.fields['Liabilities'] + xbrl.fields['Equity']
  ) {
    xbrl.fields['Assets'] = xbrl.fields['CurrentAssets'];
  }

  if (xbrl.fields['Assets'] !== 0 && xbrl.fields['CurrentAssets'] !== 0) {
    xbrl.fields['NoncurrentAssets'] = xbrl.fields['Assets'] - xbrl.fields['CurrentAssets'];
  }

  if (xbrl.fields['LiabilitiesAndEquity'] === 0 && xbrl.fields['Assets'] !== 0) {
    xbrl.fields['LiabilitiesAndEquity'] = xbrl.fields['Assets'];
  }

  // Impute: Equity based no parent and noncontrolling interest being present
  if (
    xbrl.fields['EquityAttributableToNoncontrollingInterest'] !== 0 &&
    xbrl.fields['EquityAttributableToParent'] !== 0
  ) {
    xbrl.fields['Equity'] =
      xbrl.fields['EquityAttributableToParent'] +
      xbrl.fields['EquityAttributableToNoncontrollingInterest'];
  }

  if (
    xbrl.fields['Equity'] === 0 &&
    xbrl.fields['EquityAttributableToNoncontrollingInterest'] === 0 &&
    xbrl.fields['EquityAttributableToParent'] !== 0
  ) {
    xbrl.fields['Equity'] = xbrl.fields['EquityAttributableToParent'];
  }

  if (xbrl.fields['Equity'] === 0) {
    xbrl.fields['Equity'] =
      xbrl.fields['EquityAttributableToParent'] +
      xbrl.fields['EquityAttributableToNoncontrollingInterest'];
  }

  // Added: Impute Equity attributable to parent based on existence of equity and noncontrolling interest.
  if (
    xbrl.fields['Equity'] !== 0 &&
    xbrl.fields['EquityAttributableToNoncontrollingInterest'] !== 0 &&
    xbrl.fields['EquityAttributableToParent'] === 0
  ) {
    xbrl.fields['EquityAttributableToParent'] =
      xbrl.fields['Equity'] - xbrl.fields['EquityAttributableToNoncontrollingInterest'];
  }

  // Added: Impute Equity attributable to parent based on existence of equity and noncontrolling interest.
  if (
    xbrl.fields['Equity'] !== 0 &&
    xbrl.fields['EquityAttributableToNoncontrollingInterest'] === 0 &&
    xbrl.fields['EquityAttributableToParent'] === 0
  ) {
    xbrl.fields['EquityAttributableToParent'] = xbrl.fields['Equity'];
  }

  // if total liabilities is missing, figure it out based on liabilities and equity
  if (xbrl.fields['Liabilities'] === 0 && xbrl.fields['Equity'] !== 0) {
    xbrl.fields['Liabilities'] =
      xbrl.fields['LiabilitiesAndEquity'] -
      (xbrl.fields['CommitmentsAndContingencies'] +
        xbrl.fields['TemporaryEquity'] +
        xbrl.fields['Equity']);
  }

  // This seems incorrect because liabilities might not be reported
  if (xbrl.fields['Liabilities'] !== 0 && xbrl.fields['CurrentLiabilities'] !== 0) {
    xbrl.fields['NoncurrentLiabilities'] =
      xbrl.fields['Liabilities'] - xbrl.fields['CurrentLiabilities'];
  }

  // Added to fix liabilities based on current liabilities
  if (
    xbrl.fields['Liabilities'] === 0 &&
    xbrl.fields['CurrentLiabilities'] !== 0 &&
    xbrl.fields['NoncurrentLiabilities'] === 0
  ) {
    xbrl.fields['Liabilities'] = xbrl.fields['CurrentLiabilities'];
  }

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
    xbrl.getFact('us-gaap:RegulatedAndUnregulatedOperatingRevenue').getMostRecent()?.value ||
    0;

  // CostOfRevenue
  xbrl.fields['CostOfRevenue'] =
    xbrl.getFact('us-gaap:CostOfRevenue').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:CostOfServices').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:CostOfGoodsSold').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:CostOfGoodsAndServicesSold').getMostRecent()?.value ||
    0;

  // GrossProfit
  xbrl.fields['GrossProfit'] = xbrl.getFact('us-gaap:GrossProfit').getMostRecent()?.value || 0;

  // OperatingExpenses
  xbrl.fields['OperatingExpenses'] =
    xbrl.getFact('us-gaap:OperatingExpenses').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:OperatingCostsAndExpenses').getMostRecent()?.value ||
    0;

  // CostsAndExpenses
  xbrl.fields['CostsAndExpenses'] =
    xbrl.getFact('us-gaap:CostsAndExpenses').getMostRecent()?.value || 0;

  // OtherOperatingIncome
  xbrl.fields['OtherOperatingIncome'] =
    xbrl.getFact('us-gaap:OtherOperatingIncome').getMostRecent()?.value || 0;

  // OperatingIncomeLoss
  xbrl.fields['OperatingIncomeLoss'] =
    xbrl.getFact('us-gaap:OperatingIncomeLoss').getMostRecent()?.value || 0;

  // NonoperatingIncomeLoss
  xbrl.fields['NonoperatingIncomeLoss'] =
    xbrl.getFact('us-gaap:NonoperatingIncomeExpense').getMostRecent()?.value || 0;

  // InterestAndDebtExpense
  xbrl.fields['InterestAndDebtExpense'] =
    xbrl.getFact('us-gaap:InterestAndDebtExpense').getMostRecent()?.value || 0;

  // IncomeBeforeEquityMethodInvestments
  xbrl.fields['IncomeBeforeEquityMethodInvestments'] =
    xbrl
      .getFact(
        'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments'
      )
      .getMostRecent()?.value || 0;

  // IncomeFromEquityMethodInvestments
  xbrl.fields['IncomeFromEquityMethodInvestments'] =
    xbrl.getFact('us-gaap:IncomeLossFromEquityMethodInvestments').getMostRecent()?.value || 0;

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
      .getMostRecent()?.value ||
    0;

  // IncomeTaxExpenseBenefit
  xbrl.fields['IncomeTaxExpenseBenefit'] =
    xbrl.getFact('us-gaap:IncomeTaxExpenseBenefit').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:IncomeTaxExpenseBenefitContinuingOperations').getMostRecent()?.value ||
    0;

  // IncomeFromContinuingOperationsAfterTax
  xbrl.fields['IncomeFromContinuingOperationsAfterTax'] =
    xbrl
      .getFact(
        'us-gaap:IncomeLossBeforeExtraordinaryItemsAndCumulativeEffectOfChangeInAccountingPrinciple'
      )
      .getMostRecent()?.value || 0;

  // IncomeFromDiscontinuedOperations
  xbrl.fields['IncomeFromDiscontinuedOperations'] =
    xbrl.getFact('us-gaap:IncomeLossFromDiscontinuedOperationsNetOfTax').getMostRecent()?.value ||
    xbrl
      .getFact('us-gaap:DiscontinuedOperationGainLossOnDisposalOfDiscontinuedOperationNetOfTax')
      .getMostRecent()?.value ||
    xbrl
      .getFact('us-gaap:IncomeLossFromDiscontinuedOperationsNetOfTaxAttributableToReportingEntity')
      .getMostRecent()?.value ||
    0;

  // ExtraordinaryItemsGainLoss
  xbrl.fields['ExtraordinaryItemsGainLoss'] =
    xbrl.getFact('us-gaap:ExtraordinaryItemNetOfTax').getMostRecent()?.value || 0;

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
      .getMostRecent()?.value ||
    0;

  // NetIncomeAvailableToCommonStockholdersBasic
  xbrl.fields['NetIncomeAvailableToCommonStockholdersBasic'] =
    xbrl.getFact('us-gaap:NetIncomeLossAvailableToCommonStockholdersBasic').getMostRecent()
      ?.value || 0;

  // #PreferredStockDividendsAndOtherAdjustments
  xbrl.fields['PreferredStockDividendsAndOtherAdjustments'] =
    xbrl.getFact('us-gaap:PreferredStockDividendsAndOtherAdjustments').getMostRecent()?.value || 0;

  // #NetIncomeAttributableToNoncontrollingInterest
  xbrl.fields['NetIncomeAttributableToNoncontrollingInterest'] =
    xbrl.getFact('us-gaap:NetIncomeLossAttributableToNoncontrollingInterest').getMostRecent()
      ?.value || 0;

  // #NetIncomeAttributableToParent
  xbrl.fields['NetIncomeAttributableToParent'] =
    xbrl.getFact('us-gaap:NetIncomeLoss').getMostRecent()?.value || 0;

  // OtherComprehensiveIncome
  xbrl.fields['OtherComprehensiveIncome'] =
    xbrl.getFact('us-gaap:OtherComprehensiveIncomeLossNetOfTax').getMostRecent()?.value || 0;

  // ComprehensiveIncome
  xbrl.fields['ComprehensiveIncome'] =
    xbrl
      .getFact(
        'us-gaap:ComprehensiveIncomeNetOfTaxIncludingPortionAttributableToNoncontrollingInterest'
      )
      .getMostRecent()?.value ||
    xbrl.getFact('us-gaap:ComprehensiveIncomeNetOfTax').getMostRecent()?.value ||
    0;

  // ComprehensiveIncomeAttributableToParent
  xbrl.fields['ComprehensiveIncomeAttributableToParent'] =
    xbrl.getFact('us-gaap:ComprehensiveIncomeNetOfTax').getMostRecent()?.value || 0;

  // ComprehensiveIncomeAttributableToNoncontrollingInterest
  xbrl.fields['ComprehensiveIncomeAttributableToNoncontrollingInterest'] =
    xbrl
      .getFact('us-gaap:ComprehensiveIncomeNetOfTaxAttributableToNoncontrollingInterest')
      .getMostRecent()?.value || 0;

  // 'Adjustments to income statement information
  // Impute: NonoperatingIncomeLossPlusInterestAndDebtExpense
  xbrl.fields['NonoperatingIncomeLossPlusInterestAndDebtExpense'] =
    xbrl.fields['NonoperatingIncomeLoss'] + xbrl.fields['InterestAndDebtExpense'];

  // Impute: Net income available to common stockholders  (if it does not exist)
  if (
    xbrl.fields['NetIncomeAvailableToCommonStockholdersBasic'] === 0 &&
    xbrl.fields['PreferredStockDividendsAndOtherAdjustments'] === 0 &&
    xbrl.fields['NetIncomeAttributableToParent'] !== 0
  ) {
    xbrl.fields['NetIncomeAvailableToCommonStockholdersBasic'] =
      xbrl.fields['NetIncomeAttributableToParent'];
  }

  // Impute NetIncomeLoss
  if (
    xbrl.fields['NetIncomeLoss'] !== 0 &&
    xbrl.fields['IncomeFromContinuingOperationsAfterTax'] === 0
  ) {
    xbrl.fields['IncomeFromContinuingOperationsAfterTax'] =
      xbrl.fields['NetIncomeLoss'] -
      xbrl.fields['IncomeFromDiscontinuedOperations'] -
      xbrl.fields['ExtraordinaryItemsGainLoss'];
  }

  // Impute: Net income attributable to parent if it does not exist
  if (
    xbrl.fields['NetIncomeAttributableToParent'] === 0 &&
    xbrl.fields['NetIncomeAttributableToNoncontrollingInterest'] === 0 &&
    xbrl.fields['NetIncomeLoss'] !== 0
  ) {
    xbrl.fields['NetIncomeAttributableToParent'] = xbrl.fields['NetIncomeLoss'];
  }

  // Impute: PreferredStockDividendsAndOtherAdjustments
  if (
    xbrl.fields['PreferredStockDividendsAndOtherAdjustments'] === 0 &&
    xbrl.fields['NetIncomeAttributableToParent'] !== 0 &&
    xbrl.fields['NetIncomeAvailableToCommonStockholdersBasic'] !== 0
  ) {
    xbrl.fields['PreferredStockDividendsAndOtherAdjustments'] =
      xbrl.fields['NetIncomeAttributableToParent'] -
      xbrl.fields['NetIncomeAvailableToCommonStockholdersBasic'];
  }

  // Impute: comprehensive income
  if (
    xbrl.fields['ComprehensiveIncomeAttributableToParent'] === 0 &&
    xbrl.fields['ComprehensiveIncomeAttributableToNoncontrollingInterest'] === 0 &&
    xbrl.fields['ComprehensiveIncome'] === 0 &&
    xbrl.fields['OtherComprehensiveIncome'] === 0
  ) {
    xbrl.fields['ComprehensiveIncome'] = xbrl.fields['NetIncomeLoss'];
  }

  // Impute: other comprehensive income
  if (xbrl.fields['ComprehensiveIncome'] !== 0 && xbrl.fields['OtherComprehensiveIncome'] === 0) {
    xbrl.fields['OtherComprehensiveIncome'] =
      xbrl.fields['ComprehensiveIncome'] - xbrl.fields['NetIncomeLoss'];
  }

  // Impute: comprehensive income attributable to parent if it does not exist
  if (
    xbrl.fields['ComprehensiveIncomeAttributableToParent'] === 0 &&
    xbrl.fields['ComprehensiveIncomeAttributableToNoncontrollingInterest'] === 0 &&
    xbrl.fields['ComprehensiveIncome'] !== 0
  ) {
    xbrl.fields['ComprehensiveIncomeAttributableToParent'] = xbrl.fields['ComprehensiveIncome'];
  }

  // Impute: IncomeFromContinuingOperations*Before*Tax
  if (
    xbrl.fields['IncomeBeforeEquityMethodInvestments'] !== 0 &&
    xbrl.fields['IncomeFromEquityMethodInvestments'] !== 0 &&
    xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] === 0
  ) {
    xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] =
      xbrl.fields['IncomeBeforeEquityMethodInvestments'] +
      xbrl.fields['IncomeFromEquityMethodInvestments'];
  }

  // Impute: IncomeFromContinuingOperations*Before*Tax2 (if income before tax is missing)
  if (
    xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] === 0 &&
    xbrl.fields['IncomeFromContinuingOperationsAfterTax'] !== 0
  ) {
    xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] =
      xbrl.fields['IncomeFromContinuingOperationsAfterTax'] +
      xbrl.fields['IncomeTaxExpenseBenefit'];
  }

  // Impute: IncomeFromContinuingOperations*After*Tax
  if (
    xbrl.fields['IncomeFromContinuingOperationsAfterTax'] === 0 &&
    (xbrl.fields['IncomeTaxExpenseBenefit'] !== 0 ||
      xbrl.fields['IncomeTaxExpenseBenefit'] === 0) &&
    xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] !== 0
  ) {
    xbrl.fields['IncomeFromContinuingOperationsAfterTax'] =
      xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] -
      xbrl.fields['IncomeTaxExpenseBenefit'];
  }

  // Impute: GrossProfit
  if (
    xbrl.fields['GrossProfit'] === 0 &&
    xbrl.fields['Revenues'] !== 0 &&
    xbrl.fields['CostOfRevenue'] !== 0
  ) {
    xbrl.fields['GrossProfit'] = xbrl.fields['Revenues'] - xbrl.fields['CostOfRevenue'];
  }

  // Impute: GrossProfit
  if (
    xbrl.fields['GrossProfit'] === 0 &&
    xbrl.fields['Revenues'] !== 0 &&
    xbrl.fields['CostOfRevenue'] !== 0
  ) {
    xbrl.fields['GrossProfit'] = xbrl.fields['Revenues'] - xbrl.fields['CostOfRevenue'];
  }

  // Impute: Revenues
  if (
    xbrl.fields['GrossProfit'] !== 0 &&
    xbrl.fields['Revenues'] === 0 &&
    xbrl.fields['CostOfRevenue'] !== 0
  ) {
    xbrl.fields['Revenues'] = xbrl.fields['GrossProfit'] + xbrl.fields['CostOfRevenue'];
  }

  // Impute: CostOfRevenue
  if (
    xbrl.fields['GrossProfit'] !== 0 &&
    xbrl.fields['Revenues'] !== 0 &&
    xbrl.fields['CostOfRevenue'] === 0
  ) {
    xbrl.fields['CostOfRevenue'] = xbrl.fields['Revenues'] - xbrl.fields['GrossProfit'];
  }

  // Impute: CostsAndExpenses (would NEVER have costs and expenses if has gross profit, gross profit is multi-step and costs and expenses is single-step)
  if (
    xbrl.fields['GrossProfit'] === 0 &&
    xbrl.fields['CostsAndExpenses'] === 0 &&
    xbrl.fields['CostOfRevenue'] !== 0 &&
    xbrl.fields['OperatingExpenses'] !== 0
  ) {
    xbrl.fields['CostsAndExpenses'] =
      xbrl.fields['CostOfRevenue'] + xbrl.fields['OperatingExpenses'];
  }

  // Impute: CostsAndExpenses based on existence of both costs of revenues and operating expenses
  if (
    xbrl.fields['CostsAndExpenses'] === 0 &&
    xbrl.fields['OperatingExpenses'] !== 0 &&
    xbrl.fields['CostOfRevenue'] !== 0
  ) {
    xbrl.fields['CostsAndExpenses'] =
      xbrl.fields['CostOfRevenue'] + xbrl.fields['OperatingExpenses'];
  }

  // Impute: CostsAndExpenses
  if (
    xbrl.fields['GrossProfit'] === 0 &&
    xbrl.fields['CostsAndExpenses'] === 0 &&
    xbrl.fields['Revenues'] !== 0 &&
    xbrl.fields['OperatingIncomeLoss'] !== 0 &&
    xbrl.fields['OtherOperatingIncome'] !== 0
  ) {
    xbrl.fields['CostsAndExpenses'] =
      xbrl.fields['Revenues'] -
      xbrl.fields['OperatingIncomeLoss'] -
      xbrl.fields['OtherOperatingIncome'];
  }

  // Impute: OperatingExpenses based on existence of costs and expenses and cost of revenues
  if (
    xbrl.fields['CostOfRevenue'] !== 0 &&
    xbrl.fields['CostsAndExpenses'] !== 0 &&
    xbrl.fields['OperatingExpenses'] === 0
  ) {
    xbrl.fields['OperatingExpenses'] =
      xbrl.fields['CostsAndExpenses'] - xbrl.fields['CostOfRevenue'];
  }

  // Impute: CostOfRevenues single-step method
  if (
    xbrl.fields['Revenues'] !== 0 &&
    xbrl.fields['GrossProfit'] === 0 &&
    xbrl.fields['Revenues'] - xbrl.fields['CostsAndExpenses'] ===
      xbrl.fields['OperatingIncomeLoss'] &&
    xbrl.fields['OperatingExpenses'] === 0 &&
    xbrl.fields['OtherOperatingIncome'] === 0
  ) {
    xbrl.fields['CostOfRevenue'] =
      xbrl.fields['CostsAndExpenses'] - xbrl.fields['OperatingExpenses'];
  }

  // Impute: IncomeBeforeEquityMethodInvestments
  if (
    xbrl.fields['IncomeBeforeEquityMethodInvestments'] === 0 &&
    xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] !== 0
  ) {
    xbrl.fields['IncomeBeforeEquityMethodInvestments'] =
      xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] -
      xbrl.fields['IncomeFromEquityMethodInvestments'];
  }

  // Impute: IncomeBeforeEquityMethodInvestments
  if (
    xbrl.fields['OperatingIncomeLoss'] !== 0 &&
    xbrl.fields['NonoperatingIncomeLoss'] !== 0 &&
    xbrl.fields['InterestAndDebtExpense'] === 0 &&
    xbrl.fields['IncomeBeforeEquityMethodInvestments'] !== 0
  ) {
    xbrl.fields['InterestAndDebtExpense'] =
      xbrl.fields['IncomeBeforeEquityMethodInvestments'] -
      (xbrl.fields['OperatingIncomeLoss'] + xbrl.fields['NonoperatingIncomeLoss']);
  }

  // Impute: OtherOperatingIncome
  if (
    xbrl.fields['GrossProfit'] !== 0 &&
    xbrl.fields['OperatingExpenses'] !== 0 &&
    xbrl.fields['OperatingIncomeLoss'] !== 0
  ) {
    xbrl.fields['OtherOperatingIncome'] =
      xbrl.fields['OperatingIncomeLoss'] -
      (xbrl.fields['GrossProfit'] - xbrl.fields['OperatingExpenses']);
  }

  // Move IncomeFromEquityMethodInvestments
  if (
    xbrl.fields['IncomeFromEquityMethodInvestments'] !== 0 &&
    xbrl.fields['IncomeBeforeEquityMethodInvestments'] !== 0 &&
    xbrl.fields['IncomeBeforeEquityMethodInvestments'] !==
      xbrl.fields['IncomeFromContinuingOperationsBeforeTax']
  ) {
    xbrl.fields['IncomeBeforeEquityMethodInvestments'] =
      xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] -
      xbrl.fields['IncomeFromEquityMethodInvestments'];
    xbrl.fields['OperatingIncomeLoss'] =
      xbrl.fields['OperatingIncomeLoss'] - xbrl.fields['IncomeFromEquityMethodInvestments'];
  }

  // DANGEROUS!!  May need to turn off. IS3 had 2085 PASSES WITHOUT this imputing. if it is higher,: keep the test
  // Impute: OperatingIncomeLoss
  if (
    xbrl.fields['OperatingIncomeLoss'] === 0 &&
    xbrl.fields['IncomeBeforeEquityMethodInvestments'] !== 0
  ) {
    xbrl.fields['OperatingIncomeLoss'] =
      xbrl.fields['IncomeBeforeEquityMethodInvestments'] +
      xbrl.fields['NonoperatingIncomeLoss'] -
      xbrl.fields['InterestAndDebtExpense'];
  }

  xbrl.fields['NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments'] =
    xbrl.fields['IncomeFromContinuingOperationsBeforeTax'] - xbrl.fields['OperatingIncomeLoss'];

  // NonoperatingIncomeLossPlusInterestAndDebtExpense
  if (
    xbrl.fields['NonoperatingIncomeLossPlusInterestAndDebtExpense'] === 0 &&
    xbrl.fields[
      'NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments'
    ] !== 0
  ) {
    xbrl.fields['NonoperatingIncomeLossPlusInterestAndDebtExpense'] =
      xbrl.fields[
        'NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments'
      ] - xbrl.fields['IncomeFromEquityMethodInvestments'];
  }

  // Cash flow statement

  // NetCashFlow
  xbrl.fields['NetCashFlow'] =
    xbrl.getFact('us-gaap:CashAndCashEquivalentsPeriodIncreaseDecrease').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:CashPeriodIncreaseDecrease').getMostRecent()?.value ||
    xbrl.getFact('us-gaap:NetCashProvidedByUsedInContinuingOperations').getMostRecent()?.value ||
    0;

  // NetCashFlowsOperating
  xbrl.fields['NetCashFlowsOperating'] =
    xbrl.getFact('us-gaap:NetCashProvidedByUsedInOperatingActivities').getMostRecent()?.value || 0;

  // NetCashFlowsInvesting
  xbrl.fields['NetCashFlowsInvesting'] =
    xbrl.getFact('us-gaap:NetCashProvidedByUsedInInvestingActivities').getMostRecent()?.value || 0;

  // NetCashFlowsFinancing
  xbrl.fields['NetCashFlowsFinancing'] =
    xbrl.getFact('us-gaap:NetCashProvidedByUsedInFinancingActivities').getMostRecent()?.value || 0;

  // NetCashFlowsOperatingContinuing
  xbrl.fields['NetCashFlowsOperatingContinuing'] =
    xbrl
      .getFact('us-gaap:NetCashProvidedByUsedInOperatingActivitiesContinuingOperations')
      .getMostRecent()?.value || 0;

  // NetCashFlowsInvestingContinuing
  xbrl.fields['NetCashFlowsInvestingContinuing'] =
    xbrl
      .getFact('us-gaap:NetCashProvidedByUsedInInvestingActivitiesContinuingOperations')
      .getMostRecent()?.value || 0;
  // NetCashFlowsFinancingContinuing
  xbrl.fields['NetCashFlowsFinancingContinuing'] =
    xbrl
      .getFact('us-gaap:NetCashProvidedByUsedInFinancingActivitiesContinuingOperations')
      .getMostRecent()?.value || 0;

  // NetCashFlowsOperatingDiscontinued
  xbrl.fields['NetCashFlowsOperatingDiscontinued'] =
    xbrl
      .getFact('us-gaap:CashProvidedByUsedInOperatingActivitiesDiscontinuedOperations')
      .getMostRecent()?.value || 0;

  // NetCashFlowsInvestingDiscontinued
  xbrl.fields['NetCashFlowsInvestingDiscontinued'] =
    xbrl
      .getFact('us-gaap:CashProvidedByUsedInInvestingActivitiesDiscontinuedOperations')
      .getMostRecent()?.value || 0;

  // NetCashFlowsFinancingDiscontinued
  xbrl.fields['NetCashFlowsFinancingDiscontinued'] =
    xbrl
      .getFact('us-gaap:CashProvidedByUsedInFinancingActivitiesDiscontinuedOperations')
      .getMostRecent()?.value || 0;

  // NetCashFlowsDiscontinued
  xbrl.fields['NetCashFlowsDiscontinued'] =
    xbrl.getFact('us-gaap:NetCashProvidedByUsedInDiscontinuedOperations').getMostRecent()?.value ||
    0;

  // ExchangeGainsLosses
  xbrl.fields['ExchangeGainsLosses'] =
    xbrl.getFact('us-gaap:EffectOfExchangeRateOnCashAndCashEquivalents').getMostRecent()?.value ||
    xbrl
      .getFact('us-gaap:EffectOfExchangeRateOnCashAndCashEquivalentsContinuingOperations')
      .getMostRecent()?.value ||
    xbrl
      .getFact('us-gaap:CashProvidedByUsedInFinancingActivitiesDiscontinuedOperations')
      .getMostRecent()?.value ||
    0;

  // Adjustments
  // Impute: total net cash flows discontinued if not reported
  if (xbrl.fields['NetCashFlowsDiscontinued'] === 0) {
    xbrl.fields['NetCashFlowsDiscontinued'] =
      xbrl.fields['NetCashFlowsOperatingDiscontinued'] +
      xbrl.fields['NetCashFlowsInvestingDiscontinued'] +
      xbrl.fields['NetCashFlowsFinancingDiscontinued'];
  }

  // Impute: cash flows from continuing
  if (
    xbrl.fields['NetCashFlowsOperating'] !== 0 &&
    xbrl.fields['NetCashFlowsOperatingContinuing'] === 0
  ) {
    xbrl.fields['NetCashFlowsOperatingContinuing'] =
      xbrl.fields['NetCashFlowsOperating'] - xbrl.fields['NetCashFlowsOperatingDiscontinued'];
  }

  if (
    xbrl.fields['NetCashFlowsInvesting'] !== 0 &&
    xbrl.fields['NetCashFlowsInvestingContinuing'] === 0
  ) {
    xbrl.fields['NetCashFlowsInvestingContinuing'] =
      xbrl.fields['NetCashFlowsInvesting'] - xbrl.fields['NetCashFlowsInvestingDiscontinued'];
  }

  if (
    xbrl.fields['NetCashFlowsFinancing'] !== 0 &&
    xbrl.fields['NetCashFlowsFinancingContinuing'] === 0
  ) {
    xbrl.fields['NetCashFlowsFinancingContinuing'] =
      xbrl.fields['NetCashFlowsFinancing'] - xbrl.fields['NetCashFlowsFinancingDiscontinued'];
  }

  if (
    xbrl.fields['NetCashFlowsOperating'] === 0 &&
    xbrl.fields['NetCashFlowsOperatingContinuing'] !== 0 &&
    xbrl.fields['NetCashFlowsOperatingDiscontinued'] === 0
  ) {
    xbrl.fields['NetCashFlowsOperating'] = xbrl.fields['NetCashFlowsOperatingContinuing'];
  }

  if (
    xbrl.fields['NetCashFlowsInvesting'] === 0 &&
    xbrl.fields['NetCashFlowsInvestingContinuing'] !== 0 &&
    xbrl.fields['NetCashFlowsInvestingDiscontinued'] === 0
  ) {
    xbrl.fields['NetCashFlowsInvesting'] = xbrl.fields['NetCashFlowsInvestingContinuing'];
  }

  if (
    xbrl.fields['NetCashFlowsFinancing'] === 0 &&
    xbrl.fields['NetCashFlowsFinancingContinuing'] !== 0 &&
    xbrl.fields['NetCashFlowsFinancingDiscontinued'] === 0
  ) {
    xbrl.fields['NetCashFlowsFinancing'] = xbrl.fields['NetCashFlowsFinancingContinuing'];
  }

  xbrl.fields['NetCashFlowsContinuing'] =
    xbrl.fields['NetCashFlowsOperatingContinuing'] +
    xbrl.fields['NetCashFlowsInvestingContinuing'] +
    xbrl.fields['NetCashFlowsFinancingContinuing'];

  // Impute: if net cash flow is missing,: this tries to figure out the value by adding up the detail
  if (
    xbrl.fields['NetCashFlow'] === 0 &&
    (xbrl.fields['NetCashFlowsOperating'] !== 0 ||
      xbrl.fields['NetCashFlowsInvesting'] !== 0 ||
      xbrl.fields['NetCashFlowsFinancing'] !== 0)
  ) {
    xbrl.fields['NetCashFlow'] =
      xbrl.fields['NetCashFlowsOperating'] +
      xbrl.fields['NetCashFlowsInvesting'] +
      xbrl.fields['NetCashFlowsFinancing'];
  }

  // Key ratios
  xbrl.fields['SGR'] =
    ((xbrl.fields['NetIncomeLoss'] / xbrl.fields['Revenues']) *
      (1 + (xbrl.fields['Assets'] - xbrl.fields['Equity']) / xbrl.fields['Equity'])) /
      (1 / (xbrl.fields['Revenues'] / xbrl.fields['Assets']) -
        (xbrl.fields['NetIncomeLoss'] / xbrl.fields['Revenues']) *
          (1 + (xbrl.fields['Assets'] - xbrl.fields['Equity']) / xbrl.fields['Equity'])) || null;

  xbrl.fields['ROA'] = xbrl.fields['NetIncomeLoss'] / xbrl.fields['Assets'];
  xbrl.fields['ROE'] = xbrl.fields['NetIncomeLoss'] / xbrl.fields['Equity'];
  xbrl.fields['ROS'] = xbrl.fields['NetIncomeLoss'] / xbrl.fields['Revenues'];
}
