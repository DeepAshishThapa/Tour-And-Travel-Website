import { Card } from "./Card";

export const Placeshero = () => {
    return (
        <>
            <div className="px-23 pt-10 ">
                <div className="flex gap-2 items-center">

                    <div className="bg-cyan-600 w-2 h-13 inline"></div>
                    <h1 className="font-bold text-3xl ">Best Places to visit</h1>
                </div>

                <div className="pt-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 ">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>

                




            </div>

        </>
    )
}