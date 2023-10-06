"use client";
import { useState, useEffect } from "react";

import searchSpotify from "@/lib/spotifyApi";

interface Musicas {
    id: string;
    name: string;
    images: any;
    external_urls: any;
    release_date: string;
    type: string;
    total_tracks: number;
}

const UltimosLancamentos = () => {
    const [musicas, setMusicas] = useState<Musicas[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const items = await searchSpotify();
            setMusicas(items);
        };

        fetchData();
    }, []);

    return (
        <section className="py-5 px-10">
            <h2 className="md:text-right text-center text-2xl font-semibold py-4">
                Meus Últimos Lançamentos
            </h2>

            <ul className="flex gap-5 flex-wrap justify-around">
                {musicas.slice(0, 5).map((musica) => (
                    <li className="bg-gray p-5 rounded-md shadow-lg  hover:drop-shadow-white-20 transition-all ">
                        <a
                            href={musica.external_urls.spotify}
                            key={musica.id}
                            target="_blank"
                            className="flex flex-col gap-4 w-52"
                        >
                            <div className="">
                                <img
                                    src={musica.images[0].url}
                                    alt={musica.name}
                                    className="w-full rounded-md shadow-md "
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg text-ellipsis whitespace-nowrap overflow-hidden">
                                    {musica.name}
                                </h3>
                                <div className="flex gap-1">
                                    <span>
                                        {musica.release_date.slice(0, 4)}
                                    </span>
                                    &#128900;
                                    <span>
                                        {musica.total_tracks === 1
                                            ? "single"
                                            : musica.type}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default UltimosLancamentos;
