import { PlacesCard } from './PlacesCard'
import boat from '../../assets/boat.jpg';
import tajmahal from '../../assets/tajmahal.jpg'
import water from '../../assets/water.jpg'
import sydney from '../../assets/sydney.jpg'
import LA from '../../assets/LA.jpg'
import cali from '../../assets/cali.jpg'

const PlacesData = [
    {
        img:boat,
        title:"Boat tour",
        location:"USA",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:"$100",
        type:"Cultural Relax"

    },
    
    {
         img:tajmahal,
        title:"Tajmahal",
        location:"India",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:"$6700",
        type:"Cultural Relax"

    },
    {
         img:water,
        title:"Underwater",
        location:"India",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:"$6200",
        type:"Cultural Relax"

    },
    {
         img:sydney,
        title:"Sydney",
        location:"USA",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:"$6700",
        type:"Cultural Relax"

    },
    {
         img:LA,
        title:"Los Angeles",
        location:"United States",
        description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
        price:"$6200",
        type:"Cultural Relax"

    },
    {
         img:cali,
        title:"Los Vegas",
        location:"California",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:"$6200",
        type:"Cultural Relax"

    }
]


export const Placeshero = () => {
    return (
        <>
            <div className="sm:px-23 pt-10 px-2">
                <div className="flex gap-2 items-center">

                    <div className="bg-cyan-600 w-2 h-13 inline"></div>
                    <h1 className="font-bold text-3xl ">Best Places to visit</h1>
                </div>

                <div className="pt-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 hover:cursor-pointer"
                  data-aos="fade-up"
                >

                     {PlacesData.map((item,index)=>(
                        <PlacesCard {...item}/>
                     ))}


                </div>






            </div >

        </>
    )
}