import TeamMemberCard from "./TeamMembersCard";

const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return (
    employees.map((employee) => (
      <TeamMemberCard 
        key={employee.id}  // Add key prop with unique value
        employee={employee}
        handleEmployeeCardClick={handleEmployeeCardClick} 
        selectedTeam={selectedTeam} 
      />
    ))
  );
}

export default TeamMembers;
