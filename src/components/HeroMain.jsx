import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import heroImg from "../assets/hero copy.png"


const HeroMain = () => {
    return (
        <div className="text-center py-10 grid justify-items-center">
            <h2 className="text-4xl font-bold">We Build <br /> <span className="text-[#804fe8]">Productive</span> Apps</h2>
            <p className="font-extralight text-sm py-4 w-2/3">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="flex gap-2 py-4">
                <button className="btn"><FaGooglePlay />Google Play</button>
                <button className="btn"><FaAppStoreIos />App Store</button>
            </div>
            <img className="w-96" src={heroImg} alt="" />
        </div>
    );
};

export default HeroMain;