import HeaderAbout from "../app/components/HeaderAbout";
import { ImagesItems } from "../app/utils/ImagesItems";

const Ressources = () => {
    return (
        <>
            <section className='sm:px-20 pt-7 pb-40'>
                <h3 className='carte-text carte-text-after text-center text-4xl font-bold py-36 uppercase'>Gallerie photo</h3>
                <div className='columns-2 lg:columns-4 gallerie'>
                    {ImagesItems.map((img, index)=> {
                        return (
                            <div className='pics cursor-pointer mb-4' key={index} onClick={()=>getImg(img.ImgSrc)}>
                                <img className='w-full border' src={img.ImgSrc} alt="picture"/>
                            </div>
                        )
                    })}
                </div>
            </section>
            <HeaderAbout/>
        </>
    )
}
export default Ressources;
