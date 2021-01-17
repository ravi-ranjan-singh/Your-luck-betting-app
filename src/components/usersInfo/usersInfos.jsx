import { useState } from 'react';
import Table from '../userTable/table';
import Pagination from './../pagination/pagination';
import SearchBar from './../searchBar/searchBar';
import { paginate, sort, search } from './../../utils/common';
import './usersInfo.css';

const UserInfo = ({ users, setPlayingUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState('Bet');
  const [sortOrder, setSortOrder] = useState(true);
  const [query, setQuery] = useState('');

  const handlePageChange = (page) => setCurrentPage(page);
  const handleSearch = (e) => setQuery(e.target.value);

  const handleSorting = (sortCol, sortOrd) => {
    if (sortColumn !== sortCol) setSortOrder(true);
    else setSortOrder(sortOrd);
    setSortColumn(sortCol);
  };

  let filtered = search(users, query);
  const sortedUsers = sort(filtered, sortOrder, sortColumn);
  const currPageUsers = paginate(sortedUsers, currentPage, 10);

  return (
    <>
      <h5>Select Playing 9</h5>
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="user-table">
        <Table
          users={currPageUsers}
          setPlayingUsers={setPlayingUsers}
          sortOrder={sortOrder}
          sortColumn={sortColumn}
          onSort={handleSorting}
        />
      </div>
      <div className="pagination">
        <Pagination
          userCount={filtered.length}
          pageSize={10}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default UserInfo;
