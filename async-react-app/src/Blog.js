import { useEffect, useState } from "react";
import axios from "axios";

// 블로그 프로그램 만들기
// 1. 게시물 리스트를 불러오는 기능
// 2. 게시물 추가기능
// 3. 게시물 삭제기능

// 제목과 내용을 입력할 수 있는 입력필드 2개와 옆에 추가버튼
// 입력필드 밑에는 게시물 리스트를 출력
// 각각의 게시물은 삭제버튼이 옆에 있어야 한다
export const BlogApp = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState({title:'', body:''})

    // 게시물 리스트 불러오기
    useEffect(() => {
        const fetchPosts = async() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    setPosts(response.data);
                })
                .catch(error => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        }

        fetchPosts();
    }, []);

    // 게시물 추가
    // jsonPlaceholder에 추가를 요청한다고해서 진짜 추가되는거 아님
    const addPost = async() => {
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then((response) => {
                setPosts([response.data, ...posts]);
                setNewPost({title:'', body:''});
            })
            .catch((error) => {
                setError(error.message);
            })
    }
    
    // 게시글 삭제
    // 필터링해서 다시 렌더링하기
    const deletePost = async(id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(() => {
                setPosts(posts.filter(post => post.id !== id));
            })
            .catch((error) => {
                setError(error.message);
            })
    }



    if(loading) return <p>불러오는 중</p>
    if(error) return <p>Error : {error}</p>

    return(
        <div>
            <h1>게시물 리스트</h1>
            <h2>새 게시물 추가</h2>
            <input
                type="text"
                placeholder="제목"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title:e.target.value})}
            />
            <textarea
                placeholder="내용"
                value={newPost.body}
                onChange={(e) => setNewPost({...newPost, body:e.target.value})}
            />
            <button onClick={addPost}>게시물추가</button>
            {/* 게시물 리스트 */}
            <div>
                <h2>게시물 리스트</h2>
                {posts.map(post => (
                    <div 
                        key={post.id} 
                        style={{border:'1px solid black', margin: '10px', padding: '10px'}}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <button onClick={() => {deletePost(post.id)}}>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    )
}