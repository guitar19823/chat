import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { setMessageThunkCreator } from '../../../../store/actions/chatAction';
import './index.css';

const ChatFooter = () => {
  const { footerMessage, activePage } = useSelector(state => state.chat);
  const { userId, avatar, userName, level } = useSelector(state => state.session);
  const dispatch = useDispatch();

  const handleKeyPress = e => {
    if (e.code === 'Enter') {
      dispatch(setMessageThunkCreator({
        messageId: Date.now(),
        userId,
        avatar,
        userName,
        level,
        message: e.target.value.replace(/(<([^>]+)>)/gi, "").trim(),
        time: moment().format('hh:mm'),
      }, activePage));

      e.target.value = '';
    }
  };

  return (
    <footer className="ChatFooter">
      {
        level > 1 ? (
          <input
            type="text"
            onKeyPress={e => handleKeyPress(e)}
          />
        ) : (
          <div className="ChatFooter_default">
            <p>{footerMessage}</p>
          </div>
        )
      }

      <div className="ChatFooter_smile">
        <div/>
      </div>
    </footer>
  );
};

export default ChatFooter;