import { useState, useEffect, useRef } from "react";

// useRef() 훅
// 변경 가능한 객체 하나를 생성을 해준다
// 반환된 객체는 {current : 값} 형태이고, 컴포넌트의 전체 생명주기 동안 같은 객체를 유지한다

// const refContainer = useRef(0);
// const refContainer = {current : 0};

// 주요 특징
// 1. 값 저장
// 렌더링 사이에 값을 기억해두고 싶을 때 사용한다
// 값이 바뀌어도 리렌더링을 발생시키지 않는다

// 2. DOM 접근
// JSX로 작성한 요소를 ref속성으로 연결해주면, 해당 DOM 노드에 직접 접근할 수 있다

const Counter_ref = () => {
    const countRef = useRef(0);

    const onClick = () => {
        countRef.current += 1;
        console.log(`현재 카운트 : ${countRef.current}`);
    }

    return(
        <div>
            <h1>{countRef.current}</h1>
            <button onClick={onClick}>증가</button>
        </div>
    )
}

// DOM 접근 예시
const InputFocus = () => {
    // inputEl = {current : null};
    const inputEl = useRef(null);

    useEffect(() => {
        // 화면이 렌더링 되면 input태그에 focus를 줘서
        // 바로 입력할 수 있게
        inputEl.current.focus();
    }, []);

    return(
        <div>
            <input ref={inputEl} placeholder="여기에 입력해주세요" />
        </div>
    );
}

// InputSample
// 이름과 닉네임을 입력하는 필드를 만든다
// 이름과 닉네임을 입력하면 밑에 띄운다
// 초기화 버튼을 만들고 버튼을 누를 시 이름 입력 필드에 포커스가 가도록 만들기
const InputSample = () => {

    const [inputs, setInputs] = useState({
        name: "",
        nickName: "",
    });

    const nameFocus = useRef();

    const { name, nickName } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        console.log(`name: ${name}, value: ${value}`)
        setInputs({
            ...inputs,
            [name] : value,
        });
    };

    const onReset = () => {
        setInputs({
            name : "",
            nickName : "",
        });
        nameFocus.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름을 쓰세요"
                onChange={onChange}
                value={name}
                ref={nameFocus}
            />
            <input
                name="nickName"
                placeholder="닉네임을 쓰세요"
                onChange={onChange}
                value={nickName}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickName})
            </div>
        </div>
    )
}

// 숫자를 증가시키면서 이전 값과 현재 값을 화면에 표시하는 예제
// 컴포넌트 아님
const usePrevious = (value) => {
    const prevRef = useRef();

    useEffect(() => {
        prevRef.current = value;    // 최신 value를 저장
    }, [value])

    return prevRef.current;
}

const PreviousValue = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);   // 이전 값을 저장

    return(
        <div>
            <h2>현재 값 : {count}</h2>
            <h2>이전 값 : {prevCount !== undefined ? prevCount : '없음'}</h2>
            <button onClick={() => setCount(count + 1)}>
                증가({count})
            </button>
        </div>
    )

}



export { Counter_ref, InputFocus, InputSample, PreviousValue }