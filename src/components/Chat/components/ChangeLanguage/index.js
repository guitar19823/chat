import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../../store/actions/chatAction';
import './index.css';

const ChangeLanguage = () => {
  const { name } = useSelector(state => state.chat);
  const [ show, setShow ] = useState(false);
  const dispatch = useDispatch();

  const dataLanguage = [
    {
      name: 'ru',
      title: 'русский',
      navItems: {general: 'общий', clan: 'клан', friends:'друзья'},
      headerMenuItems: ['закрыть чат'],
      messageMenuItems: ['в друзья', 'пожаловаться'],
      footerMessage: 'Достигните уровня 2, чтобы писать в чате.',
    },
    {
      name: 'en',
      title: 'english',
      navItems: {general: 'general', clan: 'clan', friends: 'friends'},
      headerMenuItems: ['close chat'],
      messageMenuItems: ['in friends list', 'complain'],
      footerMessage: 'Reach level 2 to chat.',
    },
    {
      name: '中国',
      title: '中国',
      navItems: {general: '一般', clan: '氏族', friends: '朋友們'},
      headerMenuItems: ['關閉聊天'],
      messageMenuItems: ['在好友清單中', '抱怨'],
      footerMessage: '達到2級聊天。',
    },
  ];

  return (
    <div
      className="ChangeLanguage"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="ChangeLanguage_active-language">
        <span className="active-language_name">{name}</span>
        <span className="active-language_arrow"></span>
      </div>

      {
        show ? (
          <ul className="ChangeLanguage_list">
            {
              dataLanguage.map(i => (
                <li
                  key={i.name}
                  className="ChangeLanguage_list-item"
                  onClick={() => dispatch(setLanguage(i))}
                >{i.title}</li>
              ))
            }
          </ul>
        ) : null
      }
    </div>
  );
};

export default ChangeLanguage;