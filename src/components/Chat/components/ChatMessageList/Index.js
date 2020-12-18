import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { setMessageThunkCreator } from "../../../../store/actions/chatAction";
import ChatMessage from "../ChatMessage";
import './index.css';

const ChatMessageList = () => {
  const { activePage, messages } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    let c = 0;

    const time = Math.ceil(Math.random() * 10000);

    const interval = setInterval(() => {
      dispatch(setMessageThunkCreator(randomMessage(), activePage));

      c >= 4 && clearInterval(interval);

      c++;
    }, time < 5000 ? 5000 : time);

    return () => clearInterval(interval);
  }, [dispatch, activePage]);

  return (
    <div className="ChatMessageList">
      {
        messages.map(i => (
          <ChatMessage
            key={i.messageId}
            userId={i.userId}
            avatar={i.avatar}
            userName={i.userName}
            level={i.level}
            message={i.message}
            time={i.time}
          />
        ))
      }
    </div>
  );
};

const randomMessage = () => ([
  {
    messageId: Date.now(),
    userId: 2,
    avatar: '',
    userName: 'EtherMonster',
    level: '1',
    message: 'Random message from EtherMonster',
    time: moment().format('hh:mm'),
  },
  {
    messageId: Date.now(),
    userId: 3,
    avatar: '',
    userName: 'Don_Ekater',
    level: '4',
    message: 'Random message from Don_Ekater',
    time: moment().format('hh:mm'),
  },
  {
    messageId: Date.now(),
    userId: 4,
    avatar: '',
    userName: 'Mistery_X',
    level: '3',
    message: 'Random message from Mistery_X',
    time: moment().format('hh:mm'),
  },
  {
    messageId: Date.now(),
    userId: 5,
    avatar: '',
    userName: 'B.O.R.O.D.A',
    level: '7',
    message: 'Random message from B.O.R.O.D.A',
    time: moment().format('hh:mm'),
  },
][Math.floor(Math.random() * 4)]);

export default ChatMessageList;