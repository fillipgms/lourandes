import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const searchSpotify = async () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "";
    const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || "";

    try {
        const authResponse = await axios.post(
            "https://accounts.spotify.com/api/token",
            null,
            {
                params: {
                    grant_type: "client_credentials",
                },
                auth: {
                    username: clientId,
                    password: clientSecret,
                },
            }
        );

        const accessToken = authResponse.data.access_token;

        const { data } = await axios.get(
            "https://api.spotify.com/v1/artists/3Un59PenImYu2RdwRb6cDv/albums",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        return data.items;
    } catch (error) {
        // Trate erros aqui, por exemplo, lançando um erro personalizado ou retornando um valor padrão.
        console.error("Erro na busca do Spotify:", error);
        return [];
    }
};

export default searchSpotify;
