function inputValue(state = [], action) {
  switch (action.type) {
    case "ONCHANGE":
      return [...state, action.in];
    default:
      return state;
  }
}
export default inputValue;
