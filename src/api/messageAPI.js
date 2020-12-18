export const setMessageAPI = (message, dataType) => new Promise(resolve => {
  data[dataType].push(message);
  
  setTimeout(() => {
    resolve([...data[dataType]].reverse());
  }, Math.ceil(Math.random() * 500));
});

export const getMessageAPI = dataType => new Promise(resolve => setTimeout(() => {
  resolve([...data[dataType]].reverse());
}, Math.ceil(Math.random() * 500)));

const data = {
  general: [
    {
      messageId: 1,
      userId: 1,
      avatar: '',
      userName: 'GameMaster',
      level: '2',
      message: 'Hey users!!!',
      time: '10:15',
    },
    {
      messageId: 2,
      userId: 2,
      avatar: '',
      userName: 'EtherMonster',
      level: '1',
      message: 'Hey users!!!',
      time: '10:17',
    },
    {
      messageId: 3,
      userId: 3,
      avatar: '',
      userName: 'Don_Ekater',
      level: '4',
      message: 'Hey users!!!',
      time: '10:18',
    },
    {
      messageId: 4,
      userId: 1,
      avatar: '',
      userName: 'GameMaster',
      level: '2',
      message: 'Hey users!!!',
      time: '10:20',
    },
  ],
  clan: [
    {
      messageId: 5,
      userId: 2,
      avatar: '',
      userName: 'EtherMonster',
      level: '1',
      message: 'Hello world!!!',
      time: '10:21',
    },
    {
      messageId: 6,
      userId: 1,
      avatar: '',
      userName: 'GameMaster',
      level: '2',
      message: 'Hey users!!!',
      time: '10:31',
    },
  ],
  friends: [
    {
      messageId: 7,
      userId: 1,
      avatar: '',
      userName: 'GameMaster',
      level: '2',
      message: 'Hey users!!!',
      time: '10:25',
    },
  ],
};