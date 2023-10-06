import React from "react";
import about from "@/public/imgs/about.jpeg";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Sobre = () => {
    const redesStyle = "hover:drop-shadow-white transition-all";

    return (
        <section className="px-10">
            <h2 className="text-2xl font-semibold py-4">Sobre mim</h2>
            <div className="flex gap-5 md:flex-row flex-col">
                <div className="flex-1">
                    <img
                        src={about.src}
                        alt="lourandes"
                        className="aspect-video md:aspect-auto object-cover"
                    />
                </div>
                <div className="flex-1 text-center justify-center flex flex-col gap-5">
                    <span>
                        <h3 className="text-xl font-semibold">
                            Luísa Lourandes
                        </h3>
                        <h4>Cantora, Compositora, Produtora</h4>
                    </span>
                    <p className="text-justify">
                        combino elementos da música pop com temas que exploram
                        emoções e experiências mais sombrias. Minha música
                        frequentemente explora tópicos complexos como depressão,
                        excesso de informação, fama e saúde mental, de uma forma
                        que é relacionável e emocionalmente evocativa.
                    </p>
                    <ul className="flex gap-2 text-2xl justify-center">
                        <li className={redesStyle}>
                            <a
                                href="https://www.instagram.com/iamlourandes/?theme=dark"
                                target="_blank"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                        <li className={redesStyle}>
                            <a href="https://twitter.com/home" target="_blank">
                                <AiFillTwitterCircle />
                            </a>
                        </li>
                        <li className={redesStyle}>
                            <a
                                href="https://www.tiktok.com/@lourandesandthedrama"
                                target="_blank"
                            >
                                <FaTiktok />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
