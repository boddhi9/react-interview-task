import React, { useReducer } from 'react';

import CounterContext from '../contexts/CounterContext';

import rootReducer from '../reducers/rootReducer';

const initialState = {
  value: { past: [], current: 0, future: [], clickedTimes: 0 },
  undoTimes: 0,
};

export default () => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const value = { state, dispatch };

  const ContextProvider = ({ children }) => {
    return (
      <CounterContext.Provider value={value}>
        {children}
      </CounterContext.Provider>
    );
  };

  return ContextProvider;
};
