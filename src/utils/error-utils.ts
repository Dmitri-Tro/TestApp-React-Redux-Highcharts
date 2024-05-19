import axios             from 'axios';
import { ChartResponse } from '../models/ChartResponse.ts';
import { Dispatch }      from '@reduxjs/toolkit';
import { appActions }    from '../app/appSlice.ts';
import { AppDispatch }   from '../store.ts';

export const handleServerAppError = (
  data: ChartResponse,
  dispatch: Dispatch,
  isShowGlobalError: boolean = true,
) => {
  if ( isShowGlobalError ) {
    if ( data.chart.error && data.chart.error.message.length ) {
      dispatch( appActions.setAppError( { error: data.chart.error.message } ) );
    } else {
      dispatch( appActions.setAppError( { error: 'Some error occurred' } ) );
    }
  }
  dispatch( appActions.setAppStatus( { status: 'failed' } ) );
};

export const handleServerNetworkError = ( err: unknown, dispatch: AppDispatch ): void => {
  let errorMessage = 'Some error occurred';
  // Проверка на наличие axios ошибки
  if ( axios.isAxiosError( err ) ) {
    errorMessage = err.response?.data?.message || err?.message || errorMessage;
    // Проверка на наличие нативной ошибки
  } else if ( err instanceof Error ) {
    errorMessage = `Native error: ${ err.message }`;
    // Какой-то непонятный кейс
  } else {
    errorMessage = JSON.stringify( err );
  }

  dispatch( appActions.setAppError( { error: errorMessage } ) );
  dispatch( appActions.setAppStatus( { status: 'failed' } ) );
};
