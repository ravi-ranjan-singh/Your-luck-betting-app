const Card = ({ user }) => {
  return (
    <div className="card-panel">
      <div className="basic-info">
        <img src={user['Profile Image']} alt="profile_image" />
        <div className="name">{user.Name}</div>
      </div>
      <div className="bet-price">
        <div>
          <i className="fas fa-medal"></i> {user.Bet}
        </div>
        <div>
          <i className="fas fa-dollar-sign"></i> {user.Price}
        </div>
      </div>
      <div className="winning-area">
        <span>{user.win ? 'Winner' : 'Lose'}</span>
      </div>
    </div>
  );
};

export default Card;
