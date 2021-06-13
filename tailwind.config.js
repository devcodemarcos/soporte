const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            // Build your palette here
            // transparent: 'transparent',
            // current: 'currentColor',
            // gray: colors.trueGray,
            // red: colors.red,
            // blue: colors.lightBlue,
            // yellow: colors.amber,
            
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            blue: colors.blue,
            green: colors.green,

            lime: colors.lime,
            emerald: colors.emerald,
            cyan: colors.cyan,
            rose: colors.rose,
        }
    },
    variants: {},
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}