import  {  useContext } from 'react';

import CounterContext from '../contexts/CounterContext';

export default () => {
  const { state, dispatch } = useContext(CounterContext);

  const { value, undoTimes } = state;

  const isUndoable = value.past.length === 0 || value.clickedTimes === 0;
  const isRedoable = undoTimes <= 0;

  const onUndo = () => {
    dispatch({ type: 'UNDO' });
  };

  const onRedo = () => {
    dispatch({ type: 'REDO' });
  };

  return {
    isUndoable,
    isRedoable,
    onUndo,
    onRedo,
  };
};
