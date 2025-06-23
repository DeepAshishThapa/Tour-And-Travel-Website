import { Routes, Route } from "react-router"
import { MainLayout } from "../layouts/MainLayout"
import { Blogs } from "../pages/Blogs"
import {About} from "../pages/About"
import {BlogsDetails} from "../pages/BlogsDetails"
import {Home} from "../pages/Home"
import {NoPage} from "../pages/NoPage"

import { PlacesRoute } from "../pages/PlacesRoute"



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