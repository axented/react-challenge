export const messagesReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return {
        ...state,
        messages: action.data,
      };
    default:
      return state;
  }
};
