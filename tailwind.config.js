/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/App.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hogs-background": "url('assets/hogs-background.png')",
                cork: "url('assets/cork.jpg')",
            },
            boxShadow: {
                "inner-4xl": "inset 0px 0px 100px 50px rgb(0 0 0 / 0.5)",
                "inner-3xl": "inset 0px 0px 50px 25px rgb(0 0 0 / 0.5)",
                "inner-2xl": "inset 0px 0px 20px 10px rgb(0 0 0 / 0.5)",
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
