import { useState } from "react"

let Example = () => {

    const [mesaage, setMessage] = useState("Hello, world!");
    const [name, setName] = useState("홍길동")
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{mesaage} / {name}</p>
            {/* 상태는 무조건 setter를 이용하여 변경해야 합니다. */}
            <button onClick={() => setMessage("Hello, React")}>Change Message</button>

            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
    );
}

export default Example;