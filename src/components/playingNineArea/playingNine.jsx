import PlayerCard from './playerCard';
import logo from './../../assets/dice.png';
import './playingNine.css';

const PlayingNine = ({ users, history }) => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h6>Playing 9</h6>
      <div className="playing-user-list">
        {users.map((user) => (
          <PlayerCard user={user} key={user['Profile Image']} />
        ))}
      </div>
      <button className="start" onClick={() => history.push('/playground')}>
        START
      </button>
    </>
  );
};

export default PlayingNine;
