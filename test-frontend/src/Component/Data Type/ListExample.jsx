import { useState } from "react";

function ListExample() {
    const [list, setList] = useState([]); // ลิสต์ข้อมูล
    const [newItem, setItem] = useState(""); // เก็บค่าที่ผู้ใช้กรอก

    const addItem = () => {
        if (newItem.trim() === "") {
            alert("กรุณากรอกข้อมูล");
            return;
        }

        // เพิ่มข้อมูลเข้าไปใน list
        setList([...list, newItem]);
        setItem(""); // เคลียร์ช่อง input
    };

    const removeItem = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1); // ลบข้อมูลจากลิสต์ตาม index
        setList(updatedList);
    };

    const editItem = (index) => {
        if (newItem.trim() === "") {
            alert("กรุณากรอกข้อมูล");
            return;
        }
        const updatedList = [...list];
        updatedList.splice(index, 1, newItem); // แก้ไขข้อมูลที่ตำแหน่ง index ด้วย newItem
        setList(updatedList);
        setItem(""); // เคลียร์ช่อง input
    };

    const clearList = () => {
        setList([]); // ล้างรายการทั้งหมด
    };

    return (
        <div>
            <h1>List</h1>

            <input
                type="text"
                value={newItem}
                onChange={(e) => setItem(e.target.value)}
                placeholder="กรุณากรอกข้อมูล"
            /> <br />

            <button onClick={addItem}>เพิ่มไอเทม</button>
            <button onClick={clearList}>ล้างรายการ</button>

            {/* แสดงรายการที่เพิ่ม พร้อมปุ่มลบและแก้ไข */}
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {index + 1}. {item}
                        <button onClick={() => removeItem(index)}>ลบ</button>
                        <button onClick={() => editItem(index)}>แก้ไข</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListExample;
