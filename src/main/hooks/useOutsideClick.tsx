import { useEffect } from "react";

export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handleClickOutside: any
) {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
}
