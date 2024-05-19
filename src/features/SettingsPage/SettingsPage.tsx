import { SeriesOptionsType } from 'highcharts';
import { FC, useCallback }   from 'react';
import { useAppDispatch }    from '../../store.ts';
import { ChartList }         from '../ChartList/ChartList.tsx';
import { ChartMenu }         from '../ChartMenu/ChartMenu.tsx';
import { chartsThunks }      from '../chartsSlice/chartsSlice.ts';
import styles                from '../SettingsPage/settingsPage.module.css';

export const SettingsPage: FC = () => {
  const dispatch = useAppDispatch();
  const setChart = useCallback( ( title: string, type: SeriesOptionsType, color: string, ticker?: string ) => {
    if ( ticker ) {
      dispatch( chartsThunks.setChart( { ticker, title, type, color } ) );
    }
  }, [ dispatch ] );
  return (
    <div className={ styles.container }>
      <ChartMenu actionType={ 'create' } buttonTitle={ 'Add new chart' } setChart={ setChart }/>
      <ChartList mode={ 'edit' }/>
    </div>
  );
};