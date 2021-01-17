import { useState, useEffect } from 'react';
import { random, storage } from './../../utils/common';
import Card from './profileCard';
import dice from './../../assets/dice-ani.gif';
import './bettingArea.css';

const BettingArea = ({ users: usersList, history, setPlayingUsers }) => {
  const [oppBet, setOppBet] = useState(random());
  const [rowOneUsers, setRowOneUsers] = useState([]);
  const [rowTwoUsers, setRowTwoUsers] = useState([]);
  const [loadBet, setLoadBet] = useState(false);
  const userData = storage.get('playing');
  const users = usersList.length === 0 && userData ? userData : usersList;

  useEffect(() => {
    setTimeout(() => {
      setLoadBet(true);
    }, 2000);
    const playingUsers = users.map((user) => {
      if (parseInt(user.Bet) === oppBet) {
        user.win = true;
        user.Price = parseInt(user.Price) * 2 + '';
        return user;
      }
      user.win = false;
      user.Price = 0 + '';
      return user;
    });
    setRowOneUsers(playingUsers.slice(0, 5));
    setRowTwoUsers(playingUsers.slice(5, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="betting-area">
      <div className="row1">
        {rowOneUsers.map((user) => (
          <Card user={user} key={user['Profile Image']} />
        ))}
      </div>
      {loadBet ? (
        <div className="opposite-bet">
          <h1>{oppBet}</h1>
        </div>
      ) : (
        <img src={dice} alt="dice" className="dice" />
      )}

      <div className="row2">
        {rowTwoUsers.map((user) => (
          <Card user={user} key={user['Profile Image']} />
        ))}
      </div>
      <button
        className="back"
        onClick={() => {
          setPlayingUsers([]);
          storage.remove('playing');
          history.push('/');
        }}
      >
        BACK
      </button>
    </div>
  );
};

export default BettingArea;
