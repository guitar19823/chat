import {
  SET_SHOW_CHAT,
  SET_CHAT_LANGUAGE,
  SET_CHAT_ACTIVE_PAGE,
  SET_MESSAGE,
  SET_LOADING,
} from '../types';

const initialState = {
  showChat: false,
  name: 'ru',
  title: 'русский',
  navItems: {general: 'общий', clan: 'клан', friends:'друзья'},
  headerMenuItems: ['закрыть чат'],
  messageMenuItems: ['В друзья', 'Пожаловаться'],
  footerMessage: 'Достигните уровня 2, чтобы писать в чате.',
  activePage: 'general',
  messages: [],
  loading: false,
};

const handlers = {
  [SET_SHOW_CHAT]: (state, { payload }) => ({
    ...state,
    showChat: payload,
  }),
  [SET_CHAT_LANGUAGE]: (state, { payload }) => ({
    ...state,
    name: payload.name,
    title: payload.title,
    navItems: payload.navItems,
    headerMenuItems: payload.headerMenuItems,
    messageMenuItems: payload.messageMenuItems,
    footerMessage: payload.footerMessage,
  }),
  [SET_CHAT_ACTIVE_PAGE]: (state, { payload }) => ({
    ...state,
    activePage: payload
  }),
  [SET_MESSAGE]: (state, { payload }) => ({
    ...state,
    messages: payload,
  }),
  [SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload,
  }),
  DEFAULT: state => state,
};

export const chatReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};