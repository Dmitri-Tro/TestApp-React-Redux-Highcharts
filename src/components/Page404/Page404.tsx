import { FC, useCallback } from 'react';
import { useNavigate }     from 'react-router-dom';
import styles              from './page404.module.css';
import { Button }          from '../Button/Button.tsx';

export const Page404: FC = () => {
  const navigate = useNavigate();
  const onBackToMainClick = useCallback( () => {
    navigate( '/' );
  }, [ navigate ] );
  return (
    <div className={ styles.wrapper }>
      <h1>404: PAGE NOT FOUND</h1>
      <Button onClick={ onBackToMainClick }>Back to View page</Button>
    </div>
  );
};
