// 액션(action) : state를 변경하는 이벤트

// 'INCREMENT'라는 타입의 액션을 반환하는 함수
export const increment = () => (
    {type:'INCREMENT'}
    // 액션의 타입을 'INCREMENT'로 정의
    // 이 액션은 리듀서에서 상태를 증가시키기 위한 신호로 사용됨
)
// 화살표함수에서 본문을 소괄호로 감싸면 그 안의 표현식이 암묵적으로 반환
// () => ({...}) -> 안에 있는 값을 반환

export const decrement = () => (
    {type:'DECREMENT'}
)
// 이 함수들은 단순히 특정 타입을 가진 객체를 반환하는데, 이 객체는 REDUX
// 리듀서에서 상태를 변경하기 위한 신호로 사용이 된다
// type은 Redux 리듀서가 상태를 어떻게 변경할지 결정하는 기준이 된다
// 액션은 상태 변경을 하기 위한 이벤트이다

export const setMessage = (text) => ({
    type:'SET_MESSAGE',
    payload:text,   // 메시지 내용을 payload로 전달
})


export const setUser = (userInfo) => ({
    type:'SET_USER',
    payload:userInfo,
})

export const logout = () => ({
    type:'LOGOUT'
})