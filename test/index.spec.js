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
  tsla10Q2020Parsed,
  bac10K2020Parsed
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

  it('should parse the xbrl for Bank of America 10K 2020', async () => {
    const result = await parse('./test/sampleXbrlDocuments/xbrls/2020/bac/xml_0.xml');
    expect(result).to.deep.equal(bac10K2020Parsed);
  })
    .timeout(500000)
    .slow(3125);
});

function loadData() {
  const bac10K2020Parsed = {
    EntityRegistrantName: 'Bank of America Corporation',
    CurrentFiscalYearEndDate: '--12-31',
    EntityCentralIndexKey: '0000070858',
    EntityFilerCategory: 'Large Accelerated Filer',
    TradingSymbol: 'BAC',
    DocumentPeriodEndDate: '2019-12-31',
    DocumentFiscalYearFocus: '2019',
    DocumentFiscalPeriodFocus: 'FY',
    DocumentFiscalYearFocusContext: 'FD2019Q4YTD',
    DocumentFiscalPeriodFocusContext: 'FD2019Q4YTD',
    DocumentType: '10-K',
    IncomeStatementPeriodYTD: '2019-01-01',
    ContextForInstants: 'FI2019Q4',
    ContextForDurations: 'FD2019Q4YTD',
    BalanceSheetDate: '2019-12-31',
    Assets: 2434079000000,
    CurrentAssets: null,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: 2434079000000,
    Liabilities: 2169269000000,
    CurrentLiabilities: null,
    NoncurrentLiabilities: null,
    Equity: 264810000000,
    Revenues: 91244000000,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: 7991000000,
    NetIncome: 27430000000,
    NetCashFlow: null,
    NetCashFlowsOperating: 61777000000,
    NetCashFlowsInvesting: -80630000000,
    NetCashFlowsFinancing: 3377000000
  };
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
    Equity: 10724000000,
    Revenues: 6036000000,
    CostOfRevenue: 4769000000,
    GrossProfit: 1267000000,
    OperatingExpenses: 940000000,
    NetIncome: 129000000,
    NetCashFlow: null,
    NetCashFlowsOperating: null,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: null
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
    Equity: 72282000000,
    Revenues: 59685000000,
    CostOfRevenue: 37005000000,
    GrossProfit: 22680000000,
    OperatingExpenses: 9589000000,
    NetIncome: 11253000000,
    NetCashFlow: 39789000000,
    NetCashFlowsOperating: 20576000000,
    NetCashFlowsInvesting: 5531000000,
    NetCashFlowsFinancing: -21357000000
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
    Equity: 5000002,
    Revenues: null,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: null,
    NetIncome: 332612,
    NetCashFlow: -791415,
    NetCashFlowsOperating: null,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: null
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
    Equity: 13384000000,
    Revenues: 107006000000,
    CostOfRevenue: 71651000000,
    GrossProfit: null,
    OperatingExpenses: null,
    NetIncome: 596000000,
    NetCashFlow: 1333000000,
    NetCashFlowsOperating: 11920000000,
    NetCashFlowsInvesting: -6450000000,
    NetCashFlowsFinancing: -3763000000
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
    IncomeStatementPeriodYTD: '2014-09-01',
    ContextForInstants: 'AsOf2015-08-31',
    ContextForDurations: 'From2014-09-01to2015-08-31',
    BalanceSheetDate: '2015-08-31',
    Assets: 28704,
    CurrentAssets: 25503,
    NoncurrentAssets: null,
    LiabilitiesAndEquity: 28704,
    Liabilities: 338330,
    CurrentLiabilities: 338330,
    NoncurrentLiabilities: null,
    Equity: -309626,
    Revenues: null,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: 539526,
    NetIncome: -541387,
    NetCashFlow: -73539,
    NetCashFlowsOperating: null,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: null
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
    Equity: 10164,
    Revenues: null,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: 23719,
    NetIncome: -23719,
    NetCashFlow: 7001,
    NetCashFlowsOperating: -22999,
    NetCashFlowsInvesting: 0,
    NetCashFlowsFinancing: 30000
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
    Equity: -144968,
    Revenues: null,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: 179759,
    NetIncome: -312535,
    NetCashFlow: null,
    NetCashFlowsOperating: -69155,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: 69155
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
    Equity: -34509,
    Revenues: 153,
    CostOfRevenue: 99,
    GrossProfit: 54,
    OperatingExpenses: 2119,
    NetIncome: -2065,
    NetCashFlow: -47,
    NetCashFlowsOperating: -18706,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: 18659
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
    Equity: 446822000,
    Revenues: 260956000,
    CostOfRevenue: null,
    GrossProfit: null,
    OperatingExpenses: null,
    NetIncome: -15799000,
    NetCashFlow: null,
    NetCashFlowsOperating: null,
    NetCashFlowsInvesting: null,
    NetCashFlowsFinancing: null
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
    Equity: 120331000000,
    Revenues: 74989000000,
    CostOfRevenue: 28164000000,
    GrossProfit: null,
    OperatingExpenses: null,
    NetIncome: 16348000000,
    NetCashFlow: -1798000000,
    NetCashFlowsOperating: 26024000000,
    NetCashFlowsInvesting: -23711000000,
    NetCashFlowsFinancing: -3677000000
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
    tsla10Q2020Parsed,
    bac10K2020Parsed
  };
}
