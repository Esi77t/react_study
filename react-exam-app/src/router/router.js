// 리액트 라우터
// URL에 따라서 다른 컴포넌트를 렌더링 해주고 싶을 때 사용하는 문법
// 사용자가 URL을 변경하거나 네비게이션 할 때 페이지를 새로고침하지 않고도
// URL에 맞는 컴포넌트를 렌더링 할 수 있도록 해준다

import { Route, Routes } from "react-router-dom"
import { Home, About, User, Dashboard, Settings, Overview } from "./page"

// 라우터를 설치
// npm install react-router-dom
export const RouterEx = () => {
    return(
        <div>
            {/* Routes : 내부에 선언된 Route들을 비교, 매칭해서 URL에 맞는 컴포넌트를 렌더링한다 */}
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* users/100 -> 100이 :id에 들어가게 된다 */}
                <Route path="/users/:id" element={<User />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    {/* dashboard/settings */}
                    <Route path="settings" element={<Settings />} />
                    {/* dashboard/overview */}
                    <Route path="overview" element={<Overview />} />
                </Route>
            </Routes>
        </div>
    )
}