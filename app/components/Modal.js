import {AiOutlineClose} from "react-icons/ai";


const Modal = ({modal, setModal, imgSrc}) => {

    return (
        <div className={`${modal ? 'scale-100 opacity-1 visible modal fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden' : 'opacity-0 hidden'}`}>
                <button className='border justify-center items-center flex fixed text-white text-2xl top-10 right-10 cursor-pointer' onClick={()=>setModal(false)}>
                    <AiOutlineClose/> 
                </button>
                <img className='h-auto max-h-full w-auto max-w-full py-10' src={imgSrc} alt=""/>
            </div>
    )
}

export default Modal;  