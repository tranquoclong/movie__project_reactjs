import React, { useCallback, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row } from "react-bootstrap";
import { putLogin } from "../../../store/actions/user.action";
import { Table, Tooltip } from "antd";
import axios from "axios";
const Profile = ({ user }) => {
  const [toggle, setToggle] = useState(true);
  const [userName, setUserName] = useState({});
  const result = useState(0);
  console.log("result : ", result); //   [state, setState];
  const dispatch = useDispatch();
  const getProfileUser = useCallback(() => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: {
        taiKhoan: user.taiKhoan,
      },
    })
      .then((res) => {
        const temp = res.data.thongTinDatVe.map((item, index) => {
          return {
            key: index,
            ...item,
          };
        });
        setUserName({
          ...res.data,
          thongTinDatVe: temp,
        });
      })
      .catch((err) => console.log(err));
  }, [user.taiKhoan]);
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(
    () => {
      handleScrollTop();
      getProfileUser();
    },
    // eslint-disable-next-line
    []
  );

  //   tạo ra state để lưu info user
  const [userProfile, setUserProfile] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    hoTen: "",
    soDt: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log({ value, name });
    // setState
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putLogin(userProfile));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };
  //table
  const dataSource = userName.thongTinDatVe;
  const columns = [
    {
      title: "Mã Vé",
      key: "maVe",
      render: (item) => (
        <Tooltip placement="topLeft" title={item.maVe}>
          <span>{item.maVe}</span>
        </Tooltip>
      ),
    },
    {
      title: "Tên Phim",
      key: "tenPhim",
      render: (item) => (
        <Tooltip placement="topLeft" title={item.tenPhim}>
          <span>{item.tenPhim}</span>
        </Tooltip>
      ),
    },
    {
      title: "Ngày Đặt",
      key: "ngayDat",
      render: (item) => (
        <Tooltip placement="topLeft" title={item.ngayDat}>
          <span>{item.ngayDat}</span>
        </Tooltip>
      ),
    },
    {
      title: "Giá Vé",
      key: "giaVe",
      render: (item) => (
        <Tooltip placement="topLeft" title={item.giaVe.toLocaleString()}>
          <span>{item.giaVe.toLocaleString()}</span>
        </Tooltip>
      ),
    },
    {
      title: "Tên Rạp",
      key: "tenHeThongRap",
      render: (item) => {
        let tenRap = item.danhSachGhe[0].tenHeThongRap;
        return (
          <Tooltip placement="topLeft" title={tenRap}>
            <span>{tenRap}</span>
          </Tooltip>
        );
      },
    },
    {
      title: "Phòng",
      key: "tenRap",
      render: (item) => {
        let tenRap = item.danhSachGhe[0].tenRap;
        return (
          <Tooltip placement="topLeft" title={tenRap}>
            <span>{tenRap}</span>
          </Tooltip>
        );
      },
    },
    {
      title: "Ghế",
      key: "danhSachGhe",
      render: (item) => {
        let tenGhe = item.danhSachGhe
          .map((item) => {
            return item.tenGhe;
          })
          .join();
        return (
          <Tooltip
            style={{ backgroundColor: "red" }}
            placement="topLeft"
            title={tenGhe}
          >
            <span>{tenGhe}</span>
          </Tooltip>
        );
      },
    },
  ];
  return (
    <div className="sign section--bg" data-bg="img/section/section.jpg">
      <div className="container profile">
        <div className="row profile__row">
          <div className="col-12 col-lg-4 col-xl-4 profile__min">
            <div className="profile__content">
              {/* authorization form */}
              <img
                src="/img/avatar.jpg"
                alt="avartar"
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
              <ul className="profile__list">
                <li>
                  <button className="sign__btn" onClick={() => setToggle(true)}>
                    Personal Information
                  </button>
                </li>
                <li>
                  <button
                    className="sign__btn"
                    onClick={() => setToggle(false)}
                  >
                    Booking Information
                  </button>
                </li>
              </ul>
              {/* end authorization form */}
            </div>
          </div>
          <div className="col-12 col-lg-8 col-xl-8 profile__wrapper">
            {toggle ? (
              <Form
                className="profile__form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                style={{ margin: "150px 0" }}
              >
                <Form.Group as={Row} className="sign__group">
                  <Form.Label className="profile__text" column>
                    UserName
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="profile__input"
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={handleChange}
                    placeholder="UserName"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid UserName.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Row} className="sign__group">
                  <Form.Label className="profile__text" column>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    className="profile__input"
                    name="matKhau"
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Password.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Row} className="sign__group">
                  <Form.Label className="profile__text" column>
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="profile__input"
                    id="taiKhoan"
                    name="hoTen"
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Row} className="sign__group">
                  <Form.Label className="profile__text" column>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="profile__input"
                    id="taiKhoan"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Row} className="sign__group">
                  <Form.Label className="profile__text" column>
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="profile__input"
                    id="taiKhoan"
                    name="soDt"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Phone Number.
                  </Form.Control.Feedback>
                </Form.Group>
                <button
                  className="sign__btn"
                  type="submit"
                  style={{ width: "300px" }}
                >
                  EDIT PROFILES
                </button>
              </Form>
            ) : (
              <Form
                className="profile__form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                style={{ margin: "150px 0", padding: "50px 25px " }}
              >
                <div className="info_ticket">
                  <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{ pageSize: 6 }}
                  />
                </div>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Profile);
