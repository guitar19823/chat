import { useSelector } from 'react-redux';
import ChatMenu from '../ChatMenu';
import unknown from '../../../../assets/img/unknown.png';
import './index.css';

const sessionUserId = 1;

const ChatMessage = props => {
  const {
    userId,
    avatar,
    userName,
    level,
    message,
    time,
  } = props;

  const { messageMenuItems } = useSelector(state => state.chat);
  const session = useSelector(state => state.session);
  
  const truncate = (str, maxlength) => str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;

  return (
    <div className={`ChatMessage_${session.userId === userId ? 'right' : 'left'}`}>
      <div className="ChatMessage_message-wrapper">
        {
          sessionUserId !== userId ? (
            <header className="ChatMessage_header">
              <div>
                <img className="ChatMessage_avatar" src={avatar || unknown} alt=""/>

                <span className="ChatMessage_name">{truncate(userName, 17)}</span>

                <span className="ChatMessage_level">{level}</span>
              </div>

              <ChatMenu>
                <ul>
                  {
                    messageMenuItems.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))
                  }
                </ul>
              </ChatMenu>
            </header>
          ) : null
        }

        <main className="ChatMessage_main">
          <p>{message}</p>
        </main>
      </div>

      <span className="ChatMessage_time">{time}</span>
    </div>
  );
};

export default ChatMessage;