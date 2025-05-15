import { useState, useEffect, useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams, useNavigate } from "react-router-dom";
import CustomButton from "../component/CustomButton";

const PostDetail = () => {

    const { boardList, setBoardList } = useContext(BoardContext);
    const [item, setItem] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // id를 통해 boardList에 들어있는 게시글을 한 건 꺼내서 화면에 출력하기
    // useEffect를 사용
    useEffect(() => {
        const post = boardList.find(post => post.id === id);
        if(post) {
            setItem(post);
        }
    }, [id, boardList])

    const moveToEdit = () => {
        navigate("/write", { state:{ post:item } });
    }

    const handleDelete = () => {
        const updateBoardList = boardList.filter(post => post.id !== id);
        setBoardList(updateBoardList);
        navigate("/");
    }

    const moveToList = () => {
        navigate("/");
    }

    return(
        <div>
            <h2 className="board-detail-title">{ item.title }</h2>
            <div className="board-detail-info">
                <h5>작성자 : { item.author }</h5>
                <p style={{ fontsize:"12px", color:"gray" }}>{ item.writingTime }</p>
            </div>
            <hr />
                <p className="board-detail-body">{ item.content }</p>
            <div>
                <CustomButton label="수정" onClick={ moveToEdit } />
                <CustomButton label="삭제" color="secondary" onClick={ handleDelete } />
                <CustomButton label="목록으로" variant="outlined" onClick={ moveToList } />
            </div>
        </div>
    )
}

export default PostDetail;