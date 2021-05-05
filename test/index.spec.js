import { expect } from 'chai';
import { parse } from '../dist/index.js';
const {
  wlRossHolingCorp10kParsed,
  amazon10kParsed,
  cannabicsPharmaceuticals10kParsed: cannabicsPharma10kParsed,
  costco10kParsed,
  transatlanticCapital10kParsed,
  sweetsAndTreats10qParsed,
  rubyTuesday10qParsed,
  google10kParsed,
  aapl10Q2020Parsed,
  tsla10Q2020Parsed
} = loadData();

describe('parse-xbrl', function () {
  it('should parse the xbrl for Amazon 10k', async () => {
    const result = await parse('./test/sampleXbrlDocuments/amazon_10k.xml');
    expect(result).to.deep.equal(amazon10kParsed);
  });

  it('should parse the xbrl for Cannabics Pharmaceuticals Inc. 10k', async () => {
    const result = await parse('./test/sampleXbrlDocuments/cannabics_pharmaceuticals_inc_10k.xml');
    expect(result).to.deep.equal(cannabicsPharma10kParsed);
  });

  it('should parse the xbrl for Costco Inc. 10k', async () => {
    const result = await parse('./test/sampleXbrlDocuments/costco_inc_10k.xml');
    expect(result).to.deep.equal(costco10kParsed);
  });

  it('should parse the xbrl for Transatlantic Capital Inc. 10k', async () => {
    const result = await parse('./test/sampleXbrlDocuments/transatlantic_capital_inc_10k.xml');
    expect(result).to.deep.equal(transatlanticCapital10kParsed);
  });

  it('should parse the xbrl for WL Ross Holding Corp 10k', async () => {
    const result = await parse('./test/sampleXbrlDocuments/wl_ross_holding_corp_10k.xml');
    expect(result).to.deep.equal(wlRossHolingCorp10kParsed);
  });

  it('should parse the xbrl for Sweets and Treats 10q', async () => {
    const result = await parse('./test/sampleXbrlDocuments/sweets_and_treats_10q.xml');
    expect(result).to.deep.equal(sweetsAndTreats10qParsed);
  });

  it('should parse the xbrl for Ruby Tuesday 10q', async () => {
    const result = await parse('./test/sampleXbrlDocuments/ruby_tuesday_10q.xml');
    expect(result).to.deep.equal(rubyTuesday10qParsed);
  });

  it('should parse the xbrl for Google/Alphabet 10k', async () => {
    const result = await parse('./test/sampleXbrlDocuments/google_10k.xml');
    expect(result).to.deep.equal(google10kParsed);
  })
    .timeout(5000)
    .slow(3125);

  it('should parse the xbrl for Apple 10Q 2020', async () => {
    const result = await parse('./test/sampleXbrlDocuments/xbrls/2020/aapl/xml_0.xml');

    expect(result).to.deep.equal(aapl10Q2020Parsed);
  });

  it('should parse the xbrl for Tesla 10Q 2020', async () => {
    const result = await parse('./test/sampleXbrlDocuments/xbrls/2020/tsla/xml_0.xml');

    expect(result).to.deep.equal(tsla10Q2020Parsed);
  })
    .timeout(5000)
    .slow(3125);
});

function loadData() {
  const tsla10Q2020Parsed = {
    TotalRevenue: 6036000,
    OperatingRevenue: 6036000,
    CostofRevenue: 4769000,
    GrossProfit: 1267000,
    OperatingExpense: 940000,
    OperatingIncome: 327000,
    NetNonOperatingInterestIncomeExpense: -162000,
    OtherIncomeExpense: -15000,
    PretaxIncome: 150000,
    TaxProvision: 21000,
    NetIncomeCommonStockholders: 104000,
    DilutedNIAvailabletoComStockholders: 104000,
    BasicEPS: 0,
    DilutedEPS: 0,
    BasicAverageShares: 930000,
    DilutedAverageShares: 1035000,
    TotalOperatingIncomeasReported: 327000,
    TotalExpenses: 5709000,
    'NetIncomefromContinuing&DiscontinuedOperation': 104000,
    NormalizedIncome: 104000,
    InterestIncome: 8000,
    InterestExpense: 170000,
    NetInterestIncome: -162000,
    EBIT: 320000,
    EBITDA: null,
    ReconciledCostofRevenue: 4769000,
    ReconciledDepreciation: 567000,
    NetIncomefromContinuingOperationNetMinorityInterest: 104000,
    TotalUnusualItemsExcludingGoodwill: 0,
    TotalUnusualItems: 0,
    NormalizedEBITDA: 887000,
    TaxRateforCalcs: 0,
    TaxEffectofUnusualItems: 0,
    TotalAssets: 38135000,
    CurrentAssets: 15336000,
    'Totalnon-currentassets': 22799000,
    TotalLiabilitiesNetMinorityInterest: 27411000,
    CurrentLiabilities: 12270000,
    TotalNonCurrentLiabilitiesNetMinorityInterest: 15141000,
    TotalEquityGrossMinorityInterest: 10724000,
    "Stockholders'Equity": 9855000,
    MinorityInterest: 869000,
    TotalCapitalization: 19146000,
    CommonStockEquity: 9855000,
    CapitalLeaseObligations: 2869000,
    NetTangibleAssets: 9347000,
    WorkingCapital: 3066000,
    InvestedCapital: 22463000,
    TangibleBookValue: 9347000,
    TotalDebt: 15477000,
    NetDebt: 3993000,
    ShareIssued: 931596,
    OrdinarySharesNumber: 931596,
    OperatingCashFlow: 964000,
    CashFlowfromContinuingOperatingActivities: 964000,
    InvestingCashFlow: -566000,
    CashFlowfromContinuingInvestingActivities: -566000,
    FinancingCashFlow: 123000,
    CashFlowfromContinuingFinancingActivities: 123000,
    EndCashPosition: 9106000,
    ChangesinCash: 521000,
    EffectofExchangeRateChanges: 38000,
    BeginningCashPosition: 8547000,
    IncomeTaxPaidSupplementalData: null,
    InterestPaidSupplementalData: null,
    CapitalExpenditure: -566000,
    IssuanceofCapitalStock: 0,
    IssuanceofDebt: 2144000,
    RepaymentofDebt: -2033000,
    FreeCashFlow: 398000
  };

  const aapl10Q2020Parsed = {
    EntityRegistrantName: 'Apple Inc.',
    CurrentFiscalYearEndDate: '--09-26',
    EntityCentralIndexKey: '0000320193',
    EntityFilerCategory: 'Large accelerated filer',
    TradingSymbol: 'AAPL',
    DocumentPeriodEndDate: 'June 27, 2020',
    DocumentFiscalYearFocus: '2020',
    DocumentFiscalPeriodFocus: 'Q3',
    DocumentFiscalYearFocusContext: 'i656f36c938ba410686db6183a7b1d75c_D20190929-20200627',
    DocumentFiscalPeriodFocusContext: 'i656f36c938ba410686db6183a7b1d75c_D20190929-20200627',
    DocumentType: '10-Q',
    IncomeStatementPeriodYTD: '2019-09-29',
    ContextForInstants: 'i06d107b9e8124e8f980ce20843670f50_I20200627',
    ContextForDurations: 'i656f36c938ba410686db6183a7b1d75c_D20190929-20200627',
    BalanceSheetDate: 'June 27, 2020',
    Assets: 317344000000,
    CurrentAssets: 140065000000,
    NoncurrentAssets: 177279000000,
    LiabilitiesAndEquity: 317344000000,
    Liabilities: 245062000000,
    CurrentLiabilities: 95318000000,
    NoncurrentLiabilities: 149744000000,
    CommitmentsAndContingencies: 0,
    TemporaryEquity: -1,
    Equity: 72282000000,
    EquityAttributableToNoncontrollingInterest: -1,
    EquityAttributableToParent: 72282000000,
    Revenues: 209817000000,
    CostOfRevenue: 129550000000,
    GrossProfit: 80267000000,
    OperatingExpenses: 28754000000,
    CostsAndExpenses: -1,
    OtherOperatingIncome: 0,
    OperatingIncomeLoss: 51513000000,
    NonoperatingIncomeLoss: 677000000,
    InterestAndDebtExpense: 0,
    IncomeBeforeEquityMethodInvestments: -1,
    IncomeFromEquityMethodInvestments: 0,
    IncomeFromContinuingOperationsBeforeTax: -1,
    IncomeTaxExpenseBenefit: 7452000000,
    IncomeFromContinuingOperationsAfterTax: 44738000000,
    IncomeFromDiscontinuedOperations: 0,
    ExtraordinaryItemsGainLoss: 0,
    NetIncomeLoss: 44738000000,
    NetIncomeAvailableToCommonStockholdersBasic: -1,
    PreferredStockDividendsAndOtherAdjustments: 0,
    NetIncomeAttributableToNoncontrollingInterest: 0,
    NetIncomeAttributableToParent: 44738000000,
    OtherComprehensiveIncome: -102000000,
    ComprehensiveIncome: 44636000000,
    ComprehensiveIncomeAttributableToParent: 44636000000,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
    NonoperatingIncomeLossPlusInterestAndDebtExpense: 677000000,
    NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: 677000000,
    NetCashFlow: -1,
    NetCashFlowsOperating: -1,
    NetCashFlowsInvesting: -1,
    NetCashFlowsFinancing: -1,
    NetCashFlowsOperatingContinuing: -1,
    NetCashFlowsInvestingContinuing: -1,
    NetCashFlowsFinancingContinuing: -1,
    NetCashFlowsOperatingDiscontinued: -1,
    NetCashFlowsInvestingDiscontinued: -1,
    NetCashFlowsFinancingDiscontinued: -1,
    NetCashFlowsDiscontinued: -1,
    ExchangeGainsLosses: -1,
    NetCashFlowsContinuing: -1,
    SGR: -1,
    ROA: -1,
    ROE: -1,
    ROS: -1
  };

  const wlRossHolingCorp10kParsed = {
    DocumentFiscalPeriodFocusContext: 'P01_01_2015To12_31_2015',
    DocumentFiscalYearFocusContext: 'P01_01_2015To12_31_2015',
    DocumentPeriodEndDate: '2015-12-31',
    NetCashFlowsContinuing: -791415,
    NetCashFlowsFinancingDiscontinued: 0,
    NetIncomeAvailableToCommonStockholdersBasic: -332612,
    NonoperatingIncomeLossPlusInterestAndDebtExpense: 1109024,
    NoncurrentLiabilities: 18309150,
    IncomeFromContinuingOperationsBeforeTax: 332612,
    ContextForInstants: 'PAsOn12_31_2015',
    Equity: 5000002,
    EntityFilerCategory: 'Accelerated Filer',
    DocumentType: '10-K',
    ContextForDurations: 'P01_01_2015To12_31_2015',
    NetCashFlowsOperatingContinuing: -1203064,
    OtherComprehensiveIncome: 0,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
    NetCashFlowsInvestingContinuing: 111649,
    NetIncomeAttributableToParent: 332612,
    NetCashFlowsInvestingDiscontinued: 0,
    ROE: 0.06652237339105065,
    PreferredStockDividendsAndOtherAdjustments: 665224,
    NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: 1109024,
    NetCashFlowsOperating: -1203064,
    CostsAndExpenses: 0,
    CurrentAssets: 58654,
    IncomeFromEquityMethodInvestments: 0,
    NoncurrentAssets: 500647797,
    EntityRegistrantName: 'WL Ross Holding Corp.',
    IncomeTaxExpenseBenefit: 0,
    CostOfRevenue: 0,
    ExchangeGainsLosses: 0,
    CurrentLiabilities: 765749,
    Assets: 500706451,
    NetCashFlowsDiscontinued: 0,
    LiabilitiesAndEquity: 500706451,
    OperatingIncomeLoss: -776412,
    TemporaryEquity: 476631550,
    NonoperatingIncomeLoss: 0,
    OtherOperatingIncome: 0,
    EquityAttributableToParent: 5000002,
    GrossProfit: 0,
    TradingSymbol: 'WLRH',
    NetCashFlow: -791415,
    DocumentFiscalYearFocus: '2015',
    IncomeFromDiscontinuedOperations: 0,
    NetCashFlowsInvesting: 111649,
    ComprehensiveIncome: 332612,
    Revenues: 0.0,
    CommitmentsAndContingencies: 0,
    OperatingExpenses: 0,
    IncomeStatementPeriodYTD: '2015-01-01',
    Liabilities: 19074899,
    NetCashFlowsFinancingContinuing: 300000,
    EntityCentralIndexKey: '0001604416',
    EquityAttributableToNoncontrollingInterest: 0,
    ComprehensiveIncomeAttributableToParent: 332612,
    DocumentFiscalPeriodFocus: 'FY',
    NetIncomeLoss: 332612,
    IncomeBeforeEquityMethodInvestments: 332612,
    NetCashFlowsOperatingDiscontinued: 0,
    BalanceSheetDate: '2015-12-31',
    NetCashFlowsFinancing: 300000,
    ROA: 0.0006642854297876821,
    ExtraordinaryItemsGainLoss: 0,
    IncomeFromContinuingOperationsAfterTax: 332612,
    NetIncomeAttributableToNoncontrollingInterest: 0,
    InterestAndDebtExpense: 0,
    CurrentFiscalYearEndDate: '--12-31',
    ROS: Number.POSITIVE_INFINITY,
    SGR: null
  };

  const amazon10kParsed = {
    NetCashFlowsContinuing: 1707000000,
    NetCashFlowsFinancingDiscontinued: 0,
    NetIncomeAvailableToCommonStockholdersBasic: 596000000,
    NonoperatingIncomeLossPlusInterestAndDebtExpense: -665000000,
    NoncurrentLiabilities: 18161000000,
    IncomeFromContinuingOperationsBeforeTax: 1568000000,
    ContextForInstants: 'FI2015Q4',
    Equity: 13384000000,
    EntityFilerCategory: 'Large Accelerated Filer',
    DocumentType: '10-K',
    ContextForDurations: 'FD2015Q4YTD',
    NetCashFlowsOperatingContinuing: 11920000000,
    OtherComprehensiveIncome: -212000000,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
    NetCashFlowsInvestingContinuing: -6450000000,
    ROS: 0.0055697811337682,
    NetIncomeAttributableToParent: 596000000,
    SGR: 0.046606193306224585,
    NetCashFlowsInvestingDiscontinued: 0,
    ROE: 0.04453078302450687,
    PreferredStockDividendsAndOtherAdjustments: 0,
    NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: -665000000,
    NetCashFlowsOperating: 11920000000,
    CostsAndExpenses: 104773000000,
    CurrentAssets: 36474000000,
    IncomeFromEquityMethodInvestments: -22000000,
    NoncurrentAssets: 28970000000.0,
    EntityRegistrantName: 'AMAZON COM INC',
    IncomeTaxExpenseBenefit: 950000000,
    CostOfRevenue: 71651000000,
    ExchangeGainsLosses: -374000000,
    CurrentLiabilities: 33899000000,
    Assets: 65444000000,
    NetCashFlowsDiscontinued: 0,
    LiabilitiesAndEquity: 65444000000,
    OperatingIncomeLoss: 2233000000,
    TemporaryEquity: 0,
    NonoperatingIncomeLoss: -665000000,
    OtherOperatingIncome: 0,
    EquityAttributableToParent: 13384000000,
    GrossProfit: 35355000000,
    TradingSymbol: 'AMZN',
    NetCashFlow: 1333000000,
    DocumentFiscalYearFocus: '2015',
    IncomeFromDiscontinuedOperations: 0,
    NetCashFlowsInvesting: -6450000000,
    ComprehensiveIncome: 384000000,
    Revenues: 107006000000,
    CommitmentsAndContingencies: 0,
    OperatingExpenses: 33122000000,
    IncomeStatementPeriodYTD: '2015-01-01',
    Liabilities: 52060000000,
    NetCashFlowsFinancingContinuing: -3763000000,
    EntityCentralIndexKey: '0001018724',
    EquityAttributableToNoncontrollingInterest: 0,
    ComprehensiveIncomeAttributableToParent: 384000000,
    DocumentFiscalPeriodFocus: 'FY',
    NetIncomeLoss: 596000000,
    IncomeBeforeEquityMethodInvestments: 1568000000,
    NetCashFlowsOperatingDiscontinued: 0,
    BalanceSheetDate: '2015-12-31',
    NetCashFlowsFinancing: -3763000000,
    ROA: 0.009107022798117474,
    ExtraordinaryItemsGainLoss: 0,
    IncomeFromContinuingOperationsAfterTax: 596000000,
    NetIncomeAttributableToNoncontrollingInterest: 0,
    InterestAndDebtExpense: 0,
    CurrentFiscalYearEndDate: '--12-31',
    DocumentFiscalPeriodFocusContext: 'FD2015Q4YTD',
    DocumentFiscalYearFocusContext: 'FD2015Q4YTD',
    DocumentPeriodEndDate: '2015-12-31'
  };

  const cannabicsPharmaceuticals10kParsed = {
    NetCashFlowsContinuing: 0,
    NetCashFlowsFinancingDiscontinued: 0,
    NetIncomeAvailableToCommonStockholdersBasic: -1279138,
    NonoperatingIncomeLossPlusInterestAndDebtExpense: 0,
    NoncurrentLiabilities: 0,
    IncomeFromContinuingOperationsBeforeTax: -1279138,
    ContextForInstants: 'AsOf2015-08-31',
    Equity: -309626,
    EntityFilerCategory: 'Smaller Reporting Company',
    DocumentType: '10-K',
    ContextForDurations: 'From2004-09-15to2015-08-31',
    DocumentFiscalPeriodFocusContext: 'From2014-09-01to2015-08-31',
    DocumentFiscalYearFocusContext: 'From2014-09-01to2015-08-31',
    DocumentPeriodEndDate: '2015-08-31',
    NetCashFlowsOperatingContinuing: 0,
    OtherComprehensiveIncome: 0,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
    NetCashFlowsInvestingContinuing: 0,
    NetIncomeAttributableToParent: -1279138,
    NetCashFlowsInvestingDiscontinued: 0,
    ROE: 4.131235748935813,
    PreferredStockDividendsAndOtherAdjustments: 0,
    NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: 0,
    NetCashFlowsOperating: 0,
    CostsAndExpenses: 0,
    CurrentAssets: 25503,
    IncomeFromEquityMethodInvestments: 0,
    NoncurrentAssets: 3201,
    EntityRegistrantName: 'Cannabics Pharmaceuticals Inc.',
    IncomeTaxExpenseBenefit: 0,
    CostOfRevenue: 0,
    ExchangeGainsLosses: 0,
    CurrentLiabilities: 338330,
    Assets: 28704,
    NetCashFlowsDiscontinued: 0,
    LiabilitiesAndEquity: 28704,
    OperatingIncomeLoss: -1279138,
    TemporaryEquity: 0,
    NonoperatingIncomeLoss: 0,
    OtherOperatingIncome: 0,
    EquityAttributableToParent: -309626,
    GrossProfit: 0,
    TradingSymbol: 'Field not found',
    NetCashFlow: 0,
    DocumentFiscalYearFocus: '2015',
    IncomeFromDiscontinuedOperations: 0,
    NetCashFlowsInvesting: 0,
    ComprehensiveIncome: -1279138,
    Revenues: 0,
    CommitmentsAndContingencies: 0,
    OperatingExpenses: 0,
    IncomeStatementPeriodYTD: '2004-09-15',
    Liabilities: 338330,
    NetCashFlowsFinancingContinuing: 0,
    EntityCentralIndexKey: '0001343009',
    EquityAttributableToNoncontrollingInterest: 0,
    ComprehensiveIncomeAttributableToParent: -1279138,
    DocumentFiscalPeriodFocus: 'FY',
    NetIncomeLoss: -1279138,
    IncomeBeforeEquityMethodInvestments: -1279138,
    NetCashFlowsOperatingDiscontinued: 0,
    BalanceSheetDate: '2015-08-31',
    NetCashFlowsFinancing: 0,
    ROA: -44.563057413600895,
    ROS: Number.NEGATIVE_INFINITY,
    SGR: null,
    ExtraordinaryItemsGainLoss: 0,
    IncomeFromContinuingOperationsAfterTax: -1279138,
    NetIncomeAttributableToNoncontrollingInterest: 0,
    InterestAndDebtExpense: 0,
    CurrentFiscalYearEndDate: '--08-31'
  };

  const costco10kParsed = {
    DocumentFiscalPeriodFocusContext: 'D141201_151130',
    DocumentFiscalYearFocusContext: 'D141201_151130',
    DocumentPeriodEndDate: '2015-11-30',
    NetCashFlowsContinuing: 7001,
    NetCashFlowsFinancingDiscontinued: 0,
    NetIncomeAvailableToCommonStockholdersBasic: -23719,
    NonoperatingIncomeLossPlusInterestAndDebtExpense: 0,
    NoncurrentLiabilities: 0,
    IncomeFromContinuingOperationsBeforeTax: -23719,
    ContextForInstants: 'I151130',
    Equity: 10164,
    EntityFilerCategory: 'Smaller Reporting Company',
    DocumentType: '10-K',
    ContextForDurations: 'D141201_151130',
    NetCashFlowsOperatingContinuing: -22999,
    OtherComprehensiveIncome: 0,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
    NetCashFlowsInvestingContinuing: 0,
    NetIncomeAttributableToParent: -23719,
    NetCashFlowsInvestingDiscontinued: 0,
    ROE: -2.3336284927194018,
    PreferredStockDividendsAndOtherAdjustments: 0,
    NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: 0,
    NetCashFlowsOperating: -22999,
    CostsAndExpenses: 0,
    CurrentAssets: 0,
    IncomeFromEquityMethodInvestments: 0,
    NoncurrentAssets: 0,
    EntityRegistrantName: 'COSTO INC.',
    IncomeTaxExpenseBenefit: 0,
    CostOfRevenue: 0,
    ExchangeGainsLosses: 0,
    CurrentLiabilities: 0,
    Assets: 13641,
    NetCashFlowsDiscontinued: 0,
    LiabilitiesAndEquity: 13641,
    OperatingIncomeLoss: -23719,
    TemporaryEquity: 0,
    NonoperatingIncomeLoss: 0,
    OtherOperatingIncome: 0,
    EquityAttributableToParent: 10164,
    GrossProfit: 0,
    TradingSymbol: 'csst',
    NetCashFlow: 7001,
    DocumentFiscalYearFocus: '2015',
    IncomeFromDiscontinuedOperations: 0,
    NetCashFlowsInvesting: 0,
    ComprehensiveIncome: -23719,
    Revenues: 0,
    CommitmentsAndContingencies: 0,
    OperatingExpenses: 23719,
    IncomeStatementPeriodYTD: '2014-12-01',
    Liabilities: 3477,
    NetCashFlowsFinancingContinuing: 30000,
    EntityCentralIndexKey: '0001621199',
    EquityAttributableToNoncontrollingInterest: 0,
    ComprehensiveIncomeAttributableToParent: -23719,
    DocumentFiscalPeriodFocus: 'FY',
    NetIncomeLoss: -23719,
    IncomeBeforeEquityMethodInvestments: -23719,
    NetCashFlowsOperatingDiscontinued: 0,
    BalanceSheetDate: '2015-11-30',
    NetCashFlowsFinancing: 30000,
    ROA: -1.7388021406055274,
    ExtraordinaryItemsGainLoss: 0,
    IncomeFromContinuingOperationsAfterTax: -23719,
    NetIncomeAttributableToNoncontrollingInterest: 0,
    InterestAndDebtExpense: 0,
    CurrentFiscalYearEndDate: '--11-30',
    ROS: Number.NEGATIVE_INFINITY,
    SGR: null
  };

  const transatlanticCapital10kParsed = {
    DocumentFiscalPeriodFocusContext: 'From2014-01-01to2014-12-31',
    DocumentFiscalYearFocusContext: 'From2014-01-01to2014-12-31',
    DocumentPeriodEndDate: '2014-12-31',
    NetCashFlowsContinuing: 0,
    NetCashFlowsFinancingDiscontinued: 0,
    NetIncomeAvailableToCommonStockholdersBasic: -312535,
    NonoperatingIncomeLossPlusInterestAndDebtExpense: -132776,
    NoncurrentLiabilities: 0,
    IncomeFromContinuingOperationsBeforeTax: -312535,
    ContextForInstants: 'AsOf2014-12-31',
    Equity: -144968,
    EntityFilerCategory: 'Smaller Reporting Company',
    DocumentType: '10-K',
    ContextForDurations: 'From2014-01-01to2014-12-31',
    NetCashFlowsOperatingContinuing: -69155,
    OtherComprehensiveIncome: 0,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
    NetCashFlowsInvestingContinuing: 0,
    NetIncomeAttributableToParent: -312535,
    NetCashFlowsInvestingDiscontinued: 0,
    ROE: 2.155889575630484,
    PreferredStockDividendsAndOtherAdjustments: 0,
    NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: -132776,
    NetCashFlowsOperating: -69155,
    CostsAndExpenses: 0,
    CurrentAssets: 0,
    IncomeFromEquityMethodInvestments: 0,
    NoncurrentAssets: 0,
    EntityRegistrantName: 'TRANSATLANTIC CAPITAL INC.',
    IncomeTaxExpenseBenefit: 0,
    CostOfRevenue: 0,
    ExchangeGainsLosses: 0,
    CurrentLiabilities: 144968,
    Assets: 0,
    NetCashFlowsDiscontinued: 0,
    LiabilitiesAndEquity: 0,
    OperatingIncomeLoss: -179759,
    TemporaryEquity: 0,
    NonoperatingIncomeLoss: 0,
    OtherOperatingIncome: 0,
    EquityAttributableToParent: -144968,
    GrossProfit: 0,
    TradingSymbol: 'Field not found',
    NetCashFlow: 0,
    DocumentFiscalYearFocus: '2014',
    IncomeFromDiscontinuedOperations: 0,
    NetCashFlowsInvesting: 0,
    ComprehensiveIncome: -312535,
    Revenues: 0,
    CommitmentsAndContingencies: 0,
    OperatingExpenses: 179759,
    IncomeStatementPeriodYTD: '2014-01-01',
    Liabilities: 144968,
    NetCashFlowsFinancingContinuing: 69155,
    EntityCentralIndexKey: '0001228386',
    EquityAttributableToNoncontrollingInterest: 0,
    ComprehensiveIncomeAttributableToParent: -312535,
    DocumentFiscalPeriodFocus: 'FY',
    NetIncomeLoss: -312535,
    IncomeBeforeEquityMethodInvestments: -312535,
    NetCashFlowsOperatingDiscontinued: 0,
    BalanceSheetDate: '2014-12-31',
    NetCashFlowsFinancing: 69155,
    ExtraordinaryItemsGainLoss: 0,
    IncomeFromContinuingOperationsAfterTax: -312535,
    NetIncomeAttributableToNoncontrollingInterest: 0,
    InterestAndDebtExpense: 0,
    CurrentFiscalYearEndDate: '--12-31',
    ROA: Number.NEGATIVE_INFINITY,
    ROS: Number.NEGATIVE_INFINITY,
    SGR: null
  };

  const sweetsAndTreats10qParsed = {
    DocumentFiscalPeriodFocusContext: 'From2015-08-01to2015-10-31',
    DocumentFiscalYearFocusContext: 'From2015-08-01to2015-10-31',
    DocumentPeriodEndDate: '2015-10-31',
    NetCashFlowsContinuing: -47,
    NetCashFlowsFinancingDiscontinued: 0,
    NetIncomeAvailableToCommonStockholdersBasic: -2065,
    NonoperatingIncomeLossPlusInterestAndDebtExpense: 0,
    NoncurrentLiabilities: 0,
    IncomeFromContinuingOperationsBeforeTax: -2065,
    ContextForInstants: 'AsOf2015-10-31',
    Equity: -34509,
    EntityFilerCategory: 'Smaller Reporting Company',
    DocumentType: '10-Q',
    ContextForDurations: 'From2015-08-01to2015-10-31',
    NetCashFlowsOperatingContinuing: -18706,
    OtherComprehensiveIncome: 0,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
    NetCashFlowsInvestingContinuing: 0,
    ROS: -13.49673202614379,
    NetIncomeAttributableToParent: -2065,
    SGR: 0.0636481321661941,
    NetCashFlowsInvestingDiscontinued: 0,
    ROE: 0.05983946216928917,
    PreferredStockDividendsAndOtherAdjustments: 0,
    NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: 0,
    NetCashFlowsOperating: -18706,
    CostsAndExpenses: 2218,
    CurrentAssets: 5806,
    IncomeFromEquityMethodInvestments: 0,
    NoncurrentAssets: 0,
    EntityRegistrantName: 'SWEETS & TREATS INC.',
    IncomeTaxExpenseBenefit: 0,
    CostOfRevenue: 99,
    ExchangeGainsLosses: 0,
    CurrentLiabilities: 40315,
    Assets: 5806,
    NetCashFlowsDiscontinued: 0,
    LiabilitiesAndEquity: 5806,
    OperatingIncomeLoss: -2065,
    TemporaryEquity: 0,
    NonoperatingIncomeLoss: 0,
    OtherOperatingIncome: 0,
    EquityAttributableToParent: -34509,
    GrossProfit: 54,
    TradingSymbol: 'Field not found',
    NetCashFlow: -47,
    DocumentFiscalYearFocus: '2016',
    IncomeFromDiscontinuedOperations: 0,
    NetCashFlowsInvesting: 0,
    ComprehensiveIncome: -2065,
    Revenues: 153,
    CommitmentsAndContingencies: 0,
    OperatingExpenses: 2119,
    IncomeStatementPeriodYTD: '2015-08-01',
    Liabilities: 40315,
    NetCashFlowsFinancingContinuing: 18659,
    EntityCentralIndexKey: '0001624982',
    EquityAttributableToNoncontrollingInterest: 0,
    ComprehensiveIncomeAttributableToParent: -2065,
    DocumentFiscalPeriodFocus: 'Q1',
    NetIncomeLoss: -2065,
    IncomeBeforeEquityMethodInvestments: -2065,
    NetCashFlowsOperatingDiscontinued: 0,
    BalanceSheetDate: '2015-10-31',
    NetCashFlowsFinancing: 18659,
    ROA: -0.3556665518429211,
    ExtraordinaryItemsGainLoss: 0,
    IncomeFromContinuingOperationsAfterTax: -2065,
    NetIncomeAttributableToNoncontrollingInterest: 0,
    InterestAndDebtExpense: 0,
    CurrentFiscalYearEndDate: '--07-31'
  };

  const rubyTuesday10qParsed = {
    DocumentPeriodEndDate: '2015-12-01',
    DocumentFiscalYearFocusContext: 'd_2015-06-03_2015-12-01',
    DocumentFiscalPeriodFocusContext: 'd_2015-06-03_2015-12-01',
    NetCashFlowsContinuing: -30080000,
    NetCashFlowsFinancingDiscontinued: 0,
    NetIncomeAvailableToCommonStockholdersBasic: -19993000,
    NonoperatingIncomeLossPlusInterestAndDebtExpense: -59956000,
    NoncurrentLiabilities: 347905000,
    IncomeFromContinuingOperationsBeforeTax: -21196000,
    ContextForInstants: 'i_2015-12-01',
    Equity: 446822000,
    EntityFilerCategory: 'Accelerated Filer',
    DocumentType: '10-Q',
    ContextForDurations: 'd_2015-06-03_2015-12-01',
    NetCashFlowsOperatingContinuing: -4131000,
    OtherComprehensiveIncome: 462000,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
    NetCashFlowsInvestingContinuing: -16310000,
    ROS: -0.036994204679184954,
    NetIncomeAttributableToParent: -19993000,
    SGR: -0.04282852950312222,
    NetCashFlowsInvestingDiscontinued: 0,
    ROE: -0.04474488722578566,
    PreferredStockDividendsAndOtherAdjustments: 0,
    NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: -59956000,
    NetCashFlowsOperating: -4131000,
    CostsAndExpenses: 561632000,
    CurrentAssets: 99598000,
    IncomeFromEquityMethodInvestments: 0,
    NoncurrentAssets: 784520000,
    EntityRegistrantName: 'RUBY TUESDAY INC',
    IncomeTaxExpenseBenefit: -1203000,
    CostOfRevenue: 0,
    ExchangeGainsLosses: 0,
    CurrentLiabilities: 89391000,
    Assets: 884118000,
    NetCashFlowsDiscontinued: 0,
    LiabilitiesAndEquity: 884118000,
    OperatingIncomeLoss: 38760000,
    TemporaryEquity: 0,
    NonoperatingIncomeLoss: 0,
    OtherOperatingIncome: 0,
    EquityAttributableToParent: 446822000,
    GrossProfit: 0,
    TradingSymbol: 'rt',
    NetCashFlow: -30080000,
    DocumentFiscalYearFocus: '2016',
    IncomeFromDiscontinuedOperations: 0,
    NetCashFlowsInvesting: -16310000,
    ComprehensiveIncome: -19531000,
    Revenues: 540436000,
    CommitmentsAndContingencies: 0,
    OperatingExpenses: 0,
    IncomeStatementPeriodYTD: '2015-06-03',
    Liabilities: 437296000,
    NetCashFlowsFinancingContinuing: -9639000,
    EntityCentralIndexKey: '0000068270',
    EquityAttributableToNoncontrollingInterest: 0,
    ComprehensiveIncomeAttributableToParent: -19531000,
    DocumentFiscalPeriodFocus: 'Q2',
    NetIncomeLoss: -19993000,
    IncomeBeforeEquityMethodInvestments: -21196000,
    NetCashFlowsOperatingDiscontinued: 0,
    BalanceSheetDate: '2015-12-01',
    NetCashFlowsFinancing: -9639000,
    ROA: -0.02261349729334772,
    ExtraordinaryItemsGainLoss: 0,
    IncomeFromContinuingOperationsAfterTax: -19993000,
    NetIncomeAttributableToNoncontrollingInterest: 0,
    InterestAndDebtExpense: 0,
    CurrentFiscalYearEndDate: '--05-31'
  };

  const google10kParsed = {
    CurrentFiscalYearEndDate: '--12-31',
    DocumentFiscalPeriodFocusContext: 'FD2015Q4YTD',
    DocumentFiscalYearFocusContext: 'FD2015Q4YTD',
    DocumentPeriodEndDate: '2015-12-31',
    NetCashFlowsContinuing: -1364000000,
    NetCashFlowsFinancingDiscontinued: 0,
    NetIncomeAvailableToCommonStockholdersBasic: 15826000000,
    NonoperatingIncomeLossPlusInterestAndDebtExpense: 291000000,
    NoncurrentLiabilities: 7820000000,
    IncomeFromContinuingOperationsBeforeTax: 19651000000,
    ContextForInstants: 'FI2015Q4',
    Equity: 120331000000,
    EntityFilerCategory: 'Large Accelerated Filer',
    DocumentType: '10-K',
    ContextForDurations: 'FD2015Q4YTD',
    NetCashFlowsOperatingContinuing: 26024000000,
    OtherComprehensiveIncome: -1901000000,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
    NetCashFlowsInvestingContinuing: -23711000000,
    ROS: 0.21800530744509194,
    NetIncomeAttributableToParent: 16348000000,
    SGR: 0.15721800678957132,
    NetCashFlowsInvestingDiscontinued: 0,
    ROE: 0.13585859005576287,
    PreferredStockDividendsAndOtherAdjustments: 522000000,
    NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: 291000000,
    NetCashFlowsOperating: 26024000000,
    CostsAndExpenses: 55629000000,
    CurrentAssets: 90114000000,
    IncomeFromEquityMethodInvestments: -227000000,
    NoncurrentAssets: 57347000000,
    EntityRegistrantName: 'Alphabet Inc.',
    IncomeTaxExpenseBenefit: 3303000000,
    CostOfRevenue: 28164000000,
    ExchangeGainsLosses: -434000000,
    CurrentLiabilities: 19310000000,
    Assets: 147461000000,
    NetCashFlowsDiscontinued: 0,
    LiabilitiesAndEquity: 147461000000,
    OperatingIncomeLoss: 19360000000,
    TemporaryEquity: 0,
    NonoperatingIncomeLoss: 291000000,
    OtherOperatingIncome: 0,
    EquityAttributableToParent: 120331000000,
    GrossProfit: 46825000000,
    TradingSymbol: 'GOOG, GOOGL',
    NetCashFlow: -1798000000,
    DocumentFiscalYearFocus: '2015',
    IncomeFromDiscontinuedOperations: 0,
    NetCashFlowsInvesting: -23711000000,
    ComprehensiveIncome: 14447000000,
    Revenues: 74989000000,
    CommitmentsAndContingencies: 0,
    OperatingExpenses: 27465000000,
    IncomeStatementPeriodYTD: '2015-01-01',
    Liabilities: 27130000000,
    NetCashFlowsFinancingContinuing: -3677000000,
    EntityCentralIndexKey: '0001652044',
    EquityAttributableToNoncontrollingInterest: 0,
    ComprehensiveIncomeAttributableToParent: 14447000000,
    DocumentFiscalPeriodFocus: 'FY',
    NetIncomeLoss: 16348000000,
    IncomeBeforeEquityMethodInvestments: 19651000000,
    NetCashFlowsOperatingDiscontinued: 0,
    BalanceSheetDate: '2015-12-31',
    NetCashFlowsFinancing: -3677000000,
    ROA: 0.11086321128976476,
    ExtraordinaryItemsGainLoss: 0,
    IncomeFromContinuingOperationsAfterTax: 16348000000,
    NetIncomeAttributableToNoncontrollingInterest: 0,
    InterestAndDebtExpense: 0
  };

  return {
    wlRossHolingCorp10kParsed,
    amazon10kParsed,
    cannabicsPharmaceuticals10kParsed,
    costco10kParsed,
    transatlanticCapital10kParsed,
    sweetsAndTreats10qParsed,
    rubyTuesday10qParsed,
    google10kParsed,
    aapl10Q2020Parsed,
    tsla10Q2020Parsed
  };
}
