import { AppRootState } from '../store.ts';
export const selectIsInitialized = ( state: AppRootState ) => state.app.isInitialized;
