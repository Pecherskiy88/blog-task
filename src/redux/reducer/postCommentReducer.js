export default (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case CREATE:
      return {
        ...state,
        loading: true,
        loaded: false
      };

    case CREATE_SUCCESS:
      return {
        ...state,
        data: state.data.concat(payload.data),
        loading: false,
        loaded: true,
        error: null
      };

    case CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: payload
      };
    default:
      return state;
  }
};
