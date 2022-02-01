import { produce } from 'immer';

import valueReducer from './valueReducer';
import undoRedoReducer from './undoRedoReducer';

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    },
    {}
    )
  }
}

export default combineReducers({
  value: produce(valueReducer),
  undoTimes: produce(undoRedoReducer),
});
