import { configureStore }                                 from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { appReducer }                                     from './app/appSlice.ts';
import { chartsReducer }                                  from './features/chartsSlice/chartsSlice.ts';

export const store = configureStore({
  reducer: {
    app: appReducer,
    charts: chartsReducer
  },
});

export type AppRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
