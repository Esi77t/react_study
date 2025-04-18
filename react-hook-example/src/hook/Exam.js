import { useState } from 'react';


export let ShowHide = () => {

    const [hello, setHello] = ["Hello, React", ""];
    const [btn, setBtn] = useState(true);
    return (
        <div>
            <button onClick={() => setBtn(!btn)}>{btn ? "숨기기" : "보이기"}</button>
            <h1>{btn ? hello : setHello}</h1>
        </div>
    )
}

// 컴포넌트명은 Sol1
// props는 X
// useState()를 사용하여 입력할 때마다 값을 저장

export let Sol1 = () => {

    const [eating, setEating] = useState(['초콜릿', '사탕']);
    const [value, setValue] = useState("");

    const inputHandler = (e) => {
        setValue(e.target.value);
    }

    const clickHandler = () => {
        setEating(prev => [value, ...prev]);
    }

    return (
        <div>
            <input onChange={inputHandler} />
            <button onClick={clickHandler}>추가</button>
            <ul>
                {eating.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}