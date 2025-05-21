import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MovieApi() {
    // 일별 박스오피스 순위, 영화 제목, 영화 개봉일, 해당 일의 매출액을 출력
    const [boxoffice, setBoxoffice] = useState([]);     // 일별 박스오피스 순위를 여기에
    const [startDate, setStartDate] = useState(new Date());

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return `${year}${month}${day}`;
    };

    const apiKey = "126dffd5225e17d637eb47b4b49135f5"
    const targetDt = formatDate(startDate);

    const handleClick = async () => {
        const response = await axios.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json", {
                    params: {
                        key: apiKey,
                        targetDt: targetDt,
                    }}
                );

        const dailyList = response.data.boxOfficeResult.dailyBoxOfficeList;

        setBoxoffice(dailyList);
    };

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>일별 박스오피스 순위</h1>
            <div>
                <DatePicker selected={ startDate } onChange={ (date) => setStartDate(date) } dateFormat="yyyy-MM-dd" maxDate={new Date() - 1} />
                <button onClick={ handleClick }>조회</button>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>영화 제목</th>
                        <th>영화 개봉일</th>
                        <th>일일 관객 수</th>
                        <th>매출액</th>
                        <th>총 관객 수</th>
                    </tr>
                </thead>
                <tbody>
                    { boxoffice.map(movie => (
                        <tr key={ movie.movieCd }>
                            <td>{ movie.rank }</td>
                            <td>{ movie.movieNm }</td>
                            <td>{ movie.openDt }</td>
                            <td>{ Number(movie.audiCnt).toLocaleString() }명</td>
                            <td>{ Number(movie.salesAmt).toLocaleString() }원</td>
                            <td>{ Number(movie.audiAcc).toLocaleString() }명</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default MovieApi;