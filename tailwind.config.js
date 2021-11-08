// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#3C3D42',
                secondary: '#282828',
                loginColor: '#38393D',
                borderColor: '#1762A7',
                facebookColor: '#3B5998',
                googleColor: '#EEEEEE',
                darkText: '#616467',
                hoverEffect: '#213869',
                googleHover: '#817F7F',
                lightPrimary: '#F35F5F',
                lightSecondary: '#F19C9C',
                lightgrey: '#C4C4C4',
                darkgrey: '#ADACAB',
                transparent: "transparent",
                current: "currentColor",
                black: "#000",
                white: "#fff",
                bluegray: colors.blueGray,
                coolgray: colors.coolGray,
                gray: colors.gray,
                truegray: colors.trueGray,
                warmgray: colors.warmGray,
                red: colors.red,
                orange: colors.orange,
                amber: colors.amber,
                yellow: colors.yellow,
                lime: colors.lime,
                green: colors.green,
                emerald: colors.emerald,
                teal: colors.teal,
                cyan: colors.cyan,
                sky: colors.sky,
                blue: colors.blue,
                indigo: colors.indigo,
                violet: colors.violet,
                purple: colors.purple,
                fuchsia: colors.fuchsia,
                pink: colors.pink,
                rose: colors.rose,
            },
            gridTemplateColumns: {
                // Simple 8 row grid
               '24': 'repeat(24, minmax(0, 1fr))',
      
                // Complex site-specific row configuration
               'layout': '200px minmax(900px, 1fr) 100px',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
