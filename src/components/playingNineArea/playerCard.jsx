const PlayerCard = ({ user }) => {
  return (
    <div className="p-card">
      <img src={user['Profile Image']} alt="profile_image" />
      <div className="p-data">
        <div className="name">{user.Name}</div>
        <div className="sec-info">
          <span className="bet">
            <i className="fas fa-medal"></i>
            {user.Bet}
          </span>
          <span className="price">
            <i className="fas fa-dollar-sign"></i>
            {user.Price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
