import { useLocation } from "react-router";
export function BlogsDetails(){
    const location=useLocation();
    const {img,title,description,author}=location.state;
    return(
        <>
        <div>
            <img src={img} alt="" className="w-[100%] object-cover"/>
             <div className="py-5 px-25 flex flex-col gap-5">
                <h1 className="text-gray">{`written by ${author} on date April, 2022`}</h1>
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{description}</p>

                
             </div>
        </div>
        
        </>
    )
}