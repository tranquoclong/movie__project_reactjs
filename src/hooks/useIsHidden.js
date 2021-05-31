import { useState } from "react";

export function useIsHidden() {
  const [hidden, setHidden] = useState(false);
  function handleClick() {
    setHidden(!hidden);
  }
  return {
    hidden,
    handleClick,
  };
}
