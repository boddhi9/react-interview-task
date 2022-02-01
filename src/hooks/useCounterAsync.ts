import { useContext } from 'react';

import CounterContext from '../contexts/CounterContext';

export default value => {
  const { dispatch } = useContext(CounterContext);

  const onInc = () => {
    setTimeout(() => {
      dispatch({ type: 'INCREMENT', payload: value });
    }, 1000);
  };

  const onDec = () => {
    setTimeout(() => {
      dispatch({ type: 'DECREMENT', payload: value });
    }, 1000);
  };

  return {
    onInc,
    onDec,
  };
};
