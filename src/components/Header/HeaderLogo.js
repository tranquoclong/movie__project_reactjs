import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <Link to="/" className="header__logo">
      <img src="/img/logo.svg" alt="Go to homepage" />
    </Link>
  );
}
