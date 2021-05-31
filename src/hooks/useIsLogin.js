import { useSelector } from "react-redux";

export function useIsLogin() {
  const { user } = useSelector((state) => state.user);
  return {
    isLogin: user.accessToken && user,
    user,
  };
}
