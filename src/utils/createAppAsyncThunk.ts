import { createAsyncThunk }          from '@reduxjs/toolkit';
import { AppDispatch, AppRootState } from '../store.ts';
import { ChartResponse }             from '../models/ChartResponse.ts';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootState;
  rejectValue: null | ChartResponse;
  dispatch: AppDispatch;
}>();
