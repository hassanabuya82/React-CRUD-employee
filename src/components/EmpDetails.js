import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function EmpDetails() {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
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
    <div>
      {empdata && (
        <div>
          <h1>
            The Employee's name is : {empdata.name} ({empdata.id})
          </h1>
          <h3>Contact Details : {empdata.phone}</h3>
          <h3>Employee's Email : {empdata.email}</h3>
          <Link className="btn btn-primary" to="/">
            Back
          </Link>
        </div>
      )}
    </div>
  );
}

export default EmpDetails;
