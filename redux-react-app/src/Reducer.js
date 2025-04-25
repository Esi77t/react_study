// reducer
// 액션에 따라 state를 변경하는 함수

// useState()의 역할을 하는 것
const initialState = {
    count: 0,
    message: '',
}

// reducer함수는 (state, action) => newState 형태의 순수 함수이다
// 이전 상태와 액션을 받아 새로운 state를 계산하여 반환한다
export const counterReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return{
                ...state,
                count: state.count+1,
            }
        case 'DECREMENT':
            return{
                ...state,
                count: state.count-1,
            }
        case 'SET_MESSAGE':
            return{...state, message:action.payload};
        // 액션 타입이 매치되지 않을 경우, 현재 상태를 그대로 반환
        default:
            return state;
    }
}

// 리듀서의 기본 구조
// reducer는 두 가지 인자를 갖는 함수
// 현재 상태(state)
// 리듀서가 관리하는 현재 상태
// 리듀서가 처음 호출될 때 초기 state가 설정된다
// 액션(action)
// 상태를 변경할 이벤트, 액션 객체는 type속성을 가지며,
// 상태를 어떻게 변경할 지 리듀서에게 알려준다

// 리듀서의 역할
// 액션의 타입에 따라 상태를 변경하고, 새로운 상태 객체를 반환한다
// 중요한 점은 상태를 직접 변경하는 것이 아니라, 새로운 상태 객체를 반환함으로써
// 불변성을 유지하는 것이다