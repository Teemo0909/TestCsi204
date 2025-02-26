import { useState } from "react";

function Student() {
    const [students, setStudents] = useState([
        {
            name: "John",
            age: 20,
            grade: "A"
        }
    ]);

    const [newStudent, setNewStudent] = useState({
        name: "",
        age: "",
        grade: ""
    });

    const addStudent = () => {
        if (newStudent.name === "" || newStudent.age === "" || newStudent.grade === "") {
            alert("กรุณากรอกข้อมูล");
            return;
        }
        const studentToAdd = {
            ...newStudent,
            age : parseInt(newStudent.age)
        }

        
        setStudents([...students, studentToAdd]);
        setNewStudent({
            name: "",
            age: "",
            grade: ""
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value
        });
    };

    return (
        <div>
            <h1>ข้อมูลนักเรียน</h1>
            
            {/* กำหนด name ให้ตรงกับ key ของ newStudent */}
            ชื่อ : <input
                type="text"
                name="name"
                value={newStudent.name}
                onChange={handleInputChange} /> <br />
                
            อายุ : <input
                type="number"
                name="age"
                value={newStudent.age}
                onChange={handleInputChange} /> <br />
                
            เกรด : <input 
                type="text" 
                name="grade"
                value={newStudent.grade}
                onChange={handleInputChange} /> <br />
                
            <button onClick={addStudent}>เพิ่มข้อมูล</button>
            
            <h2>ข้อมูลนักเรียน:</h2>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student.name} อายุ: {student.age} เกรด: {student.grade}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Student;
