import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

function StudentDetails() {
    const [student, setStudent] = useState(null)

    const { studentId } = useParams()
    async function getStudent() {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/students/${studentId}`)
        setStudent(response.data)
    }

    useEffect(() => {
        getStudent()
    }, [])

    return (
        <div>
            <h1>Student Details</h1>
            {student ?
                <>
                    <p>name: {student.name}</p>
                    <p>course: {student.course}</p>
                    <p>city: {student.city}</p>


                </>
                : null}
        </div>
    )
}

export default StudentDetails
