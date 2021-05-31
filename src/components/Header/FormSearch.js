import classNames from "classnames";
import React from "react";
function FormSearch(props) {
  const hidden = props.hidden;
  return (
    <form
      className={classNames(
        "header__search",
        hidden && "header__search--active"
      )}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__search-content">
              <input
                type="text"
                placeholder="Search for a movie, TV Series that you are looking for"
              />
              <button type="button">search</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormSearch;
