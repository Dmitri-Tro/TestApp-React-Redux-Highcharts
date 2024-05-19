import * as Highcharts       from 'highcharts';
import { useEffect }         from 'react';
import { ChartT }            from '../../models/ChartT.ts';
import { useAppSelector }    from '../../store.ts';
import { selectChartsState } from '../chartsSlice/chartsSelectors.ts';

type UseChartOptions = {
  chart: ChartT
  setChartOptions: ( options: Highcharts.Options | null ) => void
}

export const useChartOptions = ( { chart, setChartOptions }: UseChartOptions ) => {
  const chartsState = useAppSelector( selectChartsState );

  useEffect( () => {
    const { chartData, color, type, title } = chart;
    let firstTimeIndex = null;
    let lastTimeIndex = null;
    let chartTimeLine = null;
    let chartValues = null;
    let chartCurrency = null;

    if ( chartData.chart.result ) {
      firstTimeIndex = chartData.chart.result[0].timestamp.findIndex( i => chartsState.chartsFirstDate ? i >= chartsState.chartsFirstDate : i );
      lastTimeIndex = chartData.chart.result[0].timestamp.findIndex( i => chartsState.chartsLastDate ? i > chartsState.chartsLastDate : i );
      chartTimeLine = chartData.chart.result[0].timestamp.slice( firstTimeIndex, lastTimeIndex ).map( ( timestamp: number ) => new Date( timestamp * 1000 ).toLocaleDateString() );

      chartValues = chartData.chart.result[0].indicators.quote[0].close.slice( firstTimeIndex, lastTimeIndex );

      chartCurrency = chartData.chart.result[0].meta.currency;
    }

    if ( chartTimeLine && chartValues ) {
      const options: Highcharts.Options = {
        title: {
          text: title,
        },
        xAxis: {
          categories: chartTimeLine,
        },
        yAxis: {
          title: {
            text: chartCurrency,
          },
        },
        series: [
          {
            name: 'Closing price',
            type: type as never,
            data: chartValues,
            color: color,
          },
        ],
      };
      setChartOptions( options );
    }
  }, [ chart, chartsState.chartsFirstDate, chartsState.chartsLastDate, setChartOptions ] );
};