import React, { FC }            from 'react';
import { AlertProps, Snackbar } from '@mui/material';
import MuiAlert                           from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../../store.ts';
import { appActions }                     from '../../app/appSlice.ts';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>( function Alert( props, ref ) {
  return <MuiAlert elevation={ 6 } ref={ ref } variant="filled" { ...props } />;
} );

export const ErrorSnackbar: FC = () => {
  const error = useAppSelector( ( state ) => state.app.error );
  const dispatch = useAppDispatch();

  const handleClose = ( _: React.SyntheticEvent | Event, reason?: string ) => {
    if ( reason === 'clickaway' ) {
      return;
    }
    dispatch( appActions.setAppError( { error: null } ) );
  };

  const isOpen = error !== null;

  return (
    <Snackbar open={ isOpen } autoHideDuration={ 6000 } onClose={ handleClose }>
      <Alert onClose={ handleClose } severity="error">
        { error }
      </Alert>
    </Snackbar>
  );
}
