import { ChartResponse }     from './ChartResponse.ts';
import { SeriesOptionsType } from 'highcharts';

export type ChartT = {
  id: string
  ticker: string
  title: string
  type: SeriesOptionsType
  color: string
  chartData: ChartResponse
}