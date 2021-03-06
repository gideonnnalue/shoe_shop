const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = "First name must be between 2 and 30 characters";
  }
  if (!validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = "Last name must be between 2 and 30 characters";
  }
  if (!validator.isLength(data.phonenumber, { min: 5, max: 15 })) {
    errors.phonenumber = "Phone number must have a valid length";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (!validator.isMobilePhone(data.phonenumber)) {
    errors.phonenumber = "Phone Number is invalid";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  if (validator.isEmpty(data.firstname)) {
    errors.firstname = "First name field is required";
  }
  if (validator.isEmpty(data.lastname)) {
    errors.lastname = "Last name field is required";
  }
  if (validator.isEmpty(data.phonenumber)) {
    errors.phonenumber = "Phone Number name field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
