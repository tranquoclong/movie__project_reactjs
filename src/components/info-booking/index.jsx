import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoiveDetail } from "../../../store/actions/movie.action";
import { withRouter } from "react-router";
class InfoBooking extends Component {
  render() {
    return (
      <div class="price price--premium">
        <div class="price__item price__item--first">
          <span>Tên Phim</span>
          <span>{this.props.movieDetail.tenPhim}</span>
        </div>
        <div class="price__item">
          <span>1 Month</span>
        </div>
        <div class="price__item">
          <span>Full HD</span>
        </div>
        <div class="price__item">
          <span>Lifetime Availability</span>
        </div>
        <div class="price__item">
          <span>TV &amp; Desktop</span>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const {
      params: { maPhim },
    } = this.props.match;
    this.props.dispatch(getMoiveDetail(maPhim));
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
  };
};

export default connect(mapStateToProps)(withRouter(InfoBooking));
