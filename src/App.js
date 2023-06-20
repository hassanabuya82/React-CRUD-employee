import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./components/EmpListing";
import EmpCreate from "./components/EmpCreate";
import EmpDetails from "./components/EmpDetails";
import EmpEdit from "./components/EmpEdit";

function App() {
  return (
    <div className="App">
      <h1>React JS</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route
            path="/employee/details/:empid"
            element={<EmpDetails />}
          ></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
