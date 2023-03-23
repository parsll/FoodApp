import { useState } from "react";
import moment from "moment";
export const useForm = (initialStates) => {
  const [states, setStates] = useState(initialStates);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (fieldValues = states) => {
    const {
      firstName,
      lastName,
      fullName,
      phoneNumber,
      password,
      email,
      detailAddress,
      currentPassword,
      newPassword,
      confirmPassword,
      otp1,
      otp2,
      otp3,
      otp4,
      area,
      contact_number,
      donor_note,
      amount,
      description,
      expiry,
    } = fieldValues;
    let temp = { ...errors };
    if ("area" in fieldValues) temp.area = area ? "" : "Area is required";
    if ("addressType" in fieldValues)
      temp.firstName = firstName ? "" : "Type is required!";
    if ("firstName" in fieldValues)
      temp.firstName = firstName ? "" : "First Name is required!";
    if ("fullName" in fieldValues)
      temp.fullName = fullName ? "" : "Full Name is required!";

    if ("lastName" in fieldValues)
      temp.lastName = lastName ? "" : "Last Name is required!";

    if ("phoneNumber" in fieldValues) {
      temp.phoneNumber =
        (phoneNumber ? "" : "Phone Number is required!") ||
        (/^9\d{9}$/.test(phoneNumber)
          ? ""
          : "Phone Number must be valid 10 digit!");
    }
    if ("password" in fieldValues)
      temp.password = password ? "" : "Password is required!";
    if ("email" in fieldValues) temp.email = email ? "" : "Email is required!";

    if ("currentPassword" in fieldValues)
      temp.currentPassword = currentPassword
        ? ""
        : "Current Password is required!";

    if ("newPassword" in fieldValues)
      temp.newPassword =
        (newPassword ? "" : "New Password is required!") ||
        (newPassword.length >= 8
          ? ""
          : "Password must be more than 8 characters");

    if ("confirmPassword" in fieldValues) {
      temp.confirmPassword =
        (confirmPassword ? "" : "Confirm Password is required!") ||
        (states.newPassword !== confirmPassword
          ? "Password doesn't match!"
          : "");
    }

    if ("email" in fieldValues && touched.email) {
      temp.email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
        ? ""
        : "Email must be valid";
    }

    if ("detailAddress" in fieldValues)
      temp.detailAddress = detailAddress ? "" : " Address line is required!";

    if ("otp1" in fieldValues) {
      temp.otp1 = otp1 ? "" : "Required";
    }
    if ("otp2" in fieldValues) {
      temp.otp2 = otp2 ? "" : "Required";
    }
    if ("otp3" in fieldValues) {
      temp.otp3 = otp3 ? "" : "Required";
    }
    if ("otp4" in fieldValues) {
      temp.otp4 = otp4 ? "" : "Required";
    }
    if ("area" in fieldValues) {
      temp.area = "";
    }
    if ("contact_number" in fieldValues) {
      temp.contact_number = contact_number ? "" : "Required";
    }
    if ("donor_note" in fieldValues) {
      temp.donor_note = donor_note ? "" : "Required";
    }
    if ("amount" in fieldValues) {
      temp.amount =
        (amount ? "" : "Required") ||
        (!isNaN(+amount) ? "" : "Amount must be valid");
    }

    if ("description" in fieldValues) {
      temp.description = description ? "" : "Decsription is required";
    }

    if ("expiry" in fieldValues) {
      console.log(moment.duration(moment(expiry).diff(new moment())).asDays());
      temp.expiry =
        (expiry ? "" : "Expiry is required") ||
        (moment.duration(moment(expiry).diff(new moment())).asDays() > 1
          ? ""
          : "Expiry Date must be valid");
    }
    // const keys = Object.keys(fieldValues);
    // for (let i = 0; i < keys.length; i++) {
    //   const key = keys[i];
    //   const value = fieldValues[key];
    //   if (!temp[key]) {
    //     // Only apply default validation if no other validation error exists
    //     if (!value.trim()) {
    //       console.log("aher");
    //       temp[key] = "This field is required";
    //     } else {
    //       console.log(temp[key]);
    //       temp[key] = "";
    //     }
    //   }
    // }
    setErrors({ ...temp });
    if (fieldValues === states)
      return Object.values(temp).every((item) => item === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStates({ ...states, [name]: value });

    validate({ [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  return {
    states,
    handleChange,
    errors,
    touched,
    validate,
  };
};
