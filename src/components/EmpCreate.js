import { Link } from "react-router-dom";

function EmpCreate() {
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
                  <form>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>ID</label>
                        <input className="form-control"></input>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Name</label>
                          <input className="form-control"></input>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input className="form-control"></input>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Phone</label>
                          <input className="form-control"></input>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                          ></input>
                          <label className="form-check-label">Is Active</label>
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
