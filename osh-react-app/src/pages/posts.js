import { useEffect, useState } from "react"

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    if(!response) {
                        throw new Error('False: Data Load');
                    }
                    return response.json();
                })
                .then((data) => {
                    setPosts(data);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoding(false);
                })
        }
        fetchData();
    }, []);

    if(loading) {
        return(
            <div>Loading posts…</div>
        );
    }
    if(error) {
        return(
            <div>{ error }</div>
        );
    } 

    return(
        <>
            <ul>
                { posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                )) }
            </ul>
        </>
    )
}