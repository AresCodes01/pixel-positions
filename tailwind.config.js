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
            fontFamily: {
                "hanken-grotesk": ['Hanken Grotesk', '', 'yellow'],
                'comic': ['"Comic Neue"', 'cursive']
            },
            fontSize: {
                "2xs": ".625rem",
            }
        },
    },
    plugins: [],
}
