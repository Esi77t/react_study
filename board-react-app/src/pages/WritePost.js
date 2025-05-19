import {useState, useContext} from 'react'
import { BoardContext } from '../context/BoardContext'
import CustomButton from '../component/CustomButton'
import CustomInput from '../component/CustomInput'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const WritePost = () => {

    const {boardList, setBoardList} = useContext(BoardContext);

    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    // 데이터베이스에 게시글을 추가하는 기능
    const savePost = async(e) => {
        e.preventDefault();
        const newPost = {
            title,
            author,
            content
        }
        //매개변수가 url, data, config
        // const response = await axios.post(
        //     "http://localhost:10000/api/board/add",
        //     newPost,            
        //     {
        //         headers:{
        //             "Content-Type" : "application/json",
        //         },
        //     }
        // )

        //매개변수에 config하나만 줌
        const response = await axios({
            url: "http://localhost:10000/api/board/add",
            method: 'post',
            data:newPost,
            headers : {
                "Content-Type":"application/json",
            }
        })

        // 게시글이 정상적으로 등록이 되었을 때
        if(response.status === 200) {
            alert('게시물이 등록되었습니다.')
            navigate("/");
        } else {
            throw new Error("게시물 등록 실패")
        }
       
    }

    const backToBoard = () => {
        navigate("/");
    }

    
    return(
        <div>
            <h1>글쓰기 페이지</h1>
            <form>
                <CustomInput label="제목" value={ title } onChange={(e) => setTitle(e.target.value)}/>
                <CustomInput label="작성자" value={ author } onChange={(e) => setAuthor(e.target.value)}/>
                <CustomInput 
                    label="내용"
                    multiline
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}    
                />
                <div>
                    <CustomButton label="저장" onClick={ savePost } />
                    <CustomButton label="취소" variant='outlined' color="secondary" onClick={ backToBoard } />
                </div>
            </form>
        </div>
    )
}

export default WritePost;