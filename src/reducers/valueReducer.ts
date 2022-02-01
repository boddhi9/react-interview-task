const withoutLast = arr => arr.slice(0, arr.length - 1)
const withoutFirst = arr => arr.slice(1)

const valueReducer = (value, action) => {
	switch (action.type) {
		case 'INCREMENT':
			value.past.push(value.current);
			value.current = value.current + action.payload;
			value.clickedTimes = value.clickedTimes + 1;
			return;
		case 'DECREMENT':
			value.past.push(value.current);
			value.current = value.current - action.payload;
			value.clickedTimes = value.clickedTimes + 1;
			return;
		case 'UNDO':
			value.future.unshift(value.current);
			value.current = value.past[value.past.length - 1];
			value.past = withoutLast(value.past);
      value.clickedTimes = value.clickedTimes - 1;
			return;
		case 'REDO':
			value.past.push(value.current);
			value.current = value.future[0];
			value.future = withoutFirst(value.future);
      value.clickedTimes = value.clickedTimes + 1;
			return;
	}
}

export default valueReducer;
