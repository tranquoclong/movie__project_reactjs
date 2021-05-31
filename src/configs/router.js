import Home from "../pages/main/home";
import DetailMovie from "../pages/main/deail-movie";
import Booking from "../pages/main/booking";
import Dashboard from "../pages/admin/dashboard";
import Movie from "../pages/admin/movie";
import User from "../pages/admin/user";
import Signin from "../pages/main/login";
import Signup from "../pages/main/login/signup";
import NewDetail from "../pages/main/new-detail";
import Profile from "../pages/main/profile";
import ErrPage from "../components/err";
export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/movie-detail/:maPhim",
    exact: false,
    Component: DetailMovie,
  },
  {
    path: "/new-detail/:id",
    exact: false,
    Component: NewDetail,
  },
  {
    path: "/booking/:maLichChieu",
    exact: false,
    Component: Booking,
  },
  {
    path: "/signin",
    exact: false,
    Component: Signin,
  },
  {
    path: "/signup",
    exact: false,
    Component: Signup,
  },
  {
    path: "/profile",
    exact: false,
    Component: Profile,
  },
];

/**
 * admin router:
 *  - dashboard : http://localhost:3000/admin/dashboard
 *  - user : http://localhost:3000/admin/user
 *  - movie : http://localhost:3000/admin/movie
 */

export const adminRouter = [
  {
    path: "/admin/dashboard",
    exact: true,
    Component: Dashboard,
  },
  {
    path: "/admin/user",
    exact: true,
    Component: User,
  },
  {
    path: "/admin/movie",
    exact: true,
    Component: Movie,
  },
];

export const errRouter = [
  {
    path: "/err",
    exact: false,
    Component: ErrPage,
  },
];
