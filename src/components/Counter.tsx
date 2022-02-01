import React from 'react';

import useCounterValue from '../hooks/useCounterValue';

const Counter = () => {
  const { currentValue } = useCounterValue();

  return <div>Counter Value: {currentValue}</div>;
};

export default Counter;
