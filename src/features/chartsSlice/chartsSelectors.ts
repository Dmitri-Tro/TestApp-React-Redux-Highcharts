import { AppRootState } from '../../store.ts';

export const selectChartsState = ( state: AppRootState ) => state.charts;
export const selectCharts = ( state: AppRootState ) => state.charts.charts;