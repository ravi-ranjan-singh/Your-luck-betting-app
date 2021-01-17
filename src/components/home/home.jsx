import { useEffect } from 'react';
import { storage } from './../../utils/common';
import UserInfo from './../usersInfo/usersInfos';
import PlayingNine from './../playingNineArea/playingNine';

const Home = ({ users, playingUsers, setPlayingUsers, history }) => {
  useEffect(() => {
    storage.remove('playing');
  }, []);
  return (
    <>
      <div className="playing-nine-area">
        <PlayingNine users={playingUsers} history={history} />
      </div>
      <div className="users-info">
        <UserInfo users={users} setPlayingUsers={setPlayingUsers} />
      </div>
    </>
  );
};

export default Home;
