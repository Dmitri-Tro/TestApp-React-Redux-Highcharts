import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { CircularProgress }               from '@mui/material';
import { LocalizationProvider }           from '@mui/x-date-pickers';
import { AdapterDayjs }                   from '@mui/x-date-pickers/AdapterDayjs';
import { FC, useEffect }                  from 'react';
import { useRoutes }                      from 'react-router-dom';
import { ErrorSnackbar }                  from '../components/ErrorSnackbar/ErrorSnackbar.tsx';
import { Header }                         from '../components/Header/Header.tsx';
import router                             from '../router.ts';
import { useAppDispatch, useAppSelector } from '../store.ts';
import { selectIsInitialized }            from './appSelectors.ts';
import { appActions }                     from './appSlice.ts';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector( selectIsInitialized );

  useEffect( () => {
    dispatch( appActions.initializeApp( { isInitialized: true } ) );
  }, [ dispatch ] );

  const content = useRoutes( router );

  return !isInitialized ? (
    <CircularProgress className={ 'circularProgress' }/>
  ) : (
           <LocalizationProvider dateAdapter={ AdapterDayjs }>
             <ErrorSnackbar/>
             <Header/>
             { content }
           </LocalizationProvider>
         );
};
