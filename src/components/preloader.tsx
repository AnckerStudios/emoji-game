import { FunctionComponent } from "react";


interface PreloaderProps {
    
}
 
const Preloader: FunctionComponent<PreloaderProps> = () => {
    const image = "https://www.gstatic.com/android/keyboard/emojikitchen/20211115/u1f34a/u1f34a_u1f9a5.png";
    return (
        <div className='flex h-full items-center justify-center'>
             <img className="animate-[spin_4s_linear_infinite] h-big w-big" src={image}/>
        </div>
    );
}
 
export default Preloader;