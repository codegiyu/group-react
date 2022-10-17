import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../index.css';
import logo from '../img/logo.png';
import circles from '../img/circles.png';
import angle from '../img/angle.png';
import check from '../img/check.png';
import dots from '../img/dots.png';
import quote from '../img/quote.png';


const ImageSection = () => {
    return (
        <div className="image-section bg-layer relative w-full h-full bg-no-repeat bg-cover">
            <div className="absolute inset-0 opacity-[0.90] w-full h-full bg-lightBlue"></div>
            <img src={ circles } alt="circles" className="absolute bottom-0 left-0 h-24" />
            <img src={ dots } alt="dots" className="absolute top-[20%] right-[20%] h-10" />
            <div className="relative flex flex-col justify-between text-white w-full h-full z-10 pl-12 pr-16 py-9">
                <header className="w-full">
                    <Link to="/"><div className="w-auto flex gap-1 items-center">
                        <img src={ logo } alt="logo" className="h-[20px]" />
                        <p className="font-poppins text-xs font-normal mt-2">Oasis</p>
                    </div></Link>
                </header>
                <div className="flex flex-col gap-3">
                    <img src={ quote } alt="quote" className="w-4 mb-3" />
                    <p className="text-sm leading-loose w-[90%]">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
                    <div className="flex gap-3 items-center">
                        <p className="text-sm leading-loose">Vincent Obi</p>
                        <img src={ check } alt="check" className="w-3 h-3" />
                    </div>
                    <div className="flex justify-end pr-6">
                        <img src={ angle } alt="angle" className="w-6 text-end" />
                    </div>
                </div>
                <div></div>
            </div>
            <Outlet />
        </div>
    )
}


export default ImageSection