import { useContext } from "react";
import { UserContext } from "./UserContext";

export const GrandChild = () => {
    // useContext(Context 객체)
    // 함수의 반환 값은 Context의 데이터이며
    // Provider에서 전달한 값을 읽어온다
    const { user, setUser } = useContext(UserContext);

    return(
        <div>
            <h1>{user.name}</h1>
            <p>Age : {user.age}</p>
            <button onClick={() => setUser({name:'Jane Doe', age:28})}>
                Change User
            </button>
        </div>
    )
}