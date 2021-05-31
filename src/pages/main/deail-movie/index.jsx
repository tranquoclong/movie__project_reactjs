import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMoiveDetail,
  getMoiveList,
  getMovieTime,
} from "../../../store/actions/movie.action";
import {
  FacebookFilled,
  InstagramFilled,
  GithubFilled,
  MailFilled,
} from "@ant-design/icons";
import { withRouter } from "react-router";
import ReactPlayer from "react-player";
import { NavLink, Link } from "react-router-dom";
import MovieCard from "../../../components/movie-card";
import moment from "moment";
import { Tabs } from "antd";
const { TabPane } = Tabs;
class DetailMovie extends Component {
  renderMovieSoLike = () => {
    return this.props.movieList.map((movie, index) => {
      return (
        <div className="col-6 col-sm-4 col-lg-6" key={index}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };
  showMovieTime1 = (number) => {
    const { heThongRapChieu } = this.props.movieTime;
    return heThongRapChieu?.map((movie, index) => {
      return (
        <TabPane
          tab={
            <img
              src={movie.logo}
              alt={movie.tenHeThongRap}
              style={{ width: 70, height: 70 }}
            />
          }
          key={index}
        >
          {movie.cumRapChieu?.map((item) => {
            return (
              <div>
                <div>
                  <h4 className="reviews__name">{item.tenCumRap}</h4>
                </div>
                <div>
                  {item.lichChieuPhim
                    .filter(
                      (item) =>
                        moment(item.ngayChieuGioChieu).format("DD-MM") ===
                        number
                    )
                    .map((item) => {
                      return (
                        <NavLink
                          className="show-time"
                          to={`/booking/${item.maLichChieu}`}
                        >
                          <span>
                            {moment(item.ngayChieuGioChieu).format("hh:mmA")}
                          </span>
                        </NavLink>
                      );
                    })
                    .splice(0, 15)}
                </div>
              </div>
            );
          })}
        </TabPane>
      );
    });
  };
  showMovieTime2 = () => {
    const numbers = [
      "01-01",
      "02-01",
      "03-01",
      "04-01",
      "05-01",
      "06-01",
      "07-01",
      "08-01",
      "09-01",
    ];
    return numbers.map((number) => {
      return (
        <TabPane tab={number} key={number}>
          <div className="row">
            {/* reviews */}
            <div className="col-12">
              <div className="reviews">
                <div className="reviews__text">
                  <Tabs tabPosition={"left"}>
                    {this.showMovieTime1(number)}
                  </Tabs>
                </div>
              </div>
            </div>
            {/* end reviews */}
          </div>
        </TabPane>
      );
    });
  };
  render() {
    if (this.props.loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <>
          {/* details */}
          <section className="section details">
            {/* details background */}
            <div className="details__bg" />
            {/* end details background */}
            {/* details content */}
            <div className="container">
              <div className="row">
                {/* title */}
                <div className="col-12">
                  <h1 className="details__title">
                    {this.props.movieDetail.tenPhim}
                  </h1>
                </div>
                {/* end title */}
                {/* content */}
                <div className="col-12 col-xl-6">
                  <div className="cards card--details">
                    <div className="row">
                      {/* card cover */}
                      <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                        <div className="card__cover-details">
                          <img
                            src={this.props.movieDetail.hinhAnh}
                            alt="hinhanh"
                          />
                        </div>
                      </div>
                      {/* end card cover */}
                      {/* card content */}
                      <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                        <div className="card__content">
                          <div className="card__wrap">
                            <span className="card__rate">
                              <i className="icon ion-ios-star" />
                              {this.props.movieDetail.danhGia}
                            </span>
                            <ul className="card__list">
                              <li>HD</li>
                              <li>16+</li>
                            </ul>
                          </div>
                          <ul className="card__meta">
                            <li>
                              <span>Genre:</span>{" "}
                              <Link to="/movie-detail">Action</Link>
                              <Link to="/movie-detail">Triler</Link>
                            </li>
                            <li>
                              <span>Release year:</span>
                              {moment(
                                this.props.movieDetail.ngayKhoiChieu
                              ).format("DD-MM-YYYY hh:mm")}
                            </li>
                            <li>
                              <span>Running time:</span> 120 min
                            </li>
                            <li>
                              <span>Country:</span>{" "}
                              <Link to="/movie-detail">USA</Link>
                            </li>
                          </ul>
                          <div className="card__description card__description--details">
                            {this.props.movieDetail.moTa}
                          </div>
                        </div>
                      </div>
                      {/* end card content */}
                    </div>
                  </div>
                </div>
                {/* end content */}
                {/* player */}
                <div className="col-12 col-xl-6">
                  <ReactPlayer
                    width=" 100% "
                    height=" 100% "
                    url={this.props.movieDetail.trailer}
                    frameborder="0"
                  ></ReactPlayer>
                </div>
                {/* end player */}
                <div className="col-12">
                  <div className="details__wrap">
                    {/* availables */}
                    <div className="details__devices">
                      <span className="details__devices-title">
                        Available on devices:
                      </span>
                      <ul className="details__devices-list">
                        <li>
                          <i className="icon ion-logo-apple" />
                          <span>IOS</span>
                        </li>
                        <li>
                          <i className="icon ion-logo-android" />
                          <span>Android</span>
                        </li>
                        <li>
                          <i className="icon ion-logo-windows" />
                          <span>Windows</span>
                        </li>
                        <li>
                          <i className="icon ion-md-tv" />
                          <span>Smart TV</span>
                        </li>
                      </ul>
                    </div>
                    {/* end availables */}
                    {/* share */}
                    <div className="details__share">
                      <span className="details__share-title">
                        Share with friends:
                      </span>
                      <ul className="details__share-list">
                        <li className="facebook">
                          <Link to="https://www.facebook.com/nhatlong13/">
                            <FacebookFilled />
                          </Link>
                        </li>
                        <li className="instagram">
                          <Link to="https://www.instagram.com/nlong_13/">
                            <InstagramFilled />
                          </Link>
                        </li>
                        <li className="mail">
                          <Link to="tranquoclong1310@gmail.com">
                            <MailFilled />
                          </Link>
                        </li>
                        <li className="github">
                          <Link to="https://github.com/tranquoclong">
                            <GithubFilled />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* end share */}
                  </div>
                </div>
              </div>
            </div>
            {/* end details content */}
          </section>
          {/* end details */}
          {/* content */}
          <section className="content">
            <div className="content__head">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="content__title">Discover</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 col-xl-8">
                  {/* content tabs */}
                  <Tabs
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                    defaultActiveKey="01-01"
                  >
                    {this.showMovieTime2()}
                  </Tabs>
                  {/* end content tabs */}
                </div>
                {/* sidebar */}
                <div className="col-12 col-lg-4 col-xl-4">
                  <div className="row">
                    {/* section title */}
                    <div className="col-12">
                      <h2 className="section__title section__title--sidebar">
                        You may also like...
                      </h2>
                    </div>
                    {/* card */}
                    {this.renderMovieSoLike()}
                    {/* end card */}
                  </div>
                </div>
                {/* end sidebar */}
              </div>
            </div>
          </section>
          {/* end content */}
        </>
      );
    }
  }
  componentDidMount() {
    const {
      params: { maPhim },
    } = this.props.match;
    this.props.dispatch(getMoiveDetail(maPhim));
    this.props.dispatch(getMovieTime(maPhim));
    this.props.dispatch(getMoiveList());
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
    movieTime: state.movie.movieTime,
    movieList: state.movie.movieList,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(withRouter(DetailMovie));
