import {useEffect, useState, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BoardContext } from '../context/BoardContext';
import CustomButton from '../component/CustomButton';
import CustomInput from '../component/CustomInput';

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
    const updatePost = () => {
        setBoardList((prevList) => 
            prevList.map((item) =>
                 item.id === parseInt(id) ? {...item, ...post}: item));
        alert('게시물이 수정되었습니다')
        navigate(`/post/${ id }`);
    }

    const backToBoard = () => {
        navigate("/");
    }

    return(
        <div>
            <h1>글 수정하기</h1>
            <form>
                <CustomInput label="제목" value={ title } onChange={ onChange }/>
                <CustomInput label="작성자" value={ author } onChange={ onChange }/>
                <CustomInput 
                    label="내용"
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