import banner from '../assets/banner.avif'
export const Banner = () => {
    return (
        <>
            <div className="bg-cover bg-center w-[100vw] h-[40vh] sm:h-[55vh] mt-10 mb-30"
                style={{ backgroundImage: `url(${banner})` }}
                 data-aos="zoom-in"
                

            >

            </div>
        </>
    )

}