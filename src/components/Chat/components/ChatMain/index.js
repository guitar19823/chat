import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessageThunkCreator } from '../../../../store/actions/chatAction';
import ChatLoader from '../ChatLoader';
import ChatMessageList from '../ChatMessageList/Index';
import './index.css';

const ChatMain = () => {
  const { activePage, loading } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getMessageThunkCreator(activePage));
  }, [dispatch, activePage]);
  
  return (
    <main className="ChatMain">
      {
        loading ? (
          <ChatLoader />
        ) : (
          <ChatMessageList />
        )
      }
    </main>
  )
};

export default ChatMain;