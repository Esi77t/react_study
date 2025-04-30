// context API
// 데이터를 전역적으로 사용할 수 있게 해주는 기능
// 제공할 때는 Provider에 넣으면 된다
// 사용할 때는 useContext 훅을 사용하면 된다

// Provider에서 제공하는 데이터 사용하는 방법
// const { 구조분해할당 } = useContext(우리가 생성한 context 객체)

import { createContext, useState } from "react"

// 1. context 객체 생성하기
export const MyContext = createContext();

export const MyProvider = ({ children }) => {

    const [value, setValue] = useState('Hello, React');

    return(
        <MyContext.Provider value={(value, setValue)}>
            {children}
        </MyContext.Provider>
    )
} 