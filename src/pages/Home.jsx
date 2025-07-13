import { Homehero } from "../components/Home/Homehero"
import hotel1 from "../assets/hotel1.mp4"
import { PlacesRoute } from "./PlacesRoute"
import { Blogs } from "./Blogs"
export function Home() {
    return (
        <>
            <div className="relative h-[100vh]">

                {/* <Inputbox type="text" placeholder="enter name" className="w-100"/> */}
                <video src={hotel1} className="h-full w-full object-cover 2xl:object-fill absolute z-[-1]" loop muted autoPlay/>



                <Homehero />
                
            </div>
            <PlacesRoute/>
            <Blogs/>

            
          
        </>





    )
}