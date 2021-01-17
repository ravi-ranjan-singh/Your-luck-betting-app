import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getData } from './utils/fetch_data';
import { storage } from './utils/common';
import M from 'materialize-css';
import swal from 'sweetalert';
import Home from './components/home/home';
import BettingArea from './components/bettingArea/bettingArea';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [playingUsers, setPlayingUsers] = useState([]);

  useEffect(() => {
    getData(setUsers);
    M.AutoInit();
  }, []);

  useEffect(() => {
    if (playingUsers.length !== 0) storage.set('playing', playingUsers);
    if (playingUsers.length > 9) {
      swal({
        title: 'Error',
        text: 'Cannot add more then 9 people',
        icon: 'error',
        button: 'Close',
      }).then(() => {
        playingUsers.pop();
        setPlayingUsers([...playingUsers]);
      });
    }
  }, [playingUsers]);

  return (
    <div className="App">
      <Switch>
        <Route
          path="/playground"
          render={(prps) => (
            <BettingArea
              {...prps}
              users={playingUsers}
              setPlayingUsers={setPlayingUsers}
            />
          )}
        />
        <Route
          path="/"
          render={(prps) => (
            <Home
              {...prps}
              users={users}
              playingUsers={playingUsers}
              setPlayingUsers={setPlayingUsers}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
