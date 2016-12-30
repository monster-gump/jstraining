function reducer(state = {
  text: 'Hello, visitor',
  name: 'visitor'
}, action) {
  switch (action.type) {
    case 'change':
      return {
        name: action.payload,
        text: 'Hello, ' + action.payload
      };
    default:
      return state;
  }
}

export default reducer;
