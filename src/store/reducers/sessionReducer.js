const initialState = {
  userId: 1,
  avatar: '',
  userName: 'GameMaster',
  level: '2',
};

const handlers = {
  DEFAULT: state => state,
};

export const sessionReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};