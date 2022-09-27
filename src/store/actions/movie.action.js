import axios from "axios";
import {
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_TIME_FAILED,
  GET_MOVIE_TIME_SUCCESS,
  GET_NEW_DETAIL_FAILED,
  GET_NEW_DETAIL_SUCCESS,
  GET_NEW_LIST_FAILED,
  GET_NEW_LIST_SUCCESS,
} from "../constants/movie.const";
import { startLoading, stopLoading } from "./common.action";

// action call api
export const getMoiveList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getMoiveListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getMoiveListFailed(err));
      });
  };
};

const getMoiveListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};

const getMoiveListFailed = (err) => {
  return {
    type: GET_MOVIE_LIST_FAILED,
    payload: err,
  };
};

// get detail

export const getMoiveDetail = (movieCode) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getMoiveDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getMoiveDetailFailed(err));
      });
  };
};
const getMoiveDetailSuccess = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
  };
};

const getMoiveDetailFailed = (err) => {
  return {
    type: GET_MOVIE_DETAIL_FAILED,
    payload: err,
  };
};

// new
export const getNewList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: "https://5fd209f5b485ea0016eef446.mockapi.io/new",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getNewListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getNewListFailed(err));
      });
  };
};

const getNewListSuccess = (newList) => {
  return {
    type: GET_NEW_LIST_SUCCESS,
    payload: newList,
  };
};

const getNewListFailed = (err) => {
  return {
    type: GET_NEW_LIST_FAILED,
    payload: err,
  };
};
// get new detail

export const getNewDetail = (newCode) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: `https://5fd209f5b485ea0016eef446.mockapi.io/new/${newCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getNewDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getNewDetailFailed(err));
      });
  };
};
const getNewDetailSuccess = (movieDetail) => {
  return {
    type: GET_NEW_DETAIL_SUCCESS,
    payload: movieDetail,
  };
};

const getNewDetailFailed = (err) => {
  return {
    type: GET_NEW_DETAIL_FAILED,
    payload: err,
  };
};
// get heThongRapChieu

export const getMovieTime = (movieCode) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getMoiveTimeSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getMoiveTimeFailed(err));
      });
  };
};
const getMoiveTimeSuccess = (movieTime) => {
  return {
    type: GET_MOVIE_TIME_SUCCESS,
    payload: movieTime,
  };
};

const getMoiveTimeFailed = (err) => {
  return {
    type: GET_MOVIE_TIME_FAILED,
    payload: err,
  };
};
