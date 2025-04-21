// 현재 파일에서는 checkBox와 label 컴포넌트를 만들어 보자

import { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material'
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

// ListItemSecondaryAction
// ListItem 내부에서 텍스트나 아이콘 이후에 보조 액션 영역을 오른쪽 끝에 고정배치 해준다
// 반드시 ListItem의 자식으로만 사용해야한다

// IconButton
// 아이콘을 클릭 가능한 버튼으로 만들어주는 컴포넌트이다

// DeleteOutlined
// MUI 아이콘 라이브러리에 포함된 휴지통 아이콘 컴포넌트이다

let Todo = (props) => {

    // App.js에서 받은 한가지 할일 목록
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const editItem = props.editItem;

    // true -> false로 바꾸는 turnOffReadOnly함수 추가
    const turnOffReadOnly = () => {
        setReadOnly(false);
    }
    
    // 변경을 감지하는 함수
    // const handleChange = (e) => {
    //     setItem({
    //         ...item,
    //         title:e.target.value,
    //     })
    // }

    const editItemHandler = (e) => {
        item.title = e.target.value;
        editItem();
    }
    
    const turnOnReadOnly = (e) => {
        if(e.key == 'Enter') {
            setReadOnly(true);
        }
    }

    // 체크박스 변경함수
    const checkBoxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem();
    }

    // 삭제함수
    const deleteItem = props.deleteItem;

    const deleteEventHandler = () => {
        deleteItem(item);
    }

    return (
        // html 코드가 들어가는 부분
        // 속성을 쓸 때 카멜케이스로 작성하기
        // onclick -> onClick
        // class -> className
        <ListItem>
            <Checkbox checked={item.done} onChange={checkBoxEventHandler}/>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}}
                    readOnly={readOnly}
                    onClick={turnOffReadOnly}
                    onChange={editItemHandler}
                    onKeyDown={turnOnReadOnly}
                    type="text"
                    id={item.id} 
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}> 
                    <DeleteOutlined /> {/* 휴지통 버튼 */}
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;