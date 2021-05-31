import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../../store/actions/user.action";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
function Signin() {
  const result = useState(0);
  console.log("result : ", result); //   [state, setState];

  const dispatch = useDispatch();
  const history = useHistory();

  //   tạo ra state để lưu info user
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log({ value, name });
    // setState
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(user.taiKhoan, user.matKhau, history));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div className="sign section--bg" data-bg="img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              {/* authorization form */}
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="sign__form"
                style={{ margin: "90px 0" }}
              >
                <a href="/" className="sign__logo">
                  <img src="img/logo.svg" alt="logo" />
                </a>
                <Form.Group className="sign__group">
                  <Form.Control
                    type="text"
                    className="sign__input"
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
                <Form.Group className="sign__group">
                  <Form.Control
                    type="password"
                    className="sign__input"
                    name="matKhau"
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Password.
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="sign__group sign__group--checkbox">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <button className="sign__btn" type="submit">
                  Sign in
                </button>
                <span className="sign__text">
                  Don't have an account? <Link to="/signup">Sign up!</Link>
                </span>
                <span className="sign__text">
                  <Link to="/signin">Forgot password?</Link>
                </span>
              </Form>
              {/* end authorization form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
