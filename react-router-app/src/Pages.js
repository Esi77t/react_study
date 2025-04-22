import { Outlet, Route, Routes, useParams, Link, Navigate } from "react-router-dom";

const Home = () => {

    const users = [
        {id:1, name:'홍길동'},
        {id:2, name:'박길동'},
        {id:3, name:'김개똥'},
    ]

    return(
        <div>
            <h2>홈 페이지</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                        {user.name}님의 프로필 보기
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const About = () => {
    return(
        <div>
            <h2>소개 페이지</h2>
            <p>React Router 실습 예제입니다.</p>
        </div>
    );
}

const PostDetail = () => {
    const { postId } = useParams();
    return(
        <div>
            <h2>게시글 상세 페이지</h2>
            <p>게시글 ID : {postId}</p>
        </div>
    );
}

const UserProfile = () => {
    const {id} = useParams();

    // 실제로는 id를 사용하여 서버에서 데이터를 가져오지만
    // 연결이 안되어 있으니 목업 데이터를 사용해보자
    const user = {
        id,
        name: id === '1' ? '홍길동' : id === '2' ? '박길동' : '김개똥',
        age: id === '1' ? 30 : id === '2' ? 45 : 38,
    }

    return(
        <div>
            <h2>{user.name}님의 프로필</h2>
            <p>사용자 ID : {user.id}</p>
            <p>나이 : {user.age}</p>
        </div>
    );
}

const Dashboard = () => {

    const url = "http://localhost:3000/dashboard"

    return(
        <div>
            <h1>대시보드</h1>
            <nav>
                <ul>
                    {/* /dashboard를 기준으로 /dashboard/overview로 이동하게 한다 */}
                    <li><Link to={`${url}/overview`} element={<Overview />}>개요</Link></li>
                    <li><Link to={`${url}/settings`} element={<Settings />}>설정</Link></li>
                </ul>
            </nav>
            {/* 자식 라우트 컴포넌트가 렌더링 될 자리를 지정하는 컴포넌트 */}
            <Outlet />
        </div>
    )
}

const Overview = () => {
    return <h2>대시보드 개요 페이지</h2>
}

const Settings = () => {
    return <h2>대시보드 설정 페이지</h2>
}

const NotFound = () => {
    // 즉시 다른 경로로 이동시킬 수 있다
    return <Navigate to="/" />
}

const Login = () => {
    return <h2>로그인 페이지</h2>
}

const PrivateRoute = ({element, isAuthenticated}) => {
    return isAuthenticated ? element : <Navigate to="/login" />
}

export { 
    Home, 
    About, 
    PostDetail, 
    UserProfile, 
    Dashboard, 
    Overview, 
    Settings, 
    NotFound, 
    Login, 
    PrivateRoute };