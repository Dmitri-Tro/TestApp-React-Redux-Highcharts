import { CircularProgress }                      from '@mui/material';
import * as Highcharts                           from 'highcharts';
import HighchartsReact                           from 'highcharts-react-official';
import accessibility                             from 'highcharts/modules/accessibility';
import { FC, memo, useEffect, useRef, useState } from 'react';
import { ChartT }                                from '../../models/ChartT.ts';
import { useChartOptions }                       from './useChartOptions.ts';

type ChartAreaProps = {
  chart: ChartT
}
export const ChartArea: FC<ChartAreaProps> = memo( ( { chart } ) => {
  const chartRef = useRef( null );
  const [ chartOptions, setChartOptions ] = useState<Highcharts.Options | null>( null );
  useChartOptions( { chart, setChartOptions } );

  useEffect( () => {
    accessibility( Highcharts );
  }, [] );

  if ( chartOptions ) {
    return <HighchartsReact highcharts={ Highcharts } options={ chartOptions } ref={ chartRef }/>;
  } else {
    return <CircularProgress/>;
  }
} );