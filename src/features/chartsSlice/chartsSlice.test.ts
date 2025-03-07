import { SeriesOptionsType }                        from 'highcharts';
import { beforeEach, describe, it, expect }         from 'vitest';
import { ChartResponse }                            from '../../models/ChartResponse.ts';
import { ChartT }                                   from '../../models/ChartT.ts';
import { chartsReducer, ChartsState, chartsThunks } from './chartsSlice.ts';

let chartData: ChartResponse;
describe( 'Charts Slice', () => {
  beforeEach( () => {
    chartData = {
      chart: {
        result: [
          {
            'meta': {
              'currency': 'USD',
              'symbol': 'AAPL',
              'exchangeName': 'NMS',
              'fullExchangeName': 'NasdaqGS',
              'instrumentType': 'EQUITY',
              'firstTradeDate': 345479400,
              'regularMarketTime': 1715976001,
              'hasPrePostMarketData': true,
              'gmtoffset': -14400,
              'timezone': 'EDT',
              'exchangeTimezoneName': 'America/New_York',
              'regularMarketPrice': 189.87,
              'fiftyTwoWeekHigh': 190.81,
              'fiftyTwoWeekLow': 189.22,
              'regularMarketDayHigh': 190.81,
              'regularMarketDayLow': 189.22,
              'regularMarketVolume': 41282925,
              'chartPreviousClose': 168,
              'priceHint': 2,
              'currentTradingPeriod': {
                'pre': {
                  'timezone': 'EDT',
                  'start': 1715932800,
                  'end': 1715952600,
                  'gmtoffset': -14400
                },
                'regular': {
                  'timezone': 'EDT',
                  'start': 1715952600,
                  'end': 1715976000,
                  'gmtoffset': -14400
                },
                'post': {
                  'timezone': 'EDT',
                  'start': 1715976000,
                  'end': 1715990400,
                  'gmtoffset': -14400
                }
              },
              'dataGranularity': '1d',
              'range': '1mo',
              'validRanges': [
                '1d',
                '5d',
                '1mo',
                '3mo',
                '6mo',
                '1y',
                '2y',
                '5y',
                '10y',
                'ytd',
                'max'
              ]
            },
            'timestamp': [
              1713447000,
              1713533400,
              1713792600,
              1713879000,
              1713965400,
              1714051800,
              1714138200,
              1714397400,
              1714483800,
              1714570200,
              1714656600,
              1714743000,
              1715002200,
              1715088600,
              1715175000,
              1715261400,
              1715347800,
              1715607000,
              1715693400,
              1715779800,
              1715866200,
              1715952600
            ],
            'indicators': {
              'quote': [
                {
                  'low': [
                    166.5500030517578,
                    164.0800018310547,
                    164.77000427246094,
                    164.9199981689453,
                    166.2100067138672,
                    168.14999389648438,
                    169.17999267578125,
                    173.1000061035156,
                    170,
                    169.11000061035156,
                    170.88999938964844,
                    182.66000366210938,
                    180.4199981689453,
                    181.32000732421875,
                    181.4499969482422,
                    182.11000061035156,
                    182.1300048828125,
                    184.6199951171875,
                    186.2899932861328,
                    187.3699951171875,
                    189.66000366210938,
                    189.17999267578125
                  ],
                  'open': [
                    168.02999877929688,
                    166.2100067138672,
                    165.52000427246094,
                    165.3500061035156,
                    166.5399932861328,
                    169.52999877929688,
                    169.8800048828125,
                    173.3699951171875,
                    173.3300018310547,
                    169.5800018310547,
                    172.50999450683594,
                    186.64999389648438,
                    182.3500061035156,
                    183.4499969482422,
                    182.8500061035156,
                    182.55999755859375,
                    184.89999389648438,
                    185.44000244140625,
                    187.50999450683594,
                    187.91000366210938,
                    190.4700012207031,
                    189.50999450683594
                  ],
                  'high': [
                    168.63999938964844,
                    166.39999389648438,
                    167.25999450683594,
                    167.0500030517578,
                    169.3000030517578,
                    170.61000061035156,
                    171.3399963378906,
                    176.02999877929688,
                    174.99000549316406,
                    172.7100067138672,
                    173.4199981689453,
                    187,
                    184.1999969482422,
                    184.89999389648438,
                    183.07000732421875,
                    184.66000366210938,
                    185.0899963378906,
                    187.1000061035156,
                    188.3000030517578,
                    190.64999389648438,
                    191.1000061035156,
                    190.80999755859375
                  ],
                  'volume': [
                    43122900,
                    67772100,
                    48116400,
                    49537800,
                    48251800,
                    50558300,
                    44838400,
                    68169400,
                    65934800,
                    50383100,
                    94214900,
                    163224100,
                    78569700,
                    77305800,
                    45057100,
                    48983000,
                    50759500,
                    72044800,
                    52393600,
                    70400000,
                    52845200,
                    41260800
                  ],
                  'close': [
                    167.0399932861328,
                    165,
                    165.8399963378906,
                    166.89999389648438,
                    169.02000427246094,
                    169.88999938964844,
                    169.3000030517578,
                    173.5,
                    170.3300018310547,
                    169.3000030517578,
                    173.02999877929688,
                    183.3800048828125,
                    181.7100067138672,
                    182.39999389648438,
                    182.74000549316406,
                    184.57000732421875,
                    183.0500030517578,
                    186.27999877929688,
                    187.42999267578125,
                    189.7200012207031,
                    189.8399963378906,
                    189.8699951171875
                  ]
                }
              ],
              'adjclose': [
                {
                  'adjclose': [
                    166.81373596191406,
                    164.77650451660156,
                    165.6153564453125,
                    166.67391967773438,
                    168.7910614013672,
                    169.65988159179688,
                    169.0706787109375,
                    173.26498413085938,
                    170.0992889404297,
                    169.0706787109375,
                    172.79562377929688,
                    183.13160705566406,
                    181.46388244628906,
                    182.15292358398438,
                    182.4924774169922,
                    184.32000732421875,
                    183.0500030517578,
                    186.27999877929688,
                    187.42999267578125,
                    189.7200012207031,
                    189.8399963378906,
                    189.8699951171875
                  ]
                }
              ]
            }
          }
        ],
        error: null
      }
    };
  } );

  it( 'Chart should be added', () => {

    const startState = {
      charts: [] as ChartT[],
      chartsFirstDate: null,
      chartsLastDate: null
    } as ChartsState;

    const endState = chartsReducer(
      startState,
      chartsThunks.setChart.fulfilled( {
                                         chartData: chartData,
                                         id: 'c1f5b180-3c02-45f8-97d4-f35de06712cb',
                                         ticker: 'aapl',
                                         title: 'aapl',
                                         type: 'spline' as unknown as SeriesOptionsType,
                                         color: 'green'
                                       },
                                       'requiredId',
                                       {
                                         ticker: 'aapl',
                                         title: 'aapl',
                                         type: 'spline' as unknown as SeriesOptionsType,
                                         color: 'green'
                                       } ),
    );

    expect( endState.charts.length ).toBe( 1 );
    expect( endState.charts[0].title ).toBe( 'aapl' );
    expect( endState.charts[0].ticker ).toBe( 'aapl' );
    expect( endState.charts[0].id ).toBe( 'c1f5b180-3c02-45f8-97d4-f35de06712cb' );
  } );
} );

