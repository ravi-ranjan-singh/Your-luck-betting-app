import CheckBox from './checkBox';

const Row = ({ user, setPlayingUsers }) => {
  return (
    <tr>
      <td>
        <CheckBox user={user} setPlayingUsers={setPlayingUsers} />
      </td>
      <td>{user.Name}</td>
      <td>
        <img src={user['Profile Image']} alt="user-profile" />
      </td>
      <td>{user.Bet}</td>
      <td>{user.Price}</td>
    </tr>
  );
};

export default Row;
