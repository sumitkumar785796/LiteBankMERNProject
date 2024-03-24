import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewAllCustomers = () => {
  const [view, setView] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("/customer");
        setView(resp.data.data);
      } catch (error) { }
    };
    fetchData();
  }, []);

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            {/* Content */}
          </div>
          <div className="col-auto">
            <Link to="/AddUser" className="btn btn-success">Add User</Link>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>View All Customers</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <>
            <tbody>
              {view && view.map((eachData, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.amount}</td>
                  <td>
                    <Link
                      to={`/view/${eachData._id}`}
                      style={{ margin: "15px" }}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        </table>
      </div>
    </>
  );
};

export default ViewAllCustomers;
