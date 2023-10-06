import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            dropShadow: {
                white: "0 1px 10px rgba(255, 255, 255, 1 )",
                "white-20": "0 1px 10px rgba(255, 255, 255, .2 )",
            },
            colors: {
                dark: "#121212",
                light: "#f1f1f1",
                gray: "#161616",
                pink: "#E65F5C",
            },
        },
    },
    plugins: [],
};
export default config;
