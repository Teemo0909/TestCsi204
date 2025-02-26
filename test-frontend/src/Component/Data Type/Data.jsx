import { useState } from "react";

function DataPage() {

    // DataType
    const [dataString, setString] = useState(""); // กำหนดค่าเริ่มต้นเป็น string ว่าง
    const [dataNumber, setNumber] = useState(0);
    const [dataBoolean, setBoolean] = useState(false);

    // ConvertType
    const [dataInt, setInt] = useState(0);
    const [dataFloat, setFloat] = useState(0.0);
    const [dataStr, setStr] = useState("");

    // DataType
    const addDataString = () => {
        if (dataString === "") {
            alert("กรุณากรอกข้อความ");
            return;
        } if (!isNaN(dataString)) {
            alert("กรุณากรอกข้อความ");
            return;
        }
        setString(dataString);
        console.log('String: ', dataString);
    };

    const addDataNumber = () => {
        if (dataNumber === '') {
            alert("กรุณากรอกตัวเลข");
            return;
        }
        setNumber(dataNumber);
        console.log('Number: ', dataNumber);

    }

    const addDataBoolean = () => {
        setBoolean(!dataBoolean);
        console.log('Boolean: ', dataBoolean);
    }

    // ConvertType
    const ConvertInt = () => {
        console.log("type before convert: ",typeof dataInt);
        const Int = parseInt(dataInt);
        setInt(Int);
        console.log("type after convert: ",typeof Int);
        console.log('Int: ', Int);
    }

    const ConvertFloat = () => {
        console.log("type before convert: ",typeof dataFloat);
        const Float = parseFloat(dataFloat);
        setFloat(Float);
        console.log("type after convert: ",typeof Float);
        console.log('Float: ', Float);
    }

    const ConvertStr = () => {
        console.log("type before convert: ", typeof dataStr);
        const Str = String(Number(dataStr)); // แปลงจากตัวเลขเป็น String
        setStr(Str);
        console.log("type after convert: ", typeof Str);
        console.log("Str: ", Str);
    };
    
    return (
        <div>
            {/* Data Type */}
            <div className="data-type">
                <h1>Data Type</h1>
                <div className="string">
                    <p>ข้อความ</p>
                    <input
                        type="text"
                        value={dataString}
                        onChange={(e) => setString(e.target.value)}
                        placeholder="กรุณากรอกข้อความ"
                    /><br />

                    <button onClick={addDataString}>เปลี่ยนข้อความ</button>
                </div>

                <div className="number">
                    <p>ตัวเลข</p>
                    <input
                        type="number"
                        value={dataNumber}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="กรุณากรอกตัวเลข"
                    /><br />

                    <button onClick={addDataNumber}>เปลี่ยนตัวเลข</button>


                </div>

                <div className="boolean">
                    <p>boolean</p>
                    <span>{dataBoolean}</span>
                    <button onClick={addDataBoolean}>เปลี่ยน Boolean</button>
                </div>
            </div>


            {/* Convert Type */}

            <div className="data-convert">
                <h1>Data Convert</h1>
                <div className="string">
                    <p>Int</p>
                    <input
                        type="text"
                        value={dataInt}
                        onChange={(e) => setInt(e.target.value)}
                        placeholder="กรุณากรอกข้อความ"
                    /><br />

                    <button onClick={ConvertInt}>แปลงเป็น Int</button>
                </div>

                <div className="number">
                    <p>Float</p>
                    <input
                        type="text"
                        value={dataFloat}
                        onChange={(e) => setFloat(e.target.value)}
                        placeholder="กรุณากรอกตัวเลข"
                    /><br />

                    <button onClick={ConvertFloat}>แปลงเป็น Float</button>
                </div>

                <div className="number">
                    <p>Str</p>
                    <input
                        type="number"
                        value={dataStr}
                        onChange={(e) => setStr(e.target.value)}
                        placeholder="กรุณากรอกตัวเลข"
                    /><br />

                    <button onClick={ConvertStr}>แปลงเป็น Str</button>
                </div>
            </div>

        </div>
    );
}

export default DataPage;
