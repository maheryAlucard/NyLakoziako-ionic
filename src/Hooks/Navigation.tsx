import * as React from 'react';

const defaultContextValue = {};

const NavigationContext = React.createContext(defaultContextValue);

export const useNavigation = () => React.useContext(NavigationContext);