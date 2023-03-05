// fontawesome icons
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
// validation function
import { validation } from "../functions/validation";
// for notification
import { toast } from "react-toastify";

function UserForm() {
  // state
  const [name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // if key is not present create one, else do nothing
    if (!window.localStorage.getItem("allUsers")) {
      window.localStorage.setItem("allUsers", JSON.stringify([]));
    }
  }, []);

  // action after form submission
  function handleForm(e) {
    e.preventDefault();
    // validation check
    const result = validation(name, dob, phone, email);
    console.log(result);
    // if entries are correct save the data in localstorage
    if (result === true) {
      const newUser = {
        name,
        dob,
        phone,
        email,
      };
      const list = JSON.parse(window.localStorage.getItem("allUsers"));
      list.push(newUser);
      window.localStorage.setItem("allUsers", JSON.stringify(list));
      toast.success("New User added successfully");
      // else show error
    } else {
      toast.error(result);
    }
    // make field empty once user has submitted
    setName("");
    setEmail("");
    setPhone("");
    setdob("");
  }

  return (
    <div className="container py-5">
      <div className="row ">
        <div className="col-md-6 offset-md-3 box-shadow-blur ">
          <h3 className="text-center text-dark py-2 pt-4">
            <FontAwesomeIcon className="mx-2" icon={faUser} />
            User Details
          </h3>
          <form className="form-group px-3 py-1" onSubmit={handleForm}>
            <div className="my-4">
              <input
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Name"
                required
                value={name}
              />
            </div>
            <div className="my-4">
              <input
                onChange={(e) => setdob(e.target.value)}
                type="date"
                className="form-control"
                placeholder="Date of birth"
                required
                value={dob}
              />
            </div>
            <div className="my-4">
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Phone"
                required
                value={phone}
              />
              <p className="text-muted mx-2 font-size-12">
                Phone number should be exactly 10 digits long. Don't add +91 or
                0
              </p>
            </div>
            <div className="my-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email"
                required
                value={email}
              />
              <p className="text-muted mx-2 font-size-12">
                Make sure you enter a gmail id
              </p>
            </div>
            <div className="my-4">
              <button
                disabled={!name || !email || !phone}
                className="my-2 btn btn-secondary w-100"
              >
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="pt-4">
        <p className="text-muted text-center">
          Made with
          <FontAwesomeIcon className="mx-1 text-danger" icon={faHeart} /> by
          Deepak
        </p>
      </div>
    </div>
  );
}
export default UserForm;
