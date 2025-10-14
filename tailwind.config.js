// tailwind.config.js
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                black: 'rgb(0, 200, 200)', // jetzt korrekt
            },
        },
    },
    plugins: [],
}
