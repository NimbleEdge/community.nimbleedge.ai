export const screenType = () => {
  if (typeof window === "object") {
    return window.innerWidth <= 949 ? "MOBILE" : "BIG_SCREEN";
  }
  return "MOBILE";
};
