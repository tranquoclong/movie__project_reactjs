import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  PROFILE_FAILED,
  PROFILE_SUCCESS,
  PUT_LOGIN_FAILED,
  PUT_LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from "../constants/user.const";
import { startLoading, stopLoading } from "../actions/common.action";
import { notification } from "antd";
import Swal from "sweetalert2";
export const postLogin = (taiKhoan, matKhau, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // luu data xuong localStorage
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        // gửi lên store
        dispatch(postLoginSuccess(res.data));
        // quay trở lại trang trước đó
        history.goBack();
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(postLoginFailed(err));
        notification.error({
          message: "Oops!",
          description: "Account or password is not wrong!",
        });
      });
  };
};

const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};
export const postRegistration = (values, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: {
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        email: values.email,
        soDt: values.soDt,
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: values.hoTen,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        if (res.data) {
          Swal.fire({
            icon: "success",
            title: "Sign Up Success",
            showConfirmButton: false,
            timer: 3000,
          });
          return history.push("/");
        }
        // gửi lên store
        dispatch(postRegistrationSuccess(res.data));
        // quay trở lại trang trước đó
        history.goBack();
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(postRegistrationFailed(err));
        notification.error({
          message: "Oops!",
          description: "Account already exists !",
        });
      });
  };
};

const postRegistrationSuccess = (user) => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: user,
  };
};

const postRegistrationFailed = (err) => {
  return {
    type: REGISTRATION_FAILED,
    payload: err,
  };
};

export const putLogin = (values) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const token = user.accessToken;
    dispatch(startLoading());
    // call api
    axios({
      method: "PUT",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: {
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        email: values.email,
        soDt: values.soDt,
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: values.hoTen,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        Swal.fire({
          icon: "success",
          title: "Update successful",
          showConfirmButton: false,
          timer: 1500,
        });
        // gửi lên store
        dispatch(putLoginSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(putLoginFailed(err));
        notification.error({
          message: "Oops!",
          description: "Account or password is not wrong!",
        });
      });
  };
};

const putLoginSuccess = (user) => {
  return {
    type: PUT_LOGIN_SUCCESS,
    payload: user,
  };
};

const putLoginFailed = (err) => {
  return {
    type: PUT_LOGIN_FAILED,
    payload: err,
  };
};
export const postProfileUser = (user) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: {
        taiKhoan: user.taiKhoan,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postProfileSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postProfileFailed(err.data));
        console.log(err);
      });
  };
};
const postProfileSuccess = (userName) => {
  return {
    type: PROFILE_SUCCESS,
    payload: userName,
  };
};

const postProfileFailed = (err) => {
  return {
    type: PROFILE_FAILED,
    payload: err,
  };
};
