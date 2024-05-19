import { FC }             from 'react';
import styles             from './Header.module.css';
import Box                from '@mui/material/Box';
import LinearProgress     from '@mui/material/LinearProgress';
import { useAppSelector } from '../../store.ts';
import { NavLink }        from 'react-router-dom';

export const Header: FC = () => {
  const isLoading = useAppSelector( ( state ) => state.app.status );

  return (
    <Box sx={ { width: '100%' } }>
      <div className={ styles.header }>
        <span className={ styles.logo }>Charts</span>
        <div className={ styles.links }>
          <NavLink to={ '/view' }
                   className={ ( { isActive } ) => [ isActive ? styles.linkActive : styles.link ].join( ' ' ) }>View</NavLink>
          <NavLink to={ '/settings' }
                   className={ ( { isActive } ) => [ isActive ? styles.linkActive : styles.link ].join( ' ' ) }>Settings</NavLink>
        </div>
      </div>
      { isLoading === 'loading' && <LinearProgress/> }
    </Box>
  );
};
