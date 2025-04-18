// useState훅을 사용하기 위해서는 import 해줘야 한다
import { useState } from 'react';

// 컴포넌트 생성하기
// 하나의 파일에 하나의 컴포넌트만 만들 수도 있지만
// 여러 개의 컴포넌트를 정의할 수 있다.

// 매개변수로 넘겨온 값은 읽기 전용이다
let Counter = (props) => {
    // hook은 항상 함수형 컴포넌트 안에서만 사용할 수 있다
    // useState()는 상태 값과 상태 값을 바꾸는 함수 두가지 요소를 갖는 배열을 반환한다

    // 매개변수로 읽어온 값을 변경하기 위해서는 state로 관리를 해야한다
    const [count, setCount] = useState(props.count);

    // let handleClick = () => {
    //     setCount(count + 1);
    // }
    // 함수를 정의하고 호출하던지
    // 화살표함수를 이용해서 호출하던지
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Up!!</button>
        </div>
    )
}

// 컴포넌트를 외부에서 import하기 위해서는 반드시 export가 선행되어야 한다
export default Counter;
// 모듈당 1개만 허용 
// import할 때 {} 안해도 됨
// import할 때 이름 마음대로 지정 가능

// export { Counter };
// named export
// 모듈당 여러 개를 내보낼 수 있다
// import할 때도 export할 때 쓰던 이름을 {} 안에 정확히 맞춰 써야 한다.
// as를 써서 별칭(alias)를 붙일 수 있다.