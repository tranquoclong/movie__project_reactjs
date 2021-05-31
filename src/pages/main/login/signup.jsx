import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postRegistration } from "../../../store/actions/user.action";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  //   tạo ra state để lưu info user
  const [user, setUser] = useState({
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
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegistration(user, history));
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
              {/* registration form */}
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="sign__form"
                style={{ margin: "90px 0" }}
              >
                <Link to="/" className="sign__logo">
                  <img src="img/logo.svg" alt="logo" />
                </Link>
                <div className="row">
                  <div className="col-12 col-sm-6">
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
                    <Form.Group className="sign__group">
                      <Form.Control
                        type="password"
                        className="sign__input"
                        name="matKhau"
                        onChange={handleChange}
                        placeholder="Password Authentication"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Password Authentication.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-12 col-sm-6">
                    <Form.Group className="sign__group">
                      <Form.Control
                        type="email"
                        className="sign__input"
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
                    <Form.Group className="sign__group">
                      <Form.Control
                        type="text"
                        className="sign__input"
                        name="hoTen"
                        onChange={handleChange}
                        placeholder="Name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="sign__group">
                      <Form.Control
                        type="number"
                        className="sign__input"
                        name="soDt"
                        onChange={handleChange}
                        placeholder="Phone Numbers"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Phone Numbers.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>
                <div className="sign__group sign__group--checkbox">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <label htmlFor="remember">
                    I agree to the <Link to="/signup">Privacy Policy</Link>
                  </label>
                </div>
                <button className="sign__btn" type="submit">
                  Sign up
                </button>
                <span className="sign__text">
                  Already have an account? <Link to="/signin">Sign in!</Link>
                </span>
              </Form>
              {/* registration form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
