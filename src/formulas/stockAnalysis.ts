/**
 * Returns a company's PE ratio.
 * @param price The company's stock price.
 * @param eps The company's earnings-per-share.
 */
const priceToEarnings = (price: number, eps: number): number => {
  return price / eps;
};

/**
 * Returns a company's PEG ratio.
 *
 * The PEG ratio is used to determine a stock's value while also factoring in the company's
 * expected earnings growth and is thought to provide a more complete picture than the P/E ratio.
 * @param peRatio The company's price-to-earnings ratio.
 * @param epsGrowth The comapny's earnings-per-share growth rate.
 */
const priceToEarningsGrowth = (peRatio: number, epsGrowth: number): number => {
  return peRatio / epsGrowth;
};

interface StockAnalysisFormulas {
  priceToEarnings: (price: number, eps: number) => number;
  priceToEarningsGrowth: (peRatio: number, epsGrowth: number) => number;
}

const stockAnalysisFormulas: StockAnalysisFormulas = {
  priceToEarnings,
  priceToEarningsGrowth,
};

export default stockAnalysisFormulas;
