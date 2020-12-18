import { useDispatch, useSelector } from 'react-redux';
import { setActivePage, setShowChat } from '../../../../store/actions/chatAction';
import ChangeLanguage from '../ChangeLanguage';
import ChatMenu from '../ChatMenu';
import './index.css';

const ChatHeader = () => {
  const { navItems, activePage, headerMenuItems } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  return (
    <header className="ChatHeader">
      <div className="ChatHeader_left-side">
        <ul className="ChatHeader_nav">
          {
            Object.keys(navItems).map(i => (
              <li
                key={i}
                className={`ChatHeader_nav-item${activePage === i ? ' active-chat-page' : ''}`}
                onClick={() => dispatch(setActivePage(i))}
              >{navItems[i]}</li>
            ))
          }
        </ul>
      </div>

      <div className="ChatHeader_right-side">
        <ChangeLanguage />

        <ChatMenu side="bottom-left">
          <ul>
            <li
              onClick={() => dispatch(setShowChat(false))}
            >{headerMenuItems[0]}</li>
          </ul>
        </ChatMenu>
      </div>
    </header>
  );
};

export default ChatHeader;