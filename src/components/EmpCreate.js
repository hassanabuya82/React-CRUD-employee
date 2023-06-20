import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpCreate() {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(false);
  const [validation, validationChange] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, phone, active };

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <div className="container">
            <div className="card" style={{ "text-align": "left" }}>
              <div className="card-title">
                <h2 className="m-3">Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <form onSubmit={handleSubmit}>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          value={id}
                          disabled
                          className="form-control"
                        ></input>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            value={name}
                            onMouseDown={(e) => validationChange(true)}
                            onChange={(e) => nameChange(e.target.value)}
                            className="form-control"
                          ></input>
                          {name.length == 0 && validation && (
                            <span className="text-danger">Enter Name</span>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            value={email}
                            onChange={(e) => emailChange(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            value={phone}
                            onChange={(e) => phoneChange(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                          ></input>
                          <label
                            checked={active}
                            onChange={(e) => activeChange(e.target.checked)}
                            className="form-check-label"
                          >
                            Is Active
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <button className="btn btn-success m-2" type="submit">
                            Save
                          </button>
                          <Link to="/" className="btn btn-danger m-2">
                            Back
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpCreate;
