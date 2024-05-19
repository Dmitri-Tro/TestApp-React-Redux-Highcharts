import { Grid }                           from '@mui/material';
import { DatePicker }                     from '@mui/x-date-pickers';
import dayjs, { Dayjs }                   from 'dayjs';
import { FC }                             from 'react';
import { selectChartsState }              from '../../features/chartsSlice/chartsSelectors.ts';
import { chartsActions }                  from '../../features/chartsSlice/chartsSlice.ts';
import { useAppDispatch, useAppSelector } from '../../store.ts';

export const DateRangePicker: FC = () => {
  const dispatch = useAppDispatch();
  const chartsState = useAppSelector( selectChartsState );
  const startDate = chartsState.chartsFirstDate ? dayjs.unix( chartsState.chartsFirstDate ) : null;
  const endDate = chartsState.chartsLastDate ? dayjs.unix( chartsState.chartsLastDate ) : dayjs.unix( new Date().getTime() );

  const startDateError = ( date: Dayjs ) => {
    return date >= endDate;
  };
  const endDateError = ( date: Dayjs ): boolean => {
    return date <= startDate!;
  };
  const handleStartDateChange = ( date: Dayjs | null ) => {
    if ( date ) {
      dispatch( chartsActions.filterChartsDate( { firstDate: date.toDate().getTime() / 1000 } ) );
    }
  };
  const handleEndDateChange = ( date: Dayjs | null ) => {
    if ( date ) {
      dispatch( chartsActions.filterChartsDate( { lastDate: date.toDate().getTime() / 1000 } ) );
    }
  };

  return (
    <>
      <Grid container spacing={ 2 } justifyContent="center" component={ 'div' }>
        <Grid item>
          <DatePicker
            label="Start Date"
            value={ startDate }
            onChange={ handleStartDateChange }
            format="DD.MM.YYYY"
            disableFuture
            shouldDisableDate={ startDateError }
          />
        </Grid>
        <Grid item>
          <DatePicker
            label="End Date"
            value={ endDate }
            onChange={ handleEndDateChange }
            format="DD.MM.YYYY"
            disableFuture
            shouldDisableDate={ endDateError }
          />
        </Grid>
      </Grid>
    </>
  );
};