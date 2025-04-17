import react from 'react'

// 함수형 컴포넌트의 정의
// 컴포넌트의 이름을 정의할 때 대문자로 시작한다
// let props = {name : "John"}
export function Greeting(props) {
		// JSX문법으로 HTML 조각을 반환할 수 있다
		return (
				// 하나의 루트요소만 반환 할 수 있다
				// 여러 요소를 반환 할 때는 반드시 하나의 요소로 감싸야 한다
			<div>
					<h1>Hello, {props.name}</h1>
			</div>
		)
}

export function Farewell(props) {
    return <h1>Goodbye, {props.name}</h1>;
}