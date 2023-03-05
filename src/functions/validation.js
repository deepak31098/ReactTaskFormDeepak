export const validation = function (name, dob, phone, email) {
  //   validate name
  if (name.length > 50) {
    return "Name must be less than 50 character";
  }
  //   validate dob
  const ageAtBirth = new Date(dob + "");
  const timeNow = Date.now();
  const age = (timeNow - ageAtBirth) / (1000 * 60 * 60 * 24 * 365);
  if (age < 18) {
    return "Underaged";
  }

  // validate phone
  if (phone.length != 10) {
    return "Phone number should be 10 digits long";
  }

  // validate presence of character
  const pattern = /^[0-9]{10}$/;
  if (!pattern.test(phone)) {
    return "Please Enter a valid phone number";
  }

  // here I am assuming @gmail.com is only accepted valid email id
  const domain = email.split("@")[1];
  if (domain !== "gmail.com") {
    return "Please enter a valid gmail id";
  }

  // check uniqueness of phone and email
  const list = JSON.parse(window.localStorage.getItem("allUsers"));
  for (let i = 0; i < list.length; i++) {
    let e = list[i];
    // validate duplicate phone
    if (e.phone == phone) {
      return "Phone number must be unique";
    }
    // validate duplicate email
    if (e.email == email) {
      return "Email must be unique";
    }
  }

  //   if user details validated return true
  return true;
};
