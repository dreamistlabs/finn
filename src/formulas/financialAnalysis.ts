export interface IFinancialAnalysisFormulas {
  returnOnAssets: (netIncome: number, totalAssets: number) => number;
  returnOnCapitalEmployed: (ebit: number, capitalEmployed: number) => number;
  returnOnEquity: (netIncome: number, bookValueOfEquity: number) => number;
}

/**
 * Calculates a company's return on assets (ROA).
 *
 * Return on assets is a profitability ratio that provides how much profit a company is able to
 * generate from its assets. In other words, return on assets (ROA) measures how efficient a
 * company's management is in generating earnings from their economic resources or assets on their
 * balance sheet.
 * @param netProfits Net income
 * @param totalAssets Total assets
 */
const returnOnAssets = (netIncome: number, totalAssets: number): number => {
  return netIncome / totalAssets;
};

/**
 * Calculates a company's return on capital employed (ROCE).
 *
 * Return on capital employed (ROCE) is a financial ratio that measures a company's profitability
 * and the efficiency with which its capital is used. The ROCE ratio is considered an important
 * profitability ratio and is used often by investors when screening for suitable investment
 * candidates.
 * @param ebit Earnings before interest and tax
 * @param capitalEmployed Total assets minus current liabilities
 */
const returnOnCapitalEmployed = (
  ebit: number,
  capitalEmployed: number
): number => {
  return ebit / capitalEmployed;
};

/**
 * Calculates a company's return on equity (ROE).
 *
 *
 * @param netIncome
 * @param bookValueOfEquity
 */
const returnOnEquity = (
  netIncome: number,
  bookValueOfEquity: number
): number => {
  return netIncome / bookValueOfEquity;
};

const financialAnalysisFormulas: IFinancialAnalysisFormulas = {
  returnOnAssets,
  returnOnCapitalEmployed,
  returnOnEquity,
};

export default financialAnalysisFormulas;
