import Row from './row';
import SortTH from './sortTH';
import './table.css';

const Table = ({ users, setPlayingUsers, sortColumn, sortOrder, onSort }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Player Name</th>
          <th>Avatar</th>
          <SortTH
            property={'Bet'}
            sortColumn={sortColumn}
            sortOrder={sortOrder}
            onSort={onSort}
            iconName={'medal'}
          />
          <SortTH
            property={'Price'}
            sortColumn={sortColumn}
            sortOrder={sortOrder}
            onSort={onSort}
            iconName={'dollar-sign'}
          />
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Row
            user={user}
            key={user['Profile Image']}
            setPlayingUsers={setPlayingUsers}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
