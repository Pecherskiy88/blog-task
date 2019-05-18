function sendComments(state = [], action) {
  switch (action.type) {
    case "SEND":
      return action.data.length
        ? [...state, { message: action.data, id: Date.now() }]
        : state;
    default:
      return state;
  }
}
export default sendComments;
