import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapContainer() {

    // const [result, setResult] = useState("");
    // const [position, setPosition] = useState(null);

    const [info, setInfo] = useState(null);                 // 사용자가 클릭한 마커의 정보를 저장할 상태
    const [markers, setMarkers] = useState([]);             // 지도에 표시될 마커들의 리스트 상태
    const [map, setMap] = useState(null);                   // 생성된 카카오맵 객체를 저장할 상태
    const [keyword, setKeyword] = useState('이태원 맛집');    // 검색어를 저장할 상태 (기본 값은 이태원 맛집)

    // 지도가 보여질 중심 좌표
    // lat(latitude) 위도 : 위도 값이 높을 수록 북쪽
    // lng(longtitud) 경도 : 경도 값이 높을 수록 동쪽
    // const center = {
    //     lat: 33.450701,
    //     lng: 126.570667,
    // }

    // 카카오 장소 검색 API를 호출하는 함수
    const searchPlaces = (searchKeyword) => {
        // map객체나 카카오 지도 API가 로드되지 않았다면 함수를 종료
        if(!map || !window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
            return;
        }

        // kakao.maps.services
        // 장소 검색 및 주소-좌표 간 변환 서비스를 제공하는 라이브러리

        // kakao.maps.services.Place()
        // 장소 검색 서비스 객체를 생성한다

        const ps = new window.kakao.maps.services.Places();    // 카카오 장소 검색 서비스 객체를 생성

        // keywordSearch(키워드, 콜백함수, 옵션)
        // 키워드 : 우리가 전달한 키워드
        // 콜백함수 : 요청을 하고 응답을 돌려받을 함수, 콜백함수의 인자에는 데이터를 담은 배열과 상태가 있다
        // 옵션 : 말 그대로 여러가지 옵션들이 들어있다

        // 키워드로 장소를 검색
        ps.keywordSearch(searchKeyword, (data, status) => {
            // 검색이 성공적으로 완료가 되었을 때
            // kakao.maps.services.Status
            // 응답 코드가 상수로 정의되어 있다
            // STATUS 값으로 사용 가능한 목록은 다음과 같다
            // OK : 검색결과가 있음
            // ZERO_RESULT : 정상적으로 응답을 받았으나 검색 결과는 없음
            // ERROR : 서버 응답에 문제가 있는 경우
            if(status === window.kakao.maps.services.Status.OK) {
                // LatLngBounds()
                // 지도 안에 마커들이 다 보여야 할 때 지도의 크기를 재조정
                const bounds = new window.kakao.maps.LatLngBounds();

                // 검색 결과로 돌려받은 배열에서 장소 정보를 하나씩 꺼내서 마커로 만들겠다
                const newMarkers = data.map((place) => ({
                    position:{
                        lat: place.y,   // 위도
                        lng: place.x,   // 경도
                    },
                    content: place.place_name,  // 마커에 표시할 장소명
                }))

                newMarkers.forEach(marker => bounds.extend(
                    new window.kakao.maps.LatLng(marker.position.lat, marker.position.lng)
                ))

                setMarkers(newMarkers); // 마커 리스트를 상태에 저장
                map.setBounds(bounds);  // 지도를 새로 게산한 범위로 설정
            } else {
                alert('검색결과가 없습니다');
            }
        }) 
    }

    // 맵이 맨 처음 생성될 때 기본 검색어로 장소를 검색
    useEffect(() => {
        if(map) searchPlaces(keyword);
    }, [map]);

    const handleSearch = () => {
        if(keyword.trim() === '') {
            alert('검색어를 입력하세요');
            return;
        }
        // 입력된 검색어로 장소 검색 실행
        searchPlaces(keyword);
    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
            <h1>카카오 지도 API 페이지</h1>
            <div>
            <input type="text" value={ keyword } onChange={ (e) => setKeyword(e.target.value) } placeholder="검색어를 입력하세요" style={{ padding: "5px", marginRight: "5px" }} />
            <button onClick={ handleSearch }>검색</button>
            </div>
            <Map center={{ lat: 37.566826, lng:126.9786567 }} style={{ height: "350px", width: "100%" }} level={ 3 } onCreate={ setMap } >
                { markers.map((marker, index) => (
                    <MapMarker key={ `marker-${ index }` } position={ marker.position } onClick={ () => setInfo(marker) }>
                        { info && info.content === marker.content && (
                            <div style={{ color: "#000" }}>{ marker.content }</div>
                        )}
                    </MapMarker>
                )) }
            </Map>
        </div>
    )
}

// export const KakaoMap = () => {
//     useEffect(() => {
        
//         // 지도 API를 사용하기 위한 스크립트를 동적으로 생성
//         // document.createElement('script'); -> <script> </script>
//         const script = document.createElement('script');
//         script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP}&libraries=services,clusterer,drawing`;
//         script.async = true;    // 비동기 로딩 여부
//         // 외부 스크립트는 언제 로드가 끝날지 보장이 되지 않는다
//         // 로딩 완료 이후 특정 로직을 실행해야 할 경우 반드시 필요함
//         script.onload = () => { // 스크립트가 성공적으로 로드된 뒤 실행할 함수
//             window.kakao.maps.load(() => {
//                 let conatiner = document.getElementById('map');
//                 let options = {
//                     center : new window.kakao.maps.LatLng(33.450701, 126.570667),
//                     level : 3,
//                 };
//                 new window.kakao.maps.Map(conatiner, options);
//             })
//         }

//         // 생성한 script를 <head>에 추가한다
//         document.head.appendChild(script);
//     }, [])

//     return(
//         // 지도를 보여줄 div
//         <div id="map" style={{ width: '500px', height: '400px' }} />
//     )
// }

export default MapContainer;