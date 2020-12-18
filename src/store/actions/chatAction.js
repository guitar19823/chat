import { getMessageAPI, setMessageAPI } from '../../api/messageAPI';
import {
  SET_SHOW_CHAT,
  SET_CHAT_LANGUAGE,
  SET_CHAT_ACTIVE_PAGE,
  SET_MESSAGE,
  SET_LOADING,
} from '../types';

export const setShowChat = payload => ({
  type: SET_SHOW_CHAT,
  payload,
});

export const setLanguage = payload => ({
  type: SET_CHAT_LANGUAGE,
  payload,
});

export const setActivePage = payload => ({
  type: SET_CHAT_ACTIVE_PAGE,
  payload,
})

const setMessage = payload => ({
  type: SET_MESSAGE,
  payload,
});

const setLoading = payload => ({
  type: SET_LOADING,
  payload,
});

export const setMessageThunkCreator = (payload, activePage) => dispatch => {
  setMessageAPI(payload, activePage)
  .then(data => dispatch(setMessage(data)));
};

export const getMessageThunkCreator = activePage => dispatch => {
  dispatch(setLoading(true));

  getMessageAPI(activePage)
  .then(data => dispatch(setMessage(data)))
  .finally(() => dispatch(setLoading(false)));
};