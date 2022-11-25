/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        fontFamily: {
            "hand": ['Caveat', "cursive"],
        },
        extend: {
            backgroundImage: {
                "paper-pattern": "repeating-linear-gradient(90deg, rgba(255,255,255, 0.06) 0px, rgba(255,255,255, 0.06) 1px,transparent 1px, transparent 96px),repeating-linear-gradient(0deg, rgba(255,255,255, 0.06) 0px, rgba(255,255,255, 0.06) 1px,transparent 1px, transparent 96px),repeating-linear-gradient(0deg, rgba(0,0,0, 0.09) 0px, rgba(0,0,0, 0.09) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, rgba(0,0,0, 0.09) 0px, rgba(0,0,0, 0.09) 1px,transparent 1px, transparent 12px),linear-gradient(90deg, rgb(255,248,182),rgb(255,248,182));",
            }
        },
    },
    plugins: [],
}
