import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react"; //필요한 순간까지 컴포넌트를 메모리상으로 올리지 않도록 지연로딩을 위해서 사용

const Loading = <div>Loading...</div>
const Main    = lazy( () => import( "../pages/MainPage" ) )

const About = lazy( () => import( "../pages/AboutPage" ) )

const root = createBrowserRouter([
  {
    path: "",
    element : <Suspense fallback={Loading}><Main/></Suspense>
  },
  {
    path: "about",
    element : <Suspense fallback={Loading}><About/></Suspense>
  },
])

export default root;