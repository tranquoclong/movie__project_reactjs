import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FacebookFilled,
  InstagramFilled,
  GithubFilled,
  MailFilled,
} from "@ant-design/icons";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* footer list */}
          <div className="col-12 col-md-3">
            <h6 className="footer__title">Download Our App</h6>
            <ul className="footer__app">
              <li>
                <Link to="/">
                  <img
                    src="/img/Download_on_the_App_Store_Badge.svg"
                    alt="img"
                  />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="/img/google-play-badge.png" alt="img" />
                </Link>
              </li>
            </ul>
          </div>
          {/* end footer list */}
          {/* footer list */}
          <div className="col-6 col-sm-4 col-md-3">
            <h6 className="footer__title">Resources</h6>
            <ul className="footer__list">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Pricing Plan</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
            </ul>
          </div>
          {/* end footer list */}
          {/* footer list */}
          <div className="col-6 col-sm-4 col-md-3">
            <h6 className="footer__title">Legal</h6>
            <ul className="footer__list">
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Security</Link>
              </li>
            </ul>
          </div>
          {/* end footer list */}
          {/* footer list */}
          <div className="col-12 col-sm-4 col-md-3">
            <h6 className="footer__title">Contact</h6>
            <ul className="footer__list">
              <li>
                <Link to="/">0918889034</Link>
              </li>
              <li>
                <Link to="/">tranquoclong1310@gmail.com</Link>
              </li>
            </ul>
            <ul className="footer__social">
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
          {/* end footer list */}
          {/* footer copyright */}
          <div className="col-12">
            <div className="footer__copyright">
              <ul>
                <li>
                  <Link to="/">DRAGONCUTE</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* end footer copyright */}
        </div>
      </div>
    </footer>
  );
}
