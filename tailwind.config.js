/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#00B768",
                "transparent-bg": "#00CE7633",
                gradient: "#00CE7626",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
            },
            backgroundImage: {
                "section-bg": "url('/images/section-bg.svg')",
            },
            keyframes: {
                customBounce: {
                    "0%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-2%)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                customBounce: "customBounce 4s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
