import React, { useState, useEffect } from "react";

const TimerFunction = () => {
    const [time, setTime] = useState(0);

    // useEffect()
    // 함수형 컴포넌트에서 컴포넌트가 렌더링되거나, 특정 state의 값이 바뀌었을 때
    // 처리하고 싶은 내용을 자동으로 수행하는 훅
    // 첫번째 인자 : useEffect()가 호출됐을 때 처리하고 싶은 내용
    // 두번째 인자 : 의존성배열
    // 생략하면 매 렌더링마다 실행
    // 빈 배열이면 컴포넌트 마운트 시 한번만 실행
    // 값을 하나 이상 넣으면, 그 값이 바뀔 때마다 실행
    useEffect(() => {
        // setInterval() : 일정한 시간 간격으로 지정된 함수를 반복적으로 실행
        const timer = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        // 클린업 함수
        // 언마운트(컴포넌트가 화면에서 내려가야) 실행
        return () => {clearInterval(timer)};
    }, []);

    return(
        <div>
            <h1>Timer : {time} seconds</h1>
        </div>
    )
}

// 외부에서 데이터를 불러와 화면에 출력해주는 예제
// fetch() 함수 사용하기
// 브라우저가 제공하는 네트워크 요청 인터페이스
export const UserList = () => {
    const [users, setUsers] = useState([]);       // 유저 데이터를 담기 위한 상태
    const [loading, setLoading] = useState(true); // 로딩상태
    const [error, setError] = useState(null);     // 에러상태

    // 화면이 떴을 때 유저목록이 이미 보여야한다 
    useEffect(() => {
        // async : 이 함수를 비동기 함수로 만들겠다.
        // 비동기처리 : 특정 작업이 완료되기를 기다리면서도 다른 작업을 계속 실행할 수 있는 방식
        // await : 비동기 함수 안에서만 쓸 수 있다
        // await이 붙은 함수가 종료될 때까지 비동기 함수는 잠깐 멈춘다
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                // fetch() 함수를 실행하고 나면 promise객체를 돌려줌
                // response.ok : 통신이 잘 됐으면 true 아니면 false
                if(!response.ok) {
                    throw new Error(`HTTP 오류! 상태: ${response.status}`)
                }

                // 통신에 문제가 없으면 아래로
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if(loading) {
        return <div>로딩 중...</div>
    }

    if(error) {
        return <div>에러 발생:{error.message}</div>
    }

    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Count컴포넌트 만들기
export const Count = () => {
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount(renderCount + 1);
        console.log(`렌더링 완료`);
    }, [count])

    return(
        <div>
            <h1>Count: {count}</h1>
            <h1>렌더링 횟수: {renderCount}</h1>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    )
}




export default TimerFunction