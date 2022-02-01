import React, { Fragment } from 'react';

import useCounterAsync from '../hooks/useCounterAsync';

import Button from './Button';

const ButtonAsync = () => {
  const value = 10;
  const { onInc, onDec } = useCounterAsync(value);

  return (
    <Fragment>
      <Button onClick={onInc} text={`+${value} (async)`} />
      <Button onClick={onDec} text={`-${value} (async)`} />
    </Fragment>
  );
};

export default ButtonAsync;
