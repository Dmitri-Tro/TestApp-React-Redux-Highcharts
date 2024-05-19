import { FC, memo, useCallback } from 'react';
import styles                    from '../ChartList/chartList.module.css';
import { ChartArea }             from '../ChartArea/ChartArea.tsx';
import { Button }                from '../../components/Button/Button.tsx';
import { ChartMenu }             from '../ChartMenu/ChartMenu.tsx';
import { ChartT }                from '../../models/ChartT.ts';
import { useAppDispatch }        from '../../store.ts';
import { SeriesOptionsType }     from 'highcharts';
import { chartsActions }         from '../chartsSlice/chartsSlice.ts';

type ChartProps = {
  mode: 'view' | 'edit'
  chart: ChartT
}
export const Chart: FC<ChartProps> = memo( ( { mode, chart } ) => {
  const dispatch = useAppDispatch();

  const updateChartHandler = useCallback( ( title: string, type: SeriesOptionsType, color: string ) => {
    dispatch( chartsActions.updateChart( { id: chart.id, title, type, color } ) );
  }, [ dispatch, chart.id ] );

  const deleteChartHandler = useCallback( () => {
    dispatch( chartsActions.deleteChart( { id: chart.id } ) );
  }, [ dispatch, chart.id ] );

  return (
    <li className={ styles.chart }>
      <div className={ styles.chartArea }>
        <ChartArea chart={ chart }/>
      </div>
      { mode === 'edit' &&
        <div className={ styles.btnsArea }>
            <ChartMenu buttonTitle={ 'Update Chart' }
                       actionType={ 'update' }
                       setChart={ updateChartHandler }
                       chart={ chart }
            />
            <Button onClick={ deleteChartHandler }>Delete chart</Button>
        </div> }
    </li>
  );
} );