import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'


function AllStudents() {
    const [students, setStudents] = useState([])

    async function getAllStudents() {
        const response = await axios.get(import.meta.env.VITE_BASE_URL+"/students")
        console.log(response.data)
        setStudents(response.data)
    }

    // useEffect takes 2 arguement
    // 1. function that will run
    // 2. dependancy array
    useEffect(() => {
        getAllStudents()
    }, [])

    return (
        <div>
            <h2>All Students</h2>
            {students.map((oneStudent) =>
                <div key={oneStudent._id}>
                    <p>Name:{oneStudent.name}</p>
                    <Link to={`/students/${oneStudent._id}`}>See Details</Link>
                </div>
            )}
        </div>
    )
}

export default AllStudents