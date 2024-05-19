import { FC }              from 'react';
import styles              from './viewPage.module.css';
import { ChartList }       from '../ChartList/ChartList.tsx';
import { DateRangePicker } from '../../components/DateRangePicker/DateRangePicker.tsx';
import { useAppSelector }  from '../../store.ts';
import { selectCharts }    from '../chartsSlice/chartsSelectors.ts';

export const ViewPage: FC = () => {
  const charts = useAppSelector( selectCharts );

  if ( charts.length ) {
    return (
      <div className={ styles.container }>
        <DateRangePicker/>
        <ChartList mode={ 'view' }/>
      </div>
    );
  } else {
    return <h2 className={ styles.title }>You don't have any charts</h2>;
  }
};