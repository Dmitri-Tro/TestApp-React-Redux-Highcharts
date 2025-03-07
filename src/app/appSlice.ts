import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const slice = createSlice( {
    name: "App",
    initialState: {
        status: "idle" as RequestStatusType,
        error: null as string | null,
        isInitialized: false,
    },
    reducers: {
        setAppError: ( state, action: PayloadAction<{ error: string | null }> ) => {
            state.error = action.payload.error;
        },
        setAppStatus: ( state, action: PayloadAction<{ status: RequestStatusType }> ) => {
            state.status = action.payload.status;
        },
        initializeApp: ( state, action: PayloadAction<{isInitialized: boolean}> ) => {
            state.isInitialized = action.payload.isInitialized;
        }
    },
} );


export const appReducer = slice.reducer;
export const appActions = slice.actions;

export type AppState = ReturnType<typeof slice.getInitialState>;

// Types
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
