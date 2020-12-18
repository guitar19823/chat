import { useState } from 'react';
import './index.css';

const ChatMenu = props => {
  const {
    side = 'right',
    children
  } = props;

  const [ show, setShow ] = useState(false);
  const [ sideState, setSideState ] = useState(side);

  const handleShow = e => {
    (side === 'left' || side === 'right') && setSideState(e.relatedTarget.clientWidth > 210 ? 'left' : 'right');
    setShow(true);
  };

  return (
    <div
      className="ChatMenu"
      onMouseEnter={e => handleShow(e)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="ChatMenu_button">
        <div/><div/><div/>
      </div>

      {
        show ? (
          <figure className={`ChatMenu_list_${sideState}`}>
            {children}
          </figure>
        ) : null
      }
    </div>
  );
};

export default ChatMenu;