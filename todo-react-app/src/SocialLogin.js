const SocialLogin = (props) => {
    const getUrlParameter = (name) => {
        let search = window.location.search     // 주소에서 ?뒤에 있는 쿼리스트링을 추출
        let params = new URLSearchParams(search);
        return params.get(name);
    }

    const token = getUrlParameter("token");

    console.log("토큰 파싱 : " + token);

    if(token) {
        console.log("로컬 스토리지에 토큰 저장" + token);
        localStorage.setItem("ACCESS_TOKEN", token);
        window.location.replace("/");
    } else {
        window.location.replace("/login");
    }
}

export default SocialLogin;