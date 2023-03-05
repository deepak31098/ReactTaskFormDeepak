import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import EditDetails from "./EditDetails";

function ViewDetails() {
  // state of saving edit values
  const [name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // all users present in localstorage to be stored in allUser state
  const [allUser, setAllUsers] = useState([]);
  // state to know whether user has clicked edit button or not
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    // update the list whenever component mounts
    const list = JSON.parse(window.localStorage.getItem("allUsers"));
    setAllUsers(list);
  }, []);

  // delete entry function
  function handleDelete(user) {
    if (!window.confirm("Given entry will be deleted. Are you sure?")) {
      return;
    }

    let list = JSON.parse(window.localStorage.getItem("allUsers"));

    // filter the data in local storage using phone as it is unique
    list = list.filter((e) => e.phone !== user.phone);
    window.localStorage.setItem("allUsers", JSON.stringify(list));
    setAllUsers(list);
  }

  // edit function
  // receieve current value as argument and set as prefill value in edit form
  function handleEdit(user) {
    window.alert(
      "Don't go back until changes are saved otherwise data will deleted"
    );
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setdob(user.dob);

    // edit has been click hence set setEdit to true to render edit page
    setEdit(true);
    // remove current entry from local storage
    let list = JSON.parse(window.localStorage.getItem("allUsers"));
    list = list.filter((e) => e.phone !== user.phone);
    window.localStorage.setItem("allUsers", JSON.stringify(list));
    setAllUsers(list);
  }

  return (
    <div className="container py-5">
      <div className="row ">
        {/* show table when user had not clicked the edit button */}

        {!edit && (
          <div className="col-md-10 offset-md-1 box-shadow-blur ">
            <h3 className="text-center text-dark py-2 pt-4">
              <FontAwesomeIcon className="mx-2" icon={faEye} />
              View Details
            </h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>D.O.B.</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* render all entries present in local storage */}
                {allUser.map((user) => {
                  return (
                    <tr key={user.phone}>
                      <td className="text-break">{user.name}</td>
                      <td>{user.dob}</td>
                      <td>{user.phone}</td>
                      <td className="text-break">{user.email}</td>
                      <td className="text-center">
                        <button
                          onClick={() => handleEdit(user)}
                          className="m-2 btn btn-sm btn-warning"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user)}
                          className="m-2 btn btn-sm btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {/* show form to edit data once user has clicked the edit button */}

        {edit && (
          <EditDetails
            name={name}
            setName={setName}
            dob={dob}
            setdob={setdob}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            setEdit={setEdit}
            setAllUsers={setAllUsers}
          />
        )}
      </div>
    </div>
  );
}
export default ViewDetails;
