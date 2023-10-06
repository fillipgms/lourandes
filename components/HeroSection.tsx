import React from "react";
import wallpaper from "@/public/imgs/wallpaper.png";

const HeroSection = () => {
    return (
        <section
            className="md:h-screen h-[70vh] w-full bg-cover flex items-center justify-center bg-center flex-col gap-4"
            style={{ backgroundImage: `url(${wallpaper.src})` }}
        >
            <span className="lowercase tracking-[.5rem]">lourandes</span>
            <h1 className="uppercase font-bold tracking-[.5rem] drop-shadow-white  text-2xl">
                superficialidade
            </h1>
        </section>
    );
};

export default HeroSection;
