import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// validation function
import { validation } from "../functions/validation";
// for notification
import { toast } from "react-toastify";

function EditDetails({
  // props
  name,
  dob,
  email,
  phone,
  setEdit,
  setName,
  setEmail,
  setdob,
  setPhone,
  setAllUsers,
}) {
  // action after form submission
  function handleFormEdit(e) {
    e.preventDefault();
    // validate entries
    const result = validation(name, dob, phone, email);
    // if entries are valid save the data in local storage
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
      toast.success("Edited user info successfully");
      setAllUsers(list);
      setEdit(false);
      // else give error messge
    } else {
      toast.error(result);
    }
    setName("");
    setEmail("");
    setPhone("");
    setdob("");
  }

  return (
    <div className="container-fluid py-3">
      <div className="row ">
        <div className="col-md-6 offset-md-3 box-shadow-blur ">
          <h3 className="text-center text-dark py-2 pt-4">
            <FontAwesomeIcon className="mx-2" icon={faEdit} />
            Edit Details
          </h3>
          <form className="form-group px-3 py-1" onSubmit={handleFormEdit}>
            <div className="my-4">
              <input
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Name"
                value={name}
                required
              />
            </div>
            <div className="my-4">
              <input
                type="date"
                onChange={(e) => setdob(e.target.value)}
                className="form-control"
                placeholder="Date of birth"
                value={dob}
                required
              />
            </div>
            <div className="my-4">
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Phone"
                value={phone}
                required
              />
              <p className="text-muted mx-2 font-size-12">
                Phone number should be exactly 10 digits long. Don't add +91 or
                0
              </p>
            </div>
            <div className="my-4">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email"
                value={email}
                required
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
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditDetails;
