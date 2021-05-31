import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./New.css";
function New({ movie, history }) {
  const handleClick = () => {
    //   di chuyển sang trang chi tiết
    history.push(`/new-detail/${movie.id}`);
  };
  return (
    <div className="cards card--list" onClick={handleClick}>
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="card__cover">
            <img src={movie.image} alt={movie.image} />
            <Link to={movie.id} className="card__play">
              <i className="icon ion-ios-play" />
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-8">
          <div className="card__content">
            <h3 className="card__title">
              <Link to={movie.id}>{movie.title}</Link>
            </h3>
            <div className="card__description">
              <p>{movie.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(New);
