import React, { useContext, createContext } from 'react';

interface ContextState {
  data: {
    amount: number;
    plan: string;
    monthlyEarnings: number;
    yearlyEarnings: number;
    updateData: (name: string, value: any) => void;
  };
}

interface Props {
  children: React.ReactNode;
  data: {
    amount: number;
    plan: string;
    monthlyEarnings: number;
    yearlyEarnings: number;
    updateData: (name: string, value: any) => void;
  };
}

const GlobalContext = createContext({} as ContextState);

export const GlobalState = (): {
  data: {
    amount: number;
    plan: string;
    monthlyEarnings: number;
    yearlyEarnings: number;
    updateData: (name: string, value: any) => void;
  };
} => useContext(GlobalContext);

export const GlobalProvider: React.FunctionComponent<Props> = ({
  children,
  data,
}) => (
  <GlobalContext.Provider value={{ data: data }}>
    {children}
  </GlobalContext.Provider>
);

export default GlobalProvider;
