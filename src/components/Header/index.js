import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import "./header.css";
import HeaderSearch from "./HeaderSearch";
import FormSearch from "./FormSearch";
import { useIsHidden } from "../../hooks/useIsHidden";
export default function Header() {
  const { hidden, handleClick } = useIsHidden();
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <HeaderLogo />
                <HeaderMenu />
                <HeaderSearch handleClick={handleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormSearch hidden={hidden} />
    </header>
  );
}
