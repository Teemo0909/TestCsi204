import { useState, useEffect } from 'react';

function Json() {
  const [jsonString, setJsonString] = useState('');
  const [parsedData, setParsedData] = useState(null);

  const parseJson = () => {
    try {
      if (jsonString.trim() === '') {
        alert('กรุณากรอก JSON ที่ต้องการแปลง');
        return;
      }

      const data = JSON.parse(jsonString); // แปลง JSON string เป็น object
      setParsedData(data);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  const stringifyJson = () => {
    const stringifiedData = JSON.stringify(parsedData); // แปลง object กลับเป็น JSON string
    setJsonString(stringifiedData);
  };

  // ใช้ useEffect เพื่อตรวจจับการเปลี่ยนแปลงของ parsedData
  useEffect(() => {
    if (parsedData !== null) {
      console.log(parsedData);  // จะ log เมื่อ parsedData ถูกอัปเดต
    }
  }, [parsedData]);  // useEffect จะทำงานเมื่อ parsedData เปลี่ยนแปลง

  return (
    <div>
      <div>
        <h2>JSON String</h2>
        <textarea
          value={jsonString}
          onChange={(e) => setJsonString(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Enter JSON here ex. {&quot;name&quot;: &quot;John&quot;, &quot;age&quot;: 30}"
        />
        <button onClick={parseJson}>Parse JSON</button>
      </div>

      <div>
        <h2>Parsed Data (Object)</h2>
        <pre>{JSON.stringify(parsedData, null, 2)}</pre>
        <button onClick={stringifyJson}>Stringify Data</button>
      </div>
    </div>
  );
}

export default Json;
