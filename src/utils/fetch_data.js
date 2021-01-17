import axios from 'axios';
export const getData = async (setUsers) => {
  const { data } = await axios.get(
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json'
  );
  setUsers(data);
};
