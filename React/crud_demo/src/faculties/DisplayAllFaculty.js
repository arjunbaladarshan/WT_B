import { useEffect, useState } from "react";

function DisplayAllFaculty(){
    const [faculties , setFaculties ] = useState([
        {FacultyID:1,FacultyName:'a',FacultyImage:'a',FacultyDepartment:'a',FacultySalary:1},
        {FacultyID:2,FacultyName:'b',FacultyImage:'b',FacultyDepartment:'b',FacultySalary:123},
        {FacultyID:3,FacultyName:'c',FacultyImage:'c',FacultyDepartment:'c',FacultySalary:321}
    ]);

    const apiUrl = "apiUrlHere";
    
    useEffect(()=>{
        fetch(apiUrl,{method:"GET"})
        .then(res=>res.json())
        .then(res=>setFaculties(res));
    },[])

    const foramtedFaculties = faculties.map((fac)=>{
        return(
            <>
                <tr>
                    <td>{fac.FacultyID}</td>
                    <td>{fac.FacultyName}</td>
                    <td><img src={fac.FacultyImage} width={100} /></td>
                    <td>{fac.FacultyDepartment}</td>
                    <td>{fac.FacultySalary}</td>
                </tr>
            </>
        );
    });

    return(<table border={1}> {foramtedFaculties} </table>);
}

export default DisplayAllFaculty;