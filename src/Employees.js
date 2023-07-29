import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employee = () => {
    const [selectedTeam, setTeam] = useState('TeamB');

    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: 'Bob Jones',
            designation: 'JavaScript Developer',
            gender: 'male',
            teamName: 'TeamA',
        },
        {
            id: 2,
            fullName: 'Jill Bailey',
            designation: 'Node developer',
            gender: 'female',
            teamName: 'TeamA',
        },
        {
            id: 3,
            fullName: 'Gail Shephar',
            designation: 'Java developer',
            gender: 'female',
            teamName: 'TeamA',
        },
        {
            id: 4,
            fullName: 'Sam Reynolds',
            designation: 'React Developer',
            gender: 'male',
            teamName: 'TeamB',
        },
        {
            id: 5,
            fullName: 'David Henry',
            designation: 'DotNet developer',
            gender: 'Male',
            teamName: 'TeamB',
        },
        {
            id: 6,
            fullName: 'Sarah Blake',
            designation: 'SQL Server DBA',
            gender: 'female',
            teamName: 'TeamB',
        },
        {
            id: 7,
            fullName: 'James Bennet',
            designation: 'Angular Developer',
            gender: 'male',
            teamName: 'TeamC',
        },
        {
            id: 8,
            fullName: 'Jessica Faye',
            designation: 'API developer',
            gender: 'female',
            teamName: 'TeamC',
        },
        {
            id: 9,
            fullName: 'Lita Stone',
            designation: 'C++ developer',
            gender: 'female',
            teamName: 'TeamC',
        },
        {
            id: 10,
            fullName: 'Daniel Young',
            designation: 'Python Developer',
            gender: 'male',
            teamName: 'TeamD',
        },
        {
            id: 11,
            fullName: 'Adrian Jacobs',
            designation: 'Vue developer',
            gender: 'male',
            teamName: 'TeamD',
        },
        {
            id: 12,
            fullName: 'Devin Monroe',
            designation: 'Graphic Designer',
            gender: 'male',
            teamName: 'TeamD',
        },
    ]);

    // return (
    //     <main>
    //         {
    //             employees.map((employee)=>{
    //                 return(
    //                     <>
    //                         <p>{employee.id}</p>
    //                         <p>{employee.fullName}</p>
    //                         <p>{employee.designation}</p>
    //                         <p>{employee.gender}</p>
    //                         <p>{employee.teamName}</p>
    //                     </>
    //                 )
    //             })
    //         }
    //     </main>
    // );

    // return (
    //     <main className="container">
    //         <div className="row">
    //             <div className="col-8">
    //                 {employees.map((employee) => {
    //                     return (
    //                         <div id={employee.id}>
    //                             <div>
    //                                 <p>{employee.id}</p>
    //                                 <p>{employee.fullName}</p>
    //                                 <p>{employee.designation}</p>
    //                                 <p>{employee.gender}</p>
    //                                 <p>{employee.teamName}</p>
    //                                 <img
    //                                     src={femaleProfile}
    //                                     alt="femaleProfilePhoto"
    //                                 />
    //                             </div>
    //                         </div>
    //                     );
    //                 })}
    //             </div>
    //         </div>
    //     </main>
    // );

    function handleEmployeeCardClick(event) {
        const changedEmployees = employees.map((employee) => {
            if (employee.id === parseInt(event.currentTarget.id)) {
                if (employee.teamName === selectedTeam) {
                    return { ...employee, teamName: '' };
                } else {
                    return { ...employee, teamName: selectedTeam };
                }
            } else {
                return employee;
            }
        });

        setEmployees(changedEmployees);
    }
    function handleTeamSelectionChange(event) {
        setTeam(event.target.value);
    }
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select
                        className="form-select form-select-lg"
                        value={selectedTeam}
                        onChange={handleTeamSelectionChange}
                    >
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>
                        <option value="TeamD">Team D</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {employees.map((employee) => {
                            return (
                                <div
                                    id={employee.id}
                                    className={`card m-2 ${
                                        employee.teamName === selectedTeam
                                            ? 'standout'
                                            : ''
                                    }`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleEmployeeCardClick}
                                >
                                    <img
                                        src={
                                            employee.gender === 'female'
                                                ? femaleProfile
                                                : maleProfile
                                        }
                                        alt="femaleProfilePhoto"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            {employee.fullName}
                                        </h6>
                                        <p className="card-text">
                                            {employee.designation}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Employee;
