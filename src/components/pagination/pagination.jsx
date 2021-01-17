import _ from 'lodash';
import { Link } from 'react-router-dom';
import './pagination.css';

const Pagination = ({ userCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(userCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  if (pageCount === 1) return null;

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={currentPage === page ? 'active' : 'waves-effect'}
        >
          <Link to="/" onClick={() => onPageChange(page)}>
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
