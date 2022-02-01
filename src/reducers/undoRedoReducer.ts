const undoRedoReducer = (undoTimes, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return 0;
		case 'DECREMENT':
			return 0;
		case 'UNDO':
			return undoTimes + 1;
		case 'REDO':
     		return undoTimes - 1;
	}
}

export default undoRedoReducer;
