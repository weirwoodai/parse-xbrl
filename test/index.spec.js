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
  })
    .timeout(5000)
    .slow(3125);

  it('should parse the xbrl for Tesla 10Q 2020', async () => {
    const result = await parse('./test/sampleXbrlDocuments/xbrls/2020/tsla/xml_0.xml');

    expect(result).to.deep.equal(tsla10Q2020Parsed);
  })
    .timeout(5000)
    .slow(3125);
});

function loadData() {
  const tsla10Q2020Parsed = {
    EntityRegistrantName: 'Tesla, Inc.',
    CurrentFiscalYearEndDate: '--12-31',
    EntityCentralIndexKey: '0001318605',
    EntityFilerCategory: 'Large Accelerated Filer',
    TradingSymbol: 'TSLA',
    DocumentPeriodEndDate: 'June 30, 2020',
    DocumentFiscalYearFocus: '2020',
    DocumentFiscalPeriodFocus: 'Q2',
    DocumentFiscalYearFocusContext: 'C_0001318605_20200101_20200630',
    DocumentFiscalPeriodFocusContext: 'C_0001318605_20200101_20200630',
    DocumentType: '10-Q',
    IncomeStatementPeriodYTD: '2020-01-01',
    ContextForInstants: 'C_0001318605_20200630',
    ContextForDurations: 'C_0001318605_20200101_20200630',
    BalanceSheetDate: 'June 30, 2020',
    Assets: 38135000000,
    CurrentAssets: 15336000000,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: 38135000000,
    Liabilities: 26754000000,
    CurrentLiabilities: 12270000000,
    NoncurrentLiabilities: null,
    CommitmentsAndContingencies: null,
    TemporaryEquity: 44000000,
    Equity: 10724000000,
    EquityAttributableToNoncontrollingInterest: 869000000,
    EquityAttributableToParent: 9855000000,
    Revenues: 6036000000,
    CostOfRevenue: 4769000000,
    GrossProfit: 1267000000,
    OperatingExpenses: 940000000,
    CostsAndExpenses: null,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: 327000000,
    NonoperatingIncomeLoss: null,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: null,
    IncomeFromEquityMethodInvestments: null,
    IncomeFromContinuingOperationsBeforeTax: 150000000,
    IncomeTaxExpenseBenefit: 21000000,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: 129000000,
    NetIncomeAvailableToCommonStockholdersBasic: null,
    PreferredStockDividendsAndOtherAdjustments: null,
    NetIncomeAttributableToNoncontrollingInterest: 25000000,
    NetIncomeAttributableToParent: 104000000,
    OtherComprehensiveIncome: null,
    ComprehensiveIncome: 202000000,
    ComprehensiveIncomeAttributableToParent: 177000000,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: 25000000,
    NetCashFlow: null,
    NetCashFlowsOperating: null,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: null,
    NetCashFlowsOperatingContinuing: null,
    NetCashFlowsInvestingContinuing: null,
    NetCashFlowsFinancingContinuing: null,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: null
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
    CommitmentsAndContingencies: null,
    TemporaryEquity: null,
    Equity: 72282000000,
    EquityAttributableToNoncontrollingInterest: null,
    EquityAttributableToParent: 72282000000,
    Revenues: null,
    CostOfRevenue: 37005000000,
    GrossProfit: 22680000000,
    OperatingExpenses: 9589000000,
    CostsAndExpenses: null,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: 13091000000,
    NonoperatingIncomeLoss: 46000000,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: null,
    IncomeFromEquityMethodInvestments: null,
    IncomeFromContinuingOperationsBeforeTax: 13137000000,
    IncomeTaxExpenseBenefit: 1884000000,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: 11253000000,
    NetIncomeAvailableToCommonStockholdersBasic: null,
    PreferredStockDividendsAndOtherAdjustments: null,
    NetIncomeAttributableToNoncontrollingInterest: null,
    NetIncomeAttributableToParent: 11253000000,
    OtherComprehensiveIncome: null,
    ComprehensiveIncome: 13492000000,
    ComprehensiveIncomeAttributableToParent: 13492000000,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: null,
    NetCashFlow: null,
    NetCashFlowsOperating: null,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: null,
    NetCashFlowsOperatingContinuing: null,
    NetCashFlowsInvestingContinuing: null,
    NetCashFlowsFinancingContinuing: null,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: null
  };

  const wlRossHolingCorp10kParsed = {
    EntityRegistrantName: 'WL Ross Holding Corp.',
    CurrentFiscalYearEndDate: '--12-31',
    EntityCentralIndexKey: '0001604416',
    EntityFilerCategory: 'Accelerated Filer',
    TradingSymbol: 'WLRH',
    DocumentPeriodEndDate: '2015-12-31',
    DocumentFiscalYearFocus: '2015',
    DocumentFiscalPeriodFocus: 'FY',
    DocumentFiscalYearFocusContext: 'P01_01_2015To12_31_2015',
    DocumentFiscalPeriodFocusContext: 'P01_01_2015To12_31_2015',
    DocumentType: '10-K',
    IncomeStatementPeriodYTD: '2015-01-01',
    ContextForInstants: 'PAsOn12_31_2015',
    ContextForDurations: 'P01_01_2015To12_31_2015',
    BalanceSheetDate: '2015-12-31',
    Assets: 500706451,
    CurrentAssets: 58654,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: 500706451,
    Liabilities: 19074899,
    CurrentLiabilities: 765749,
    NoncurrentLiabilities: null,
    CommitmentsAndContingencies: null,
    TemporaryEquity: 476631550,
    Equity: 5000002,
    EquityAttributableToNoncontrollingInterest: null,
    EquityAttributableToParent: 5000002,
    Revenues: null,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: null,
    CostsAndExpenses: null,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: -776412,
    NonoperatingIncomeLoss: null,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: null,
    IncomeFromEquityMethodInvestments: null,
    IncomeFromContinuingOperationsBeforeTax: null,
    IncomeTaxExpenseBenefit: null,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: 332612,
    NetIncomeAvailableToCommonStockholdersBasic: -332612,
    PreferredStockDividendsAndOtherAdjustments: null,
    NetIncomeAttributableToNoncontrollingInterest: null,
    NetIncomeAttributableToParent: 332612,
    OtherComprehensiveIncome: null,
    ComprehensiveIncome: null,
    ComprehensiveIncomeAttributableToParent: null,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: null,
    NetCashFlow: -791415,
    NetCashFlowsOperating: null,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: null,
    NetCashFlowsOperatingContinuing: -1203064,
    NetCashFlowsInvestingContinuing: 111649,
    NetCashFlowsFinancingContinuing: 300000,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: null
  };

  const amazon10kParsed = {
    EntityRegistrantName: 'AMAZON COM INC',
    CurrentFiscalYearEndDate: '--12-31',
    EntityCentralIndexKey: '0001018724',
    EntityFilerCategory: 'Large Accelerated Filer',
    TradingSymbol: 'AMZN',
    DocumentPeriodEndDate: '2015-12-31',
    DocumentFiscalYearFocus: '2015',
    DocumentFiscalPeriodFocus: 'FY',
    DocumentFiscalYearFocusContext: 'FD2015Q4YTD',
    DocumentFiscalPeriodFocusContext: 'FD2015Q4YTD',
    DocumentType: '10-K',
    IncomeStatementPeriodYTD: '2015-01-01',
    ContextForInstants: 'FI2015Q4',
    ContextForDurations: 'FD2015Q4YTD',
    BalanceSheetDate: '2015-12-31',
    Assets: 65444000000,
    CurrentAssets: 36474000000,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: 65444000000,
    Liabilities: null,
    CurrentLiabilities: 33899000000,
    NoncurrentLiabilities: null,
    CommitmentsAndContingencies: null,
    TemporaryEquity: null,
    Equity: 13384000000,
    EquityAttributableToNoncontrollingInterest: null,
    EquityAttributableToParent: 13384000000,
    Revenues: 107006000000,
    CostOfRevenue: 71651000000,
    GrossProfit: null,
    OperatingExpenses: null,
    CostsAndExpenses: 104773000000,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: 2233000000,
    NonoperatingIncomeLoss: -665000000,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: 1568000000,
    IncomeFromEquityMethodInvestments: -22000000,
    IncomeFromContinuingOperationsBeforeTax: 1568000000,
    IncomeTaxExpenseBenefit: 950000000,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: 596000000,
    NetIncomeAvailableToCommonStockholdersBasic: null,
    PreferredStockDividendsAndOtherAdjustments: null,
    NetIncomeAttributableToNoncontrollingInterest: null,
    NetIncomeAttributableToParent: 596000000,
    OtherComprehensiveIncome: -212000000,
    ComprehensiveIncome: 384000000,
    ComprehensiveIncomeAttributableToParent: 384000000,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: null,
    NetCashFlow: 1333000000,
    NetCashFlowsOperating: 11920000000,
    NetCashFlowsInvesting: -6450000000,
    NetCashFlowsFinancing: -3763000000,
    NetCashFlowsOperatingContinuing: null,
    NetCashFlowsInvestingContinuing: null,
    NetCashFlowsFinancingContinuing: null,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: -374000000
  };

  const cannabicsPharmaceuticals10kParsed = {
    EntityRegistrantName: 'Cannabics Pharmaceuticals Inc.',
    CurrentFiscalYearEndDate: '--08-31',
    EntityCentralIndexKey: '0001343009',
    EntityFilerCategory: 'Smaller Reporting Company',
    TradingSymbol: 'Field not found',
    DocumentPeriodEndDate: '2015-08-31',
    DocumentFiscalYearFocus: '2015',
    DocumentFiscalPeriodFocus: 'FY',
    DocumentFiscalYearFocusContext: 'From2014-09-01to2015-08-31',
    DocumentFiscalPeriodFocusContext: 'From2014-09-01to2015-08-31',
    DocumentType: '10-K',
    IncomeStatementPeriodYTD: '2004-09-15',
    ContextForInstants: 'AsOf2015-08-31',
    ContextForDurations: 'From2004-09-15to2015-08-31',
    BalanceSheetDate: '2015-08-31',
    Assets: 28704,
    CurrentAssets: 25503,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: 28704,
    Liabilities: 338330,
    CurrentLiabilities: 338330,
    NoncurrentLiabilities: null,
    CommitmentsAndContingencies: null,
    TemporaryEquity: null,
    Equity: -309626,
    EquityAttributableToNoncontrollingInterest: null,
    EquityAttributableToParent: -309626,
    Revenues: null,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: 539526,
    CostsAndExpenses: null,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: -539526,
    NonoperatingIncomeLoss: null,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: null,
    IncomeFromEquityMethodInvestments: null,
    IncomeFromContinuingOperationsBeforeTax: -541387,
    IncomeTaxExpenseBenefit: null,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: -541387,
    NetIncomeAvailableToCommonStockholdersBasic: null,
    PreferredStockDividendsAndOtherAdjustments: null,
    NetIncomeAttributableToNoncontrollingInterest: null,
    NetIncomeAttributableToParent: -541387,
    OtherComprehensiveIncome: null,
    ComprehensiveIncome: null,
    ComprehensiveIncomeAttributableToParent: null,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: null,
    NetCashFlow: -73539,
    NetCashFlowsOperating: null,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: null,
    NetCashFlowsOperatingContinuing: -179055,
    NetCashFlowsInvestingContinuing: -3040,
    NetCashFlowsFinancingContinuing: 108556,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: null
  };

  const costco10kParsed = {
    EntityRegistrantName: 'COSTO INC.',
    CurrentFiscalYearEndDate: '--11-30',
    EntityCentralIndexKey: '0001621199',
    EntityFilerCategory: 'Smaller Reporting Company',
    TradingSymbol: 'csst',
    DocumentPeriodEndDate: '2015-11-30',
    DocumentFiscalYearFocus: '2015',
    DocumentFiscalPeriodFocus: 'FY',
    DocumentFiscalYearFocusContext: 'D141201_151130',
    DocumentFiscalPeriodFocusContext: 'D141201_151130',
    DocumentType: '10-K',
    IncomeStatementPeriodYTD: '2014-12-01',
    ContextForInstants: 'I151130',
    ContextForDurations: 'D141201_151130',
    BalanceSheetDate: '2015-11-30',
    Assets: 13641,
    CurrentAssets: null,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: 13641,
    Liabilities: 3477,
    CurrentLiabilities: null,
    NoncurrentLiabilities: null,
    CommitmentsAndContingencies: null,
    TemporaryEquity: null,
    Equity: 10164,
    EquityAttributableToNoncontrollingInterest: null,
    EquityAttributableToParent: 10164,
    Revenues: null,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: 23719,
    CostsAndExpenses: null,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: -23719,
    NonoperatingIncomeLoss: null,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: null,
    IncomeFromEquityMethodInvestments: null,
    IncomeFromContinuingOperationsBeforeTax: null,
    IncomeTaxExpenseBenefit: null,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: -23719,
    NetIncomeAvailableToCommonStockholdersBasic: null,
    PreferredStockDividendsAndOtherAdjustments: null,
    NetIncomeAttributableToNoncontrollingInterest: null,
    NetIncomeAttributableToParent: -23719,
    OtherComprehensiveIncome: null,
    ComprehensiveIncome: null,
    ComprehensiveIncomeAttributableToParent: null,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: null,
    NetCashFlow: 7001,
    NetCashFlowsOperating: -22999,
    NetCashFlowsInvesting: 0,
    NetCashFlowsFinancing: 30000,
    NetCashFlowsOperatingContinuing: null,
    NetCashFlowsInvestingContinuing: null,
    NetCashFlowsFinancingContinuing: null,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: null
  };

  const transatlanticCapital10kParsed = {
    EntityRegistrantName: 'TRANSATLANTIC CAPITAL INC.',
    CurrentFiscalYearEndDate: '--12-31',
    EntityCentralIndexKey: '0001228386',
    EntityFilerCategory: 'Smaller Reporting Company',
    TradingSymbol: 'Field not found',
    DocumentPeriodEndDate: '2014-12-31',
    DocumentFiscalYearFocus: '2014',
    DocumentFiscalPeriodFocus: 'FY',
    DocumentFiscalYearFocusContext: 'From2014-01-01to2014-12-31',
    DocumentFiscalPeriodFocusContext: 'From2014-01-01to2014-12-31',
    DocumentType: '10-K',
    IncomeStatementPeriodYTD: '2014-01-01',
    ContextForInstants: 'AsOf2014-12-31',
    ContextForDurations: 'From2014-01-01to2014-12-31',
    BalanceSheetDate: '2014-12-31',
    Assets: 0,
    CurrentAssets: null,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: null,
    Liabilities: 144968,
    CurrentLiabilities: 144968,
    NoncurrentLiabilities: null,
    CommitmentsAndContingencies: null,
    TemporaryEquity: null,
    Equity: -144968,
    EquityAttributableToNoncontrollingInterest: null,
    EquityAttributableToParent: -144968,
    Revenues: null,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: 179759,
    CostsAndExpenses: null,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: -179759,
    NonoperatingIncomeLoss: null,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: null,
    IncomeFromEquityMethodInvestments: null,
    IncomeFromContinuingOperationsBeforeTax: null,
    IncomeTaxExpenseBenefit: null,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: -312535,
    NetIncomeAvailableToCommonStockholdersBasic: null,
    PreferredStockDividendsAndOtherAdjustments: null,
    NetIncomeAttributableToNoncontrollingInterest: null,
    NetIncomeAttributableToParent: -312535,
    OtherComprehensiveIncome: null,
    ComprehensiveIncome: null,
    ComprehensiveIncomeAttributableToParent: null,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: null,
    NetCashFlow: null,
    NetCashFlowsOperating: -69155,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: 69155,
    NetCashFlowsOperatingContinuing: null,
    NetCashFlowsInvestingContinuing: null,
    NetCashFlowsFinancingContinuing: null,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: null
  };

  const sweetsAndTreats10qParsed = {
    EntityRegistrantName: 'SWEETS & TREATS INC.',
    CurrentFiscalYearEndDate: '--07-31',
    EntityCentralIndexKey: '0001624982',
    EntityFilerCategory: 'Smaller Reporting Company',
    TradingSymbol: 'Field not found',
    DocumentPeriodEndDate: '2015-10-31',
    DocumentFiscalYearFocus: '2016',
    DocumentFiscalPeriodFocus: 'Q1',
    DocumentFiscalYearFocusContext: 'From2015-08-01to2015-10-31',
    DocumentFiscalPeriodFocusContext: 'From2015-08-01to2015-10-31',
    DocumentType: '10-Q',
    IncomeStatementPeriodYTD: '2015-08-01',
    ContextForInstants: 'AsOf2015-10-31',
    ContextForDurations: 'From2015-08-01to2015-10-31',
    BalanceSheetDate: '2015-10-31',
    Assets: 5806,
    CurrentAssets: 5806,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: 5806,
    Liabilities: 40315,
    CurrentLiabilities: 40315,
    NoncurrentLiabilities: null,
    CommitmentsAndContingencies: null,
    TemporaryEquity: null,
    Equity: -34509,
    EquityAttributableToNoncontrollingInterest: null,
    EquityAttributableToParent: -34509,
    Revenues: 153,
    CostOfRevenue: 99,
    GrossProfit: 54,
    OperatingExpenses: 2119,
    CostsAndExpenses: null,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: null,
    NonoperatingIncomeLoss: null,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: -2065,
    IncomeFromEquityMethodInvestments: null,
    IncomeFromContinuingOperationsBeforeTax: -2065,
    IncomeTaxExpenseBenefit: null,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: -2065,
    NetIncomeAvailableToCommonStockholdersBasic: null,
    PreferredStockDividendsAndOtherAdjustments: null,
    NetIncomeAttributableToNoncontrollingInterest: null,
    NetIncomeAttributableToParent: -2065,
    OtherComprehensiveIncome: null,
    ComprehensiveIncome: null,
    ComprehensiveIncomeAttributableToParent: null,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: null,
    NetCashFlow: -47,
    NetCashFlowsOperating: -18706,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: 18659,
    NetCashFlowsOperatingContinuing: null,
    NetCashFlowsInvestingContinuing: null,
    NetCashFlowsFinancingContinuing: null,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: null
  };

  const rubyTuesday10qParsed = {
    EntityRegistrantName: 'RUBY TUESDAY INC',
    CurrentFiscalYearEndDate: '--05-31',
    EntityCentralIndexKey: '0000068270',
    EntityFilerCategory: 'Accelerated Filer',
    TradingSymbol: 'rt',
    DocumentPeriodEndDate: '2015-12-01',
    DocumentFiscalYearFocus: '2016',
    DocumentFiscalPeriodFocus: 'Q2',
    DocumentFiscalYearFocusContext: 'd_2015-06-03_2015-12-01',
    DocumentFiscalPeriodFocusContext: 'd_2015-06-03_2015-12-01',
    DocumentType: '10-Q',
    IncomeStatementPeriodYTD: '2015-06-03',
    ContextForInstants: 'i_2015-12-01',
    ContextForDurations: 'd_2015-06-03_2015-12-01',
    BalanceSheetDate: '2015-12-01',
    Assets: 884118000,
    CurrentAssets: 99598000,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: 884118000,
    Liabilities: 437296000,
    CurrentLiabilities: 89391000,
    NoncurrentLiabilities: null,
    CommitmentsAndContingencies: null,
    TemporaryEquity: null,
    Equity: 446822000,
    EquityAttributableToNoncontrollingInterest: null,
    EquityAttributableToParent: 446822000,
    Revenues: 260956000,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: null,
    CostsAndExpenses: 276935000,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: 13223000,
    NonoperatingIncomeLoss: null,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: null,
    IncomeFromEquityMethodInvestments: null,
    IncomeFromContinuingOperationsBeforeTax: -15979000,
    IncomeTaxExpenseBenefit: -180000,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: -15799000,
    NetIncomeAvailableToCommonStockholdersBasic: null,
    PreferredStockDividendsAndOtherAdjustments: null,
    NetIncomeAttributableToNoncontrollingInterest: null,
    NetIncomeAttributableToParent: -15799000,
    OtherComprehensiveIncome: null,
    ComprehensiveIncome: -15293000,
    ComprehensiveIncomeAttributableToParent: -15293000,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: null,
    NetCashFlow: null,
    NetCashFlowsOperating: null,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: null,
    NetCashFlowsOperatingContinuing: null,
    NetCashFlowsInvestingContinuing: null,
    NetCashFlowsFinancingContinuing: null,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: null
  };

  const google10kParsed = {
    EntityRegistrantName: 'Alphabet Inc.',
    CurrentFiscalYearEndDate: '--12-31',
    EntityCentralIndexKey: '0001652044',
    EntityFilerCategory: 'Large Accelerated Filer',
    TradingSymbol: 'GOOG, GOOGL',
    DocumentPeriodEndDate: '2015-12-31',
    DocumentFiscalYearFocus: '2015',
    DocumentFiscalPeriodFocus: 'FY',
    DocumentFiscalYearFocusContext: 'FD2015Q4YTD',
    DocumentFiscalPeriodFocusContext: 'FD2015Q4YTD',
    DocumentType: '10-K',
    IncomeStatementPeriodYTD: '2015-01-01',
    ContextForInstants: 'FI2015Q4',
    ContextForDurations: 'FD2015Q4YTD',
    BalanceSheetDate: '2015-12-31',
    Assets: 147461000000,
    CurrentAssets: 90114000000,
    NoncurrentAssets: 57347000000,
    LiabilitiesAndEquity: 147461000000,
    Liabilities: null,
    CurrentLiabilities: 19310000000,
    NoncurrentLiabilities: null,
    CommitmentsAndContingencies: null,
    TemporaryEquity: null,
    Equity: 120331000000,
    EquityAttributableToNoncontrollingInterest: null,
    EquityAttributableToParent: 120331000000,
    Revenues: 74989000000,
    CostOfRevenue: 28164000000,
    GrossProfit: null,
    OperatingExpenses: null,
    CostsAndExpenses: 55629000000,
    OtherOperatingIncome: null,
    OperatingIncomeLoss: 19360000000,
    NonoperatingIncomeLoss: 291000000,
    InterestAndDebtExpense: null,
    IncomeBeforeEquityMethodInvestments: 19651000000,
    IncomeFromEquityMethodInvestments: -227000000,
    IncomeFromContinuingOperationsBeforeTax: 19651000000,
    IncomeTaxExpenseBenefit: 3303000000,
    IncomeFromContinuingOperationsAfterTax: null,
    IncomeFromDiscontinuedOperations: null,
    ExtraordinaryItemsGainLoss: null,
    NetIncomeLoss: 16348000000,
    NetIncomeAvailableToCommonStockholdersBasic: 15826000000,
    PreferredStockDividendsAndOtherAdjustments: 522000000,
    NetIncomeAttributableToNoncontrollingInterest: null,
    NetIncomeAttributableToParent: 16348000000,
    OtherComprehensiveIncome: -1901000000,
    ComprehensiveIncome: 14447000000,
    ComprehensiveIncomeAttributableToParent: 14447000000,
    ComprehensiveIncomeAttributableToNoncontrollingInterest: null,
    NetCashFlow: -1798000000,
    NetCashFlowsOperating: 26024000000,
    NetCashFlowsInvesting: -23711000000,
    NetCashFlowsFinancing: -3677000000,
    NetCashFlowsOperatingContinuing: null,
    NetCashFlowsInvestingContinuing: null,
    NetCashFlowsFinancingContinuing: null,
    NetCashFlowsOperatingDiscontinued: null,
    NetCashFlowsInvestingDiscontinued: null,
    NetCashFlowsFinancingDiscontinued: null,
    NetCashFlowsDiscontinued: null,
    ExchangeGainsLosses: -434000000
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
