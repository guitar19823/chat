import { useDispatch } from 'react-redux';
import { setShowChat } from '../../../../store/actions/chatAction';
import './index.css';

const ChatShowButton = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="ChatShowButton"
      onClick={() => dispatch(setShowChat(true))}
    ></div>
  );
};

export default ChatShowButton;