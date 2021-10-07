// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
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
                googleHover: '#817F7F'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
