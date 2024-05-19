import { Navigate } from 'react-router-dom';
import { FC }       from 'react';

export const RootComponent: FC = () => {
  return (
    <>
      <Navigate to="/view" replace/>
    </>
  );
};