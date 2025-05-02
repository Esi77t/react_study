import { useContext } from "react"
import { MyContext } from "./context"

export const GrandChild = () => {

    //Provider에서 제공하는 데이터 사용하는 방법
    //const{구조분해할당} = useContext(우리가 생성한 context객체)
    const {value, setValue} = useContext(MyContext);
    return(
        <div>
            {value}
        </div>
    )
}