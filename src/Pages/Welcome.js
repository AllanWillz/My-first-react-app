import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  return (
    <>
      <h1 className="text-success">Done</h1>
      <h4 className="text-center mt-2">
        Registration was Successful...........
      </h4>

      <div className="card mt-4">
        <h6 className=" card-header bg-dark text-white">full name</h6>
        <div className="card-body">
          <ul className="List-group List-group-flush">
            <li className="list-group-item">
              Username: <span className="h6 text-succes"></span>
            </li>
            <li className="list-group-item">
              Email: <span className="h6 text-succes"></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Welcome;
