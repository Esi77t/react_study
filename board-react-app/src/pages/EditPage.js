import {useEffect, useState, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BoardContext } from '../context/BoardContext';
import CustomButton from '../component/CustomButton';
import CustomInput from '../component/CustomInput';
import axios from 'axios';

const EditPost = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { boardList, setBoardList } = useContext(BoardContext);

    const [post, setPost] = useState({ title:"",author:"",content:"" });

    const { author, title, content } = post;

    //input필드에 작성한 내용을 state에 세팅
    const onChange = (event) => {
        const { value, name } = event.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]:value,
        }))
    }

    //1. 게시글을 가져와서 출력하기
    useEffect(() => {
        const currentPost = boardList.find((item) => item.id === parseInt(id));
        if(currentPost){
            setPost(currentPost);
        } else {
            console.error('게시글을 찾을 수 없습니다.');
        }
    },[id, boardList])

    //2. 수정한 게시글을 게시글 목록에 반영하기
    const updatePost = async () => {
        // setBoardList((prevList) => 
        //     prevList.map((item) =>
        //          item.id === parseInt(id) ? {...item, ...post}: item));
        // alert('게시물이 수정되었습니다')
        // navigate(`/post/${ id }`);

        try {
            const response = await axios.put(`http://localhost:10000/api/board/${id}`, {
                    id: parseInt(id),
                    title,
                    author,
                    content,
                    writingTime: new Date().toISOString(),
                })
            const success = response.data;

            if(success) {
                setBoardList((prev) => prev.map(
                    (item) => item.id === parseInt(id) ? { ...item, ...post } : item
                ))
            }

            alert("게시글이 수정되었습니다");
            navigate(`/post/${id}`);
        } catch (error) {
            
        }
    }

    const backToBoard = () => {
        navigate("/");
    }

    return(
        <div>
            <h1>글 수정하기</h1>
            <form>
                <CustomInput label="제목" name="title" value={ title } onChange={ onChange }/>
                <CustomInput label="작성자" name="author" value={ author } onChange={ onChange }/>
                <CustomInput 
                    label="내용"
                    name="content"
                    multiline
                    rows={6}
                    value={ content }
                    onChange={ onChange }    
                />
                <div>
                    <CustomButton label="수정 완료" onClick={ updatePost } />
                    <CustomButton label="취소" variant='outlined' color="secondary" onClick={ backToBoard } />
                </div>
            </form>
        </div>
    )
}

export default EditPost;