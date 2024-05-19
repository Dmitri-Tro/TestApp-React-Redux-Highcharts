import { createSlice, PayloadAction }                     from '@reduxjs/toolkit';
import { ChartT }                                         from '../../models/ChartT.ts';
import { createAppAsyncThunk }                            from '../../utils/createAppAsyncThunk.ts';
import { appActions }                                     from '../../app/appSlice.ts';
import { chartsApi }                                      from '../../api/api.ts';
import { v4 }                                             from 'uuid';
import { handleServerAppError, handleServerNetworkError } from '../../utils/error-utils.ts';
import { SeriesOptionsType }                              from 'highcharts';

const slice = createSlice({
  name: 'charts',
  initialState: {
    charts: [] as ChartT[],
    chartsFirstDate: null,
    chartsLastDate: null
  } as ChartsState,
  reducers: {
    updateChart: (state, action: PayloadAction<{
      id: string,
      title: string,
      type: SeriesOptionsType,
      color: string
    }>) => {
      const chartIndex = state.charts.findIndex( ( chart ) => chart.id === action.payload.id );
      if ( chartIndex !== -1 ) {
        state.charts[chartIndex].title = action.payload.title;
        state.charts[chartIndex].type = action.payload.type;
        state.charts[chartIndex].color = action.payload.color;
      }
    },
    deleteChart: ( state, action: PayloadAction<{ id: string }> ) => {
      state.charts = state.charts.filter( chart => chart.id !== action.payload.id )
    },
    filterChartsDate: ( state, action: PayloadAction<{firstDate?: number, lastDate?: number}> ) => {
      state.chartsFirstDate = action.payload.firstDate ? action.payload.firstDate : state.chartsFirstDate;
      state.chartsLastDate = action.payload.lastDate ? action.payload.lastDate : state.chartsLastDate;
    }
  },
  extraReducers: ( builder ) => {
    builder.addCase( setChart.fulfilled, ( state, action  ) => {
      state.charts.unshift({ ...action.payload } );
      const newChartTimestamp = action.payload.chartData.chart.result && action.payload.chartData.chart.result[0].timestamp;
      if ( newChartTimestamp ) {
        state.chartsFirstDate = [state.chartsFirstDate, newChartTimestamp[0]].sort()[0];
        state.chartsLastDate = [state.chartsFirstDate, newChartTimestamp[newChartTimestamp.length - 1]].sort()[1];
      }

    })
  }
})

// Thunks
const setChart = createAppAsyncThunk<ChartT, SetChartArgs>(
  `${ slice.name }/setChart`,
  async ( arg, thunkAPI ) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    dispatch( appActions.setAppStatus( { status: 'loading' } ) );
    try {
      const chartData = await chartsApi.getChart( arg.ticker );
      if ( !chartData.data.chart.error ) {
        const id = v4();
        dispatch( appActions.setAppStatus( { status: 'succeeded' } ) );
        return { chartData: chartData.data, ...arg, id };
      } else {
        handleServerAppError( chartData.data, dispatch );
        return rejectWithValue( null );
      }
    } catch ( e ) {
      handleServerNetworkError( e, dispatch );
      return rejectWithValue( null );
    }
  }
);
// Types
export type ChartsState = {
  charts: ChartT[]
  chartsFirstDate: number | null
  chartsLastDate: number | null
}
type SetChartArgs = { ticker: string, title: string, type: SeriesOptionsType, color: string }
// Exports
export const chartsReducer = slice.reducer;
export const chartsActions = slice.actions;
export const chartsThunks = { setChart };