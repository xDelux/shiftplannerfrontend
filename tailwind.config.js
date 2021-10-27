// tailwind.config.js
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
                darkgrey: '#ADACAB'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
