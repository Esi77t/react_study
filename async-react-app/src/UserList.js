// fetch를 사용하여, 외부 api에서 데이터를 가져와 화면에 렌더링 하는 프로그램 만들기
// 외부api를 호출하여 데이터를 가져온다 (https://jsonplaceholder.typicode.com/users)
// 데이터를 가져오는 동안 로딩 상태를 표시한다
// api 요청 실패 시, 에러 메시지를 표시한다
// 가져온 데이터를 화면에 목록 형태로 출력한다
// 사용자의 이름과 이메일 주소를 출력

import { useEffect, useState } from "react"

export const UserList = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userList = async() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    if(!response) {
                        throw new Error('API를 불러오는데 실패했습니다.');
                    }
                    return response.json();
                })
                .then((data) => {
                    setUsers(data);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        }

        userList();
    }, [])

    if(loading) {
        return <p>로딩 중</p>
    }
    if(error) {
        return <p>에러 : {error}</p>
    }
    return(
        <div>
            <h1>유저 목록</h1>
            <ul>
                {users.map((user) => (
                    <li>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}