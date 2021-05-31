import axios from "axios";
import {
  GET_BOOKING_LIST_SUCCESS,
  GET_BOOKING_LIST_FAILED,
} from "../constants/booking.const";
import { startLoading, stopLoading } from "./common.action";

// action call api
export const getBookingList = (maLichChieu) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getBookingListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getBookingListFailed(err));
      });
  };
};

const getBookingListSuccess = (bookingList) => {
  return {
    type: GET_BOOKING_LIST_SUCCESS,
    payload: bookingList,
  };
};

const getBookingListFailed = (err) => {
  return {
    type: GET_BOOKING_LIST_FAILED,
    payload: err,
  };
};
