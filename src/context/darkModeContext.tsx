import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
import React from "react";

const initialState = {
    darkMode: false,
};
export type State = typeof initialState;
export type Action = { type: "TOGGLE_DARK_MODE" };

export const DarkModeContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

interface ProviderProps {
    children: React.ReactNode;
}

export const DarkModeContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(DarkModeReducer, initialState);

    return (
        <DarkModeContext.Provider value={{ state, dispatch }}>{children}</DarkModeContext.Provider>
    );
};
