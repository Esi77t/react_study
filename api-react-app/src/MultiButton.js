import { useNavigate } from "react-router-dom";

function MultipleButtons() {

    const navigate = useNavigate();

    const handleButtonClick = (e) => {
        const buttonId = e.target.id;

        switch(buttonId) {
            case 'address':
                navigate("/address");
        }
    }

    return(
        <div>
            <button id="address" onClick={ handleButtonClick }>
                주소찾기 API
            </button>
        </div>
    )
}

export default MultipleButtons;