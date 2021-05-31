import { Link } from "react-router-dom";
export default function HeaderMenu() {
  return (
    <ul className="header__nav">
      {/* dropdown */}
      <li className="header__nav-item">
        <a
          className="dropdown-toggle header__nav-link"
          href="/"
          role="button"
          id="dropdownMenuHome"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Phim
        </a>
        <ul
          className="dropdown-menu header__dropdown-menu"
          aria-labelledby="dropdownMenuHome"
        >
          <li>
            <Link to="/">Phim Đang Chiếu</Link>
          </li>
          <li>
            <Link to="/">Phim Sắp Chiếu</Link>
          </li>
        </ul>
      </li>
      {/* end dropdown */}
      {/* dropdown */}
      <li className="header__nav-item">
        <a
          className="dropdown-toggle header__nav-link"
          href="/"
          role="button"
          id="dropdownMenuCatalog"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Rạp
        </a>
        <ul
          className="dropdown-menu header__dropdown-menu"
          aria-labelledby="dropdownMenuCatalog"
        >
          <li>
            <Link to="/">Catalog Grid</Link>
          </li>
          <li>
            <Link to="/">Catalog List</Link>
          </li>
          <li>
            <Link to="/">Details Movie</Link>
          </li>
          <li>
            <Link to="/">Details TV Series</Link>
          </li>
        </ul>
      </li>
      {/* end dropdown */}
      <li className="header__nav-item">
        <Link to="/" className="header__nav-link">
          Thành Viên
        </Link>
      </li>
      <li className="header__nav-item">
        <Link to="/" className="header__nav-link">
          Tin Tức
        </Link>
      </li>
      {/* dropdown */}
      <li className="dropdown header__nav-item">
        <a
          className="dropdown-toggle header__nav-link header__nav-link--more"
          href="/"
          role="button"
          id="dropdownMenuMore"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="icon ion-ios-more" />
        </a>
        <ul
          className="dropdown-menu header__dropdown-menu"
          aria-labelledby="dropdownMenuMore"
        >
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/err">404 Page</Link>
          </li>
        </ul>
      </li>
      {/* end dropdown */}
    </ul>
  );
}
