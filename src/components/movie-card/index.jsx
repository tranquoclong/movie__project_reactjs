import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./long.css";
function MovieCard({ movie, history }) {
  const handleClick = () => {
    //   di chuyển sang trang chi tiết
    history.push(`/movie-detail/${movie.maPhim}`);
  };
  return (
    <div className="cards" onClick={handleClick}>
      <div className="card__cover">
        <img src={movie.hinhAnh} alt={movie.hinhAnh} />
        <Link to={movie.maPhim} className="card__play">
          <i className="icon ion-ios-play" />
        </Link>
      </div>
      <div className="card__content">
        <h3 className="card__title">
          <Link to={movie.maPhim}>{movie.tenPhim}</Link>
        </h3>
        <span class="card__category">
          <Link to={movie.maPhim}>{movie.biDanh}</Link>
        </span>
        <span class="card__rate">
          <i class="icon ion-ios-star"></i>
          {movie.danhGia}
        </span>
      </div>
    </div>
  );
}

export default withRouter(MovieCard);
