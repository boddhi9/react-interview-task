import { useContext } from 'react';

import CounterContext from '../contexts/CounterContext';

export default () => {
  const { state } = useContext(CounterContext);

  return {
    currentValue: state.value.current,
  };
};
