import { useState, useEffect, useContext } from "react";
import CustomButton from "../component/CustomButton";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";
import { mockData } from "../mockData";
import "../css/BoardList.css";

const BoardList = () => {
    
    const { boardList, setBoardList } = useContext(BoardContext);

    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지
    const [postsPerPage, setPostsPerPage] = useState(3);    // 한 페이지에 보여줄 게시물 개수
    const [totalPages, setTotalPages] = useState(1);    // 총 페이지 수

    const navigate = useNavigate();

    // useEffect(() => {
    //     // 백엔드와 통신하는 척 boardList에 가짜 데이터를 넣는다
    //     setBoardList(mockData);
    //     // 게시판의 총 페이지 수
    //     setTotalPages(Math.ceil(mockData.length/postsPerPage));
    //     // 게시글 개수와 총 페이지 수가 변할 때마다 재렌더링
    // }, [postsPerPage, boardList]);

    useEffect(() => {
        console.log(boardList);
        setTotalPages(Math.ceil(boardList.length / postsPerPage));
        setCurrentPage(1);
    }, [postsPerPage, boardList.length]);

    // 페이지 계산
    // 현재 페이지의 마지막 게시글 인덱스 + 1을 구한다
    // ex) 현재 페이지 : 2, 한 페이지에 보여줄 게시글이 3개라 했을 때 마지막 인덱스는 6번
    const indexOfLastPost = currentPage * postsPerPage;

    // 첫 번째 게시글의 인덱스
    // ex) 6 - 3 = 3
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // indexOfFirstPost부터 indexOfLastPost미만까지 잘라낸다
    const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // 보여줄 게시물 수를 조정하는 함수
    const handlePostPerChange = (e) => {
        setPostsPerPage(parseInt(e.target.value));
        setCurrentPage(1); // 1페이지로 돌아온다
    }

    // 글쓰기 페이질 이동하기
    const handleWritePost = () => {
        navigate("/write")
    }

    return(
        <div className="board-container">
            <h1 className="board-title">게시판</h1>
            <div className="board-button">
                <button onClick={ handleWritePost }>글쓰기</button>
            </div>
            <br />
            {/* 목업 데이터 출력하기 */}
            <ul className="board-posts">
                { currentPosts.map((board) => (
                    <li key={ board.id } className="board-post-item">
                        <Link to={`/post/${ board.id }`}>{ board.title }</Link>
                        <span>작성자 : { board.author }</span>
                        <span> | 작성시간 : { board.writingTime }</span>
                    </li>
                )) }
            </ul>
            {/* 한번에 보여줄 게시글 수 조정 */}
            <div className="board-posts-per-page">
                <labe>
                    게시물 수 : {" "}
                    <select value={ postsPerPage } onChange={ handlePostPerChange }>
                        <option value={ 3 }>3개</option>
                        <option value={ 5 }>5개</option>
                        <option value={ 10 }>10개</option>
                    </select>
                </labe>
            </div>
            {/* 이동할 페이지 커버 */}
            <div className="board-pagination">
                {/* 1. Array(totalPages) : 전체 페이지만큼 방을 가지는 배열을 생성 
                    2. .keys() : 0부터 totalPages - 1까지 인덱스 이터레이터가 생성된다
                    3. ...으로 펼쳐서 [0, 1, 2, 3, ... totalPages - 1] 형태의 배열을 얻는다
                    4. map((number) => ...) 각 number에 대해 버튼을 생성한다 */}
                { [...Array(totalPages).keys()].map((number) => (
                    <button
                        key={ number + 1 }
                        className={ currentPage === number + 1 ? "selected" : "" }
                        onClick={ () => paginate(number + 1) }
                    >
                        { number + 1 }
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BoardList