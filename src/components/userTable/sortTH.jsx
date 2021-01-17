const SortTH = ({ property, sortColumn, sortOrder, onSort, iconName }) => {
  return (
    <th onClick={() => onSort(property, !sortOrder)}>
      {property}
      <i className={`fas fa-${iconName}`}></i>
      {sortColumn === property ? (
        <i className={`fas fa-chevron-${sortOrder ? 'up' : 'down'}`}></i>
      ) : null}
    </th>
  );
};

export default SortTH;
