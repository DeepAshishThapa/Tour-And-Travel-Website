import footervid from '../assets/footervid.mp4'
export const Footer = () => {
    return (
        <>
            <div className='mt-10 h-190 md:h-135 shadow-md relative flex justify-center items-center'>
                <video src={footervid} className='h-[100%] w-full object-cover absolute' loop muted autoPlay />

                <div className='bg-white opacity-80  h-[85%] 2xl:w-330 rounded-lg w-[95%]'>


                </div>
            </div>
        </>
    )
}