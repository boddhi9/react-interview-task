import React, { Fragment } from 'react';

import useUndoRedo from '../hooks/useUndoRedo';

import Button from './Button';

const ButtonUndoRedo = () => {
  const { isUndoable, isRedoable, onUndo, onRedo } = useUndoRedo();

  return (
    <Fragment>
      <Button onClick={onUndo} text="Undo" isDisabled={isUndoable} />
      <Button onClick={onRedo} text="Redo" isDisabled={isRedoable} />
    </Fragment>
  );
};

export default ButtonUndoRedo;
