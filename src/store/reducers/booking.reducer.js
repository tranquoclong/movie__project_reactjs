import {
  GET_BOOKING_LIST_SUCCESS,
  GET_BOOKING_LIST_FAILED,
} from "../constants/booking.const";

const initialState = {
  infoBooking: {},
  listChair: [],
};

const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKING_LIST_SUCCESS:
      return {
        ...state,
        listChair: payload.danhSachGhe,
        infoBooking: payload.thongTinPhim,
      };
    case GET_BOOKING_LIST_FAILED:
      return { ...state, errors: payload };
    case "DANG_CHON": {
      const { listChair } = state;
      const index = listChair.findIndex(
        (chair) => chair.maGhe === payload.maGhe
      );
      if (index !== -1) {
        const oldChair = listChair[index];
        const newChair = { ...oldChair, dangChon: !oldChair.dangChon };
        listChair[index] = newChair;
      }
      return { ...state };
    }
    default:
      return state;
  }
};

export default bookingReducer;
