import FormControl                   from '@mui/material/FormControl';
import FormHelperText                from '@mui/material/FormHelperText';
import InputLabel                    from '@mui/material/InputLabel';
import MenuItem                      from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, memo, useState }        from 'react';

type SelectorProps = {
  items: string[]
  placeholder: string
  onChange: ( value: string ) => void
  error: boolean
}

export const Selector: FC<SelectorProps> = memo( ( { items, placeholder, onChange, error } ) => {

  const [ itemValue, setItemValue ] = useState<string[]>( [] );

  const handleChange = ( event: SelectChangeEvent<typeof itemValue> ) => {
    const value = event.target.value;
    setItemValue( typeof value === 'string' ? value.split( ',' ) : value, );
    onChange( value.toString() );
  };

  return (
    <div>
      <FormControl sx={ { m: 1, minWidth: 400 } } error={ error }>
        <InputLabel id="demo-simple-select-error-label">{ placeholder }</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={ itemValue }
          label={ itemValue }
          onChange={ handleChange }
          renderValue={ ( value ) => `${ value }` }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          { items.map( item => <MenuItem key={ item } value={ item }>{ item }</MenuItem> ) }
        </Select>
        <FormHelperText>{ error ? 'Required field' : null }</FormHelperText>
      </FormControl>
    </div>
  );
} );