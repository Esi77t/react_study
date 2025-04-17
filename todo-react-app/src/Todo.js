// 현재 파일에서는 checkBox와 label 컴포넌트를 만들어 보자

import { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox } from '@mui/material'

let Todo = (props) => {

    const [item, setItem] = useState(props.item);

    return (
        // html 코드가 들어가는 부분
        // 속성을 쓸 때 카멜케이스로 작성하기
        // onclick -> onClick
        // class -> className
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}} 
                    type="text"
                    id={item.id} 
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    )
}

export default Todo;