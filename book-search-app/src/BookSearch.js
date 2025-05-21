import axios from "axios";
import { useState } from "react";

function BookSearch() {

    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);     // 검색 결과로 얻은 책 정보
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 네이버 도서 검색 API호출하는 함수
    const searchBooks = async () => {
        setLoading(true);
        setError(null);

        const clientId = "yMFAQpc4v0HhIXQmF3Yy";
        const clientSecret = "pumk1rZ93K";

        try {
            const response = await axios({
               url: 'http://localhost:10000/api/books',
               params: {
                query: query,
               }
            });

            // 검색결과를 books에 저장
            setBooks(response.data.items);
        } catch (error) {
            setError("도서 정보를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        searchBooks();
    }

    return(
        <div>
            <h1>네이버 도서 검색</h1>
            <form onSubmit={ handleSearch }>
                <input type="text" value={ query } onChange={(e) => setQuery(e.target.value)} placeholder="책 이름을 입력하세요" />
                <button onClick={ handleSearch }>검색</button>
            </form>
            <ul>{ books.map((book) => (
                <li key={ book.isbn }>
                    <img src={ book.image } alt={ book.title } />
                    <p>제목 : { book.title }</p>
                    <p>저자 : { book.author }</p>
                    <p>출판사 : { book.publisher }</p>
                    <p>가격 : { book.discount ? `${book.discount}원` : "품절" }</p>
                    <a href={ book.link }>더보기</a>
                </li>
            )) }</ul>
        </div>
    )
}

export default BookSearch;