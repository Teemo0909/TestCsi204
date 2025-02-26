import { useState } from "react";

function TupleSet() {
  const [data, setData] = useState([]); // เก็บข้อมูลใน array
  const [inputValue, setInputValue] = useState(""); // เก็บค่าที่พิมพ์ใน input

  // ฟังก์ชันเพิ่มค่าลงใน data
  const addItem = () => {
    if (inputValue.trim() === "") {
      alert("กรุณากรอกข้อมูล");
      return;
    }
    setData([...data, inputValue]); // เพิ่มค่าจาก input ลงไป
    setInputValue(""); // ล้าง input หลังเพิ่มค่า
  };

  // ใช้ Set เพื่อลบค่าที่ซ้ำกัน
  const uniqueValues = [...new Set(data)];

  return (
    <div>
      <h1>ทดสอบ Tuple & Set</h1>
      
      {/* Input รับค่าจากผู้ใช้ */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* แสดงข้อมูล */}
      <p>📌 Array: {JSON.stringify(data)}</p>
      <p>🔥 ค่าที่ไม่ซ้ำกัน: {JSON.stringify(uniqueValues)}</p>

      {/* ปุ่มเพิ่มข้อมูล */}
      <button onClick={addItem}>เพิ่มข้อมูล</button>
    </div>
  );
}

export default TupleSet;
