export const isBlank = (name) => {
  //Check the name only contains whitespace or empy.
  return !name || /^\s*$/.test(name);
};

export const isValidEmailId = (email) => {
  return (
    !isBlank(email) &&
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};

export const isValidPhoneNumber = (number) => {
  if (isBlank(number)) {
    return false;
  }
  const phoneNum = number.replace("/[^d]/g", "");
  return phoneNum.length > 6 && phoneNum.length < 14;
};
