import { Link } from "react-router-dom";
import "./style/navigation.css";
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
  return (
    <div className="d-flex align-items-center justify-content-between py-2 m-md-2 px-md-2 border-bottom-purple box-shadow-blur-nav">
      <div className="text-left">
        <h2 className="text-dark m-0">A React Task</h2>
        <p className="text-muted cursive m-0">
          Where imagination comes to a standstill...
          <FontAwesomeIcon className="mx-2" icon={faFaceSmileWink} />
        </p>
      </div>
      <div className="px-2 py-1">
        <Link
          className="unline-hover mx-2 text-decoration-none text-secondary"
          to={"/"}
        >
          User Form
        </Link>
        <Link
          className="unline-hover mx-2 text-decoration-none text-secondary"
          to={"/view-details"}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
