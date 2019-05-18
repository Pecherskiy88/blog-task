function inputValue(state = "", action) {
  switch (action.type) {
    case "ONCHANGE":
      return action.inputValue;
    default:
      return state;
  }
}
export default inputValue;
