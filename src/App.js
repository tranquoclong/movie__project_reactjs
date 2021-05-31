import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { adminRouter, errRouter, mainRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";
import RouterAdminTemplate from "./templates/admin";
import RouterErrTemplate from "./templates/Err";
// import "antd/dist/antd.css";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterAdminTemplate>
      );
    });
  };
  const renderErrRouter = () => {
    return errRouter.map(({ path, exact, Component }) => {
      return (
        <RouterErrTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterErrTemplate>
      );
    });
  };
  return (
    <>
      {/* khởi tạo router cho dự án */}
      <BrowserRouter>
        {/* mỗi url thì chỉ hiển thị 1 trang duy nhất */}
        <Switch>
          {/* url === http://localhost:3000/ */}
          {/* url === http://localhost:3000/movie-detail */}
          {/* url === http://localhost:3000/booking */}
          {renderMainRouter()}
          {renderAdminRouter()}
          {renderErrRouter()}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
