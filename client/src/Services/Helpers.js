export const getAccessTokenFromLocalStorage = () => {
  let user = JSON.parse(localStorage.getItem("FoodApp"));
  return user;
};

export const setAccessTokenFromLocalStorage = (key) => {
  localStorage.setItem("FoodApp", JSON.stringify(key));
};
export const getAdminAccessTokenFromLocalStorage = () => {
  let user = JSON.parse(localStorage.getItem("FoodAppadmin"));
  return user;
};

export const setAdminAccessTokenFromLocalStorage = (key) => {
  localStorage.setItem("FoodAppadmin", JSON.stringify(key));
};

export const setOtpTokenToLocalStorage = (otpToken) =>
  localStorage.setItem("otpTokenuserdgmp", otpToken);

export const getOtpTokenFromLocalStorage = () =>
  localStorage.getItem("otpTokenuserdgmp");

export const isOtpTokenRemoveFromLocalStorage = () => {
  localStorage.removeItem("otpToken");
  return !localStorage.getItem("optToken") ? true : false;
};

export const setUserDetailsToLocalStorage = (userDetails) =>
  localStorage.setItem("FoodApp", JSON.stringify(userDetails));

export const getUserFromLocalStorage = () => {
  let user = typeof window !== "undefined" && getUserStringFromLocalStorage();
  return user ? user : null;
};
export const getUserStringFromLocalStorage = () => {
  let user =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("FoodAppadname"));
  return user ? user : null;
};

export const isRemoveUserFromLocalStorage = () => {
  localStorage.removeItem("FoodApp");
  localStorage.removeItem("FoodAppname");
  localStorage.removeItem("FoodApprefer");
  localStorage.removeItem("FoodAppprofile");
  localStorage.removeItem("otpTokenuserdgmp");
  localStorage.removeItem("FoodAppphone");
  return !JSON.parse(localStorage.getItem("FoodApp")) ? true : false;
};

export const doesUserExistInLocalStorage = () => {
  if (!getUserFromLocalStorage()) {
    window.location.href = "/signin";
    return;
  }
  return;
};

export const getUserIdFromLocalStorage = () => {
  const details = JSON.parse(localStorage?.getItem("FoodApp"));

  return details?.user?._id;
};
export const getUserImageFromLocalStorage = () => {
  const profile =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("FoodAppprofile"))
      : "";
  return profile;
};
export const setUserImageToLocalStorage = (userImage) => {
  typeof window !== "undefined" &&
    localStorage.setItem("FoodAppadprofile", JSON.stringify(userImage));
};
export const removeUserImageFromLocalStorage = () => {
  typeof window !== "undefined" && localStorage.removeItem("FoodAppadprofile");
};
export const setUserReferrer = (referrer) => {
  typeof window !== "undefined" &&
    localStorage.setItem("FoodAppadrefer", JSON.stringify(referrer));
};
export const getUserRefererFromLocalStorage = () => {
  const profile =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("FoodAppadrefer"))
      : "";
  return profile;
};

export const getUsernameFromLocalstorage = () => {
  const profile =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("FoodAppadname"))
      : "";
  return profile;
};
export const getUserPhoneFromLocalstorage = () => {
  const profile =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("FoodAppadphone"))
      : "";
  return profile;
};
export const setUsernameToLocalStorage = (name) => {
  typeof window !== "undefined" &&
    localStorage.setItem("FoodAppadname", JSON.stringify(name));
};
export const setUserphoneToLocalStorage = (name) => {
  typeof window !== "undefined" &&
    localStorage.setItem("FoodAppadphone", JSON.stringify(name));
};

export const setUnverifiedEmailToLocalStorage = (email) => {
  localStorage.setItem("FoodApp-unverified", JSON.stringify(email));
};
export const getUnverifiedEmailFromLocalstorage = () => {
  const resp = JSON.parse(localStorage.getItem("FoodApp-unverified"));
  return resp;
};
export const setForgotEmailToLocalStorage = (email) => {
  localStorage.setItem("FoodApp-unverified", JSON.stringify(email));
};
export const getForgotEmailFromLocalstorage = () => {
  const resp = JSON.parse(localStorage.getItem("FoodApp-unverified"));
  return resp;
};

export const setAdminDetailsToLocalStorage = (AdminDetails) =>
  localStorage.setItem("FoodApp", JSON.stringify(AdminDetails));

export const getAdminFromLocalStorage = () => {
  let Admin = typeof window !== "undefined" && getAdminStringFromLocalStorage();
  return Admin ? Admin : null;
};
export const getAdminStringFromLocalStorage = () => {
  let Admin =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("FoodAppadminname"));
  return Admin ? Admin : null;
};
export const setAdminUsernameToLocalStorage = (name) => {
  typeof window !== "undefined" &&
    localStorage.setItem("FoodAppadminname", JSON.stringify(name));
};
