import {Route, Routes} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home/Home.tsx";
import NotFound from "../pages/NotFound/NotFound.tsx";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default Router