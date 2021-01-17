import { createRef, useState } from 'react';

const CheckBox = ({ user, setPlayingUsers }) => {
  const inputRef = createRef();
  const [check, setCheck] = useState(false);

  const handleCheckboxChange = ({ target }) => {
    const user = JSON.parse(inputRef.current.dataset.user);
    if (target.checked) setPlayingUsers((users) => [...users, user]);
    else
      setPlayingUsers((users) =>
        users.filter((u) => u['Profile Image'] !== user['Profile Image'])
      );
    setCheck(target.checked);
  };
  return (
    <>
      <label>
        <input
          ref={inputRef}
          data-user={JSON.stringify(user)}
          type="checkbox"
          className="filled-in"
          checked={check}
          onChange={handleCheckboxChange}
        />
        <span></span>
      </label>
    </>
  );
};

export default CheckBox;
