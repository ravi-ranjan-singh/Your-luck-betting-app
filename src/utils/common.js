import _ from 'lodash';

export const sort = (arr, order, sortColumn) => {
  return arr.sort(function (a, b) {
    if (order) {
      return parseInt(a[sortColumn]) - parseInt(b[sortColumn]);
    } else {
      return parseInt(b[sortColumn]) - parseInt(a[sortColumn]);
    }
  });
};

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

export const search = (users, query) => {
  if (query)
    return users.filter((user) =>
      _.includes(user.Name.toLowerCase(), query.toLowerCase())
    );
  return users;
};

export const random = () => Math.ceil(Math.random() * 8) + 1;

export const storage = {
  get: function (itemName) {
    return JSON.parse(localStorage.getItem(itemName));
  },
  set: function (itemName, value) {
    localStorage.setItem(itemName, JSON.stringify(value));
  },
  remove: function (itemName) {
    localStorage.removeItem(itemName);
  },
};
