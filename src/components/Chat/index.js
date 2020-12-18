import { useSelector } from 'react-redux';
import ChatFooter from './components/ChatFooter';
import ChatHeader from './components/ChatHeader';
import ChatMain from './components/ChatMain';
import ChatShowButton from './components/ChatShowButton';
import './index.css';

const Chat = () => {
  const { showChat } = useSelector(state => state.chat);

  return (
    showChat ? (
      <div className="Chat">
        <ChatHeader />

        <ChatMain />

        <ChatFooter />
      </div>
    ) : (
      <ChatShowButton />
    )
  );
};

export default Chat;