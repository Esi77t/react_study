import { useNavigate } from "react-router-dom";

function MultipleButtons() {

    const navigate = useNavigate();

    const handleButtonClick = (e) => {
        const buttonId = e.target.id;

        switch(buttonId) {
            case "address":
                navigate("/address");
                break;
            case "movie":
                navigate("/movie");
                break;
            case "map":
                navigate("/map");
                break;
        }
    }

    return(
        <div>
            <button id="address" onClick={ handleButtonClick }>
                주소찾기 API
            </button>
            {" "}
            <button id="movie" onClick={ handleButtonClick }>
                영화 API
            </button>
            {" "}
            <button id="map" onClick={ handleButtonClick }>
                카카오지도 API
            </button>
        </div>
    )
}

export default MultipleButtons;