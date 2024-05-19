import { FC, memo }       from 'react';
import styles             from './chartList.module.css';
import { Chart }          from '../Chart/Chart.tsx';
import { useAppSelector } from '../../store.ts';
import { selectCharts }   from '../chartsSlice/chartsSelectors.ts';

type ChartListProps = {
  mode: 'view' | 'edit'
}
export const ChartList: FC<ChartListProps> = memo( ( { mode } ) => {
  const charts = useAppSelector( selectCharts );
  return (
    <ul className={ styles.chartList }>
      { charts && charts.map( chart => <Chart key={ chart.id } mode={ mode } chart={ chart }/> ) }
    </ul>
  );
} );