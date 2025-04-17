import { useState } from "react"

export let Example = () => {

    // React에서 관리하는 데이터 state
    const [mesaage, setMessage] = useState("Hello, world!");
    const [name, setName] = useState("홍길동")
    const [count, setCount] = useState(0);
    // setter함수를 이용해서 state를 변경하면 화면에 바로 반영

    // 일반 자바 스크립트 지역변수
    // 값이 바뀌어도 화면에 렌더링이 일어나지 않는다
    let element = <p>{mesaage} / {name}</p> // JSX
    let x = 100;
    return (
        <div>
            <p>{x}</p>
            <button onClick={() => {x = 500}}>Change X</button>
            {element}
            {/* 상태는 무조건 setter를 이용하여 변경해야 합니다. */}
            <button onClick={() => {setMessage("Hello, React"); setName("박길동")}}>Change Message</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
    );
}