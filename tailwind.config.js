// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#3C3D42',
                secondary: '#282828',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
