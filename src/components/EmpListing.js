import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpListing() {
  const [empdata, empdatachange] = useState(null);

  const navigate = useNavigate();

  const loadDetail = (id) => {
    navigate("/employee/details/" + id);
  };
  const loadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const loadRemove = (id) => {
    if (window.confirm(`Do you want to delete? ${id}`)) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Deleted successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                        className="btn btn-success m-2"
                        href=""
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          loadRemove(item.id);
                        }}
                        className="btn btn-danger m-2"
                        href=""
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                        className="btn btn-warning m-2"
                        href=""
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmpListing;
