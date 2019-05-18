function fetchSimple(state = [], action) {
  switch (action.type) {
    case "SIMPLE":
      return action.data;
    default:
      return state;
  }
}
export default fetchSimple;
