import React, { Fragment } from 'react';

import useCounterSync from '../hooks/useCounterSync';

import Button from './Button';

const ButtonSync = () => {
  const value = 1;
  const { onInc, onDec } = useCounterSync(value);

  return (
    <Fragment>
      <Button onClick={onInc} text={`+${value} (sync)`} />
      <Button onClick={onDec} text={`-${value} (sync)`} />
    </Fragment>
  );
};

export default ButtonSync;
