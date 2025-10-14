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
                "black": '#060606', // jetzt korrekt
            },
        },
    },
    plugins: [],
}
