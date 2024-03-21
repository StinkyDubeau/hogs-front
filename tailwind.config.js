/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/App.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hogs-background": "url('assets/hogs-background.jpg')",
                cork: "url('assets/cork.jpg')",
            },
            boxShadow: {
                vignette: "inset 0px 0px 150px 75px rgb(0 0 0 / 0.5)",
                "inner-4xl": "inset 0px 0px 100px 50px rgb(0 0 0 / 0.5)",
                "inner-3xl": "inset 0px 0px 50px 25px rgb(0 0 0 / 0.5)",
                "inner-2xl": "inset 0px 0px 20px 10px rgb(0 0 0 / 0.5)",
                "inner-xl": "inset 0px 0px 10px 5px rgb(0 0 0 / 0.1)",

            },
            backdropBlur: {
                xs: "2px",
            },
            animation: {
                "infinite-scroll": "infinite-scroll 25s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
        fontFamily: {
            tourmaline: ["Pixelify Sans", "sans-serif"],
            hogs: ["Barlow Semi Condensed", "sans-serif"],
            ipsum: ["Flow Circular", "sans-serif"],
            sansui: ["Josefin Sans", "sans-serif"],
        },
    },
    plugins: [require("@pyncz/tailwind-mask-image"), require("daisyui")],
};
