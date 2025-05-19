import { useState, useEffect, useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams, useNavigate } from "react-router-dom";
import CustomButton from "../component/CustomButton";
import axios from "axios";

const PostDetail = () => {

    const { boardList, setBoardList } = useContext(BoardContext);
    const [item, setItem] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // id를 통해 boardList에 들어있는 게시글을 한 건 꺼내서 화면에 출력하기
    // useEffect를 사용

    const getBoard = async () => {
        const response = await axios({
            url: `http://localhost:10000/api/board/${id}`,
            method: 'GET',
        });
        console.log(response);
        setItem(response.data);
    }

    useEffect(() => {
        getBoard();
    }, [id])

    const moveToEdit = () => {
        navigate(`/edit/${ id }`)
    }

    const handleDelete = async () => {
        // if(window.confirm("게시글을 삭제하시겠습니까?")) {
        //     setBoardList((prevPost) => prevPost.filter(post => post.id !== parseInt(id)));
        //     alert("삭제되었습니다.")
        //     navigate("/");
        // }

        // 백엔드에 삭제를 요청
        // 응답으로 true 또는 false를 받아오기
        if(window.confirm("게시글을 삭제하시겠습니까?")) {
            try {
                await axios({
                url: `http://localhost:10000/api/board/${id}`,
                method: 'delete',
                })
            alert("삭제했습니다");
            navigate("/");
            } catch (error) {
                
            }
        }
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