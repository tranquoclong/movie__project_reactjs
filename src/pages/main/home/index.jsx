import React, { Component } from "react";
import { getMoiveList } from "../../../store/actions/movie.action";
import { getNewList } from "../../../store/actions/movie.action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../../../components/movie-card";
import New from "../../../components/new";
import MovieList from "../../../components/movie-list";
import NewReview from "../../../components/newReview";
import { Tab, Tabs } from "react-bootstrap";
import classNames from "classnames";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classNames("slick__arrow", className)}
      style={{
        ...style,
        display: "block",
        transform: "translate(-50px, -300px)",
      }}
      onClick={onClick}
    >
      <img src="img/back-prev.png" alt="arrow_right" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classNames("slick__prev", className)}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <img src="img/back-arrow.png" alt="arrow_left" />
    </div>
  );
}

class Home extends Component {
  renderMovieList = () => {
    return this.props.movieList.map((movie, index) => {
      return (
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2" key={index}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };
  renderMovieListHome = () => {
    return this.props.movieList.map((movie, index) => {
      return <MovieList movie={movie} />;
    });
  };
  renderNewList = () => {
    return this.props.newList.map((movie, index) => {
      return (
        <div className="col-6 col-sm-12 col-lg-6" key={index}>
          <New movie={movie} />
        </div>
      );
    });
  };
  renderNewReview = () => {
    return this.props.newList.map((movie, index) => {
      return (
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2" key={index}>
          <NewReview movie={movie} />
        </div>
      );
    });
  };
  render() {
    var settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    var setting = {
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 2000,
    };
    if (this.props.loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <>
          <section className="home">
            {/* home bg */}
            <div className="owl-carousel home__bg">
              <Slider {...setting}>
                <div className="item home__cover">
                  <img src="img/home/home__bg.jpg " alt="home__bg.jpg" />
                </div>
                <div className="item home__cover">
                  <img src="img/home/home__bg2.jpg " alt="home__bg2.jpg" />
                </div>
                <div className="item home__cover">
                  <img src="img/home/home__bg3.jpg " alt="home__bg3.jpg" />
                </div>
                <div className="item home__cover">
                  <img src="img/home/home__bg4.jpg " alt="home__bg4.jpg" />
                </div>
              </Slider>
            </div>
            {/* end home bg */}
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="home__title">
                    <b>NEW ITEMS</b> OF THIS SEASON
                  </h1>
                </div>
                <div className="col-12 m-2">
                  <Slider {...settings}>{this.renderMovieListHome()}</Slider>
                </div>
              </div>
            </div>
          </section>
          <section className="expected">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="section__title">Expected premiere</h2>
                </div>
                {this.renderMovieList()}
              </div>
            </div>
            <div class="col-12">
              <Link to="#" class="section__btn">
                Show more
              </Link>
            </div>
          </section>
          <section className="content">
            <div className="content__head">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/* content title */}
                    <h2 className="content__title">News Moive</h2>
                    {/* end content title */}
                  </div>
                </div>
              </div>
            </div>
            <div className="container content__cont">
              <Tabs
                className="nav nav-tabs content__tabs tab-content"
                defaultActiveKey="new"
                id="myTabContent"
              >
                <Tab className="tab-pane fade" eventKey="new" title="New 24H">
                  <div className="row">{this.renderNewList()}</div>
                </Tab>
                <Tab className="tab-pane fade" eventKey="review" title="Review">
                  <div className="row">{this.renderNewReview()}</div>
                </Tab>
                <Tab
                  className="tab-pane fade"
                  eventKey="discount"
                  title="Discount"
                >
                  <div className="row">{this.renderNewList()}</div>
                </Tab>
              </Tabs>
            </div>
          </section>
        </>
      );
    }
  }
  componentDidMount() {
    this.props.dispatch(getMoiveList());
    this.props.dispatch(getNewList());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
    newList: state.movie.newList,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(Home);
