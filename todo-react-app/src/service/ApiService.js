import axios from "axios";
import { API_BASE_URL } from "../api-config";

// 요청하는 메서드를 만들 것
// api : 호출할 api 경로(/todo, /users)
// method : HTTP메서드(GET, POST, PUT, DELETE)
// request : 요청에 담을 데이터(주로 POST, PUT에서 사용)
export function call(api, method, request) {
    // 기본 옵션 설정
    let options = {
        url : API_BASE_URL + api,
        method : method,
        headers:{
            "Content-Type":"application/json"
        }
    }

    // false, 0, 빈 문자열, null, undefined, NaN -> false로 취급
    if(request) {
        // JSON.stringify() : 객체를 JSON문자열로 반환
        options.data = JSON.stringify(request);
    }

    // 앞서 설정한 options 객체를 사용하여 axios로 HTTP요청을 보낸다.
    return axios(options)
            // 요청이 성공적으로 처리된 경우 실행되는 코드
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                const m_error = error;
                return m_error;
            })
}