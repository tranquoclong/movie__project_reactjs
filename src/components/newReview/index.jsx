import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
function NewReview({ movie, history }) {
  const handleClick = () => {
    //   di chuyển sang trang chi tiết
    history.push(`/new-detail/${movie.id}`);
  };
  return (
    <>
      <div className="cards" onClick={handleClick}>
        <div className="card__cover">
          <img src={movie.image} alt={movie.image} />
          <Link to={movie.id} className="card__play">
            <i className="icon ion-ios-play" />
          </Link>
        </div>
        <div className="card__content">
          <h3 className="card__title">
            <Link to={movie.id}>{movie.title}</Link>
          </h3>
        </div>
      </div>
    </>
  );
}
export default withRouter(NewReview);
