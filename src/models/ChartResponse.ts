export type ChartResponse = {
  chart: {
    result: ChartResult[] | null
    error: Error | null
  }
}

type ChartResult = {
  meta: ChartResultMeta
  timestamp: number[]
  indicators: {
    quote: ChartResultIndicatorsQuote[];
    adjclose: { adjclose: number[] }[];
  }
}

type ChartResultMeta = {
  currency: string;
  symbol: string;
  exchangeName: string;
  fullExchangeName: string;
  instrumentType: string;
  firstTradeDate: number;
  regularMarketTime: number;
  hasPrePostMarketData: boolean;
  gmtoffset: number;
  timezone: string;
  exchangeTimezoneName: string;
  regularMarketPrice: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  chartPreviousClose: number;
  priceHint: number;
  currentTradingPeriod: {
    pre: {
      timezone: string;
      start: number;
      end: number;
      gmtoffset: number;
    };
    regular: {
      timezone: string;
      start: number;
      end: number;
      gmtoffset: number;
    };
    post: {
      timezone: string;
      start: number;
      end: number;
      gmtoffset: number;
    };
  };
  dataGranularity: string;
  range: string;
  validRanges: string[];
}

type ChartResultIndicatorsQuote = {
  low: number[];
  volume: number[];
  high: number[];
  close: number[];
  open: number[];
}

type Error = {
  message: string,
  hint: string
}