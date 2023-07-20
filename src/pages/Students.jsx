import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Students = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        // api call
        // public folder is treated as the root folder in Vite
        axios.get('./students.json')
        // then runs if it succeds
            .then(response => {
                console.log(response.data)
                setStudents(response.data)
            })
        // catch runs if it fails
            .catch(error => {
                console.log(error);
            })
    }, [])// by leaving the array empty the use effect will only run once
    // only run on the initial render of the component

    // Component for Student Posts
    const StudentPost = ({students}) => {
        // map over the students array
        const mappedStudents = students.map((student, index) => {
            return (
                <>
                    <div key={index} className="student-card">
                        <h2 className="student-name">{student.first_name} {student.first_name}</h2>
                        <h3 className="student-email">{student.email}</h3>
                        <img src={student.profile_image} alt="robot" className="student-profile-image"/>
                    </div>
                </>
            )
        })
        // return for StudentPosts component
        return (
            <>             
                {/* all of students returned in the map above */}
                    {mappedStudents}             
            </>
          )
    }
// return for Students Component 'Parent'/'top-level' of this component
  return (
    <div id="content">
        <StudentPost students={students}/>
    </div>
  )
}

export default Students
