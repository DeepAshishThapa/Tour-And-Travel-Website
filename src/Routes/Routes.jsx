import { Routes, Route } from "react-router"
import { MainLayout } from "../layouts/MainLayout"
import { About,Blogs,BlogsDetails,Home,NoPage,PlacesRoute } from "../pages/About"



export function Approutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="blogs" element={<Blogs />}>
                        <Route path=":id" element={<BlogsDetails />} />
                    </Route>
                    <Route path="places" element={<PlacesRoute />} />
                    <Route path="*" element={<NoPage />} />



                </Route>

            </Routes>
        </>
    )
}