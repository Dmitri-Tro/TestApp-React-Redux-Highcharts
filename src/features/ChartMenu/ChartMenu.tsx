import { Close as CloseIcon }                                                   from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Theme } from '@mui/material';
import { styled }                                                               from '@mui/material/styles';
import TextField                                                                from '@mui/material/TextField';
import { SeriesOptionsType }                                                    from 'highcharts';
import { FC, memo, useState }                                                   from 'react';
import { Button }                                                               from '../../components/Button/Button.tsx';
import { Selector }                                                             from '../../components/Selector/Selector.tsx';
import { ChartT }                                                               from '../../models/ChartT.ts';
import { useChartMenu }                                                         from './useChartMenu.ts';

const BootstrapDialog = styled( Dialog )( ( { theme } ) => ( {
  '& .MuiDialogContent-root': {
    padding: theme.spacing( 2 ),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing( 1 ),
  },
} ) );

type ChartMenuProps = {
  actionType: 'update' | 'create'
  buttonTitle: string
  setChart: ( title: string, type: SeriesOptionsType, color: string, ticker?: string, ) => void
  chart?: ChartT
}

export const ChartMenu: FC<ChartMenuProps> = memo( ( { buttonTitle, actionType, setChart, chart } ) => {
  const [ open, setOpen ] = useState( false );
  const handleClickOpen = () => setOpen( true );
  const handleClose = () => setOpen( false );
  const {
          onTickerFieldChange,
          onTitleFieldChange,
          onTypeFieldChange,
          onColorFieldChange,
          handleSave,
          error,
          ticker,
          title,
          type,
          color
        } = useChartMenu( { chart, setChart, setOpen } );

  const iconCloseStyles = {
    position: 'absolute',
    right: 8,
    top: 8,
    color: ( theme: Theme ) => theme.palette.grey[500],
  };

  return (
    <div>
      <Button onClick={ handleClickOpen }>{ buttonTitle }</Button>
      <BootstrapDialog
        onClose={ handleClose }
        aria-labelledby="customized-dialog-title"
        open={ open }
      >
        <DialogTitle sx={ { m: 0, p: 2 } } id="customized-dialog-title">Chart Settings</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={ handleClose }
          sx={ iconCloseStyles }
        >
          <CloseIcon/>
        </IconButton>
        <DialogContent dividers>
          { actionType === 'create' &&
            <TextField
                error={ error === 'ticker' }
                id="outlined-error-helper-text"
                label="Chart ticker"
                defaultValue={ ticker }
                onChange={ onTickerFieldChange }
                helperText={ error === 'ticker' ? 'Required field' : null }
                sx={ { marginRight: '20px' } }
            /> }
          <TextField
            error={ error === 'title' }
            id="outlined-error-helper-text"
            label="Chart title"
            defaultValue={ title }
            onChange={ onTitleFieldChange }
            helperText={ error === 'title' ? 'Required field' : null }
          />
          <Selector
            items={ [ 'line', 'spline', 'area' ] }
            placeholder={ type as unknown as string || 'Chart type' }
            onChange={ onTypeFieldChange }
            error={ error === 'type' }
          />
          <Selector
            items={ [ 'blue', 'red', 'green' ] }
            placeholder={ color || 'Chart color' }
            onChange={ onColorFieldChange }
            error={ error === 'color' }
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={ handleSave }> Save changes </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
} );