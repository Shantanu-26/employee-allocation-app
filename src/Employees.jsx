import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Teams from './Teams';
import TeamMembers from "./TeamMembers";
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'


const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-md-6">
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
          <div className="card-collection">
            {employees.map((employee, index) => ( // Added unique key prop
            <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
            <img
              src={employee.gender === "female" ? femaleProfile : maleProfile}
              className="card-img-top"
              alt={employee.fullName}
            />
            <div className="card-body">
              <h5 className="card-title">Full Name: {employee.fullName}</h5>
              <p className="card-text">
                <b>Designation:</b> {employee.designation}
              </p>
            </div>
          </div>
              // <TeamMembers key={index} employees={employees} selectedTeam={selectedTeam} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Employees;
