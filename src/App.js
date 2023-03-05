import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserForm from "./components/userform";
import Navigation from "./components/Navigation";
import ViewDetails from "./components/ViewDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// form will be displayed as home and edit and delete will be shown once user enter a data
function App() {
  return (
    <div className="container-fluid">
      <ToastContainer position="top-left" />
      <Navigation />
      <Routes>
        <Route path="/" element={<UserForm />}></Route>
        <Route path="/view-details" element={<ViewDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
