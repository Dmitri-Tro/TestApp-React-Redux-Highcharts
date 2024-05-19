import { SeriesOptionsType } from 'highcharts';
import { ChangeEvent, useState } from 'react';
import { ChartT } from '../../models/ChartT.ts';

type UseChartMenu = {
  chart?: ChartT
  setChart: ( title: string, type: SeriesOptionsType, color: string, ticker?: string, ) => void
  setOpen: ( isOpen: boolean ) => void
}

export const useChartMenu = ( { chart, setChart, setOpen }: UseChartMenu ) => {
  const [ ticker, setTicker ] = useState( chart?.chartData.chart.result ? chart?.chartData.chart.result[0].meta.symbol : null );
  const [ title, setTitle ] = useState( chart?.title || null );
  const [ type, setType ] = useState<SeriesOptionsType | null>( chart?.type || null );
  const [ color, setColor ] = useState( chart?.color || null );
  const [ error, setError ] = useState<'ticker' | 'title' | 'type' | 'color' | null>( null );

  const onTickerFieldChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setTicker( e.currentTarget.value );
    setError( null );
  };
  const onTitleFieldChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setTitle( e.currentTarget.value );
    setError( null );
  };
  const onTypeFieldChange = ( value: string ) => {
    setType( value as unknown as SeriesOptionsType );
    setError( null );
  };
  const onColorFieldChange = ( value: string ) => {
    setColor( value );
    setError( null );
  };

  const handleSave = () => {
    if ( ticker && title && type && color ) {
      setChart( title, type, color, ticker );
      setTicker( null );
      setTitle( null );
      setType( null );
      setColor( null );
      setOpen( false );
    } else if ( !ticker ) {
      setError( 'ticker' );
    } else if ( !title ) {
      setError( 'title' );
    } else if ( !type ) {
      setError( 'type' );
    } else if ( !color ) {
      setError( 'color' );
    }
  };
  return {
    onTickerFieldChange,
    onTitleFieldChange,
    onTypeFieldChange,
    onColorFieldChange,
    handleSave,
    ticker,
    title,
    type,
    color,
    error
  };
};