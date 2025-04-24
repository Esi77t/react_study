import axios from "axios"

export const Fetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response))  // json 형식으로 응답을 반환
    .then(data => console.log(data))    // 데이터 처리
    .catch(error => console.log('Error : ', error));    // 에러 처리
// response
// 응답에 대한 메타정보와 본문이 들어있다

// status : http 상태 코드
// headers : 응답 헤더를 담고있는 객체
// ok : status가 200-299사이면 true
// url : 요청을 보낸 최종 url

// 본문
// response의 body는 ReadbleStream이기 때문에
// 직접 읽어서 파싱해야한다
// json() -> json문자열을 파싱하여 객체로 반환
}

export const Axios = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response))
    .catch(error => console.log('Error : ', error));
}




// JSON(JavaScript Object Notation)
// 경량 데이터 교환 형식으로, 사람도 읽기 쉽고, 기계도 구문을 분석하기 쉬운 텍스트이다
// 주로 클라이언트와 서버 간의 구조화된 데이터를 주고받거나, 설정파일, 로그 기록 등에 널리 사용된다

// 자바스크립트 객체
// {name:"홍길동", age:30}

// JSON
// {"name":"홍길동", "age":30}

// value에 들어갈 수 있는 타입
// 문자열, 숫자(정수, 실수), 논리형 값(true, false), null, 객체, 배열

