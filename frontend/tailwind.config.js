
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,css,jsx,js,tsx,ts}",
    ],
    darkMode: 'class', // Enable dark mode support
    theme: {
        extend: {
            colors: {
                primary: '#4f46e5',
                lightPink: '#fcd5ce',
                darkBlue: '#1e3a8a',
                wine: '#722f37',
                violet: '#8b5cf6',
            },
    
        },

    },
    plugins: [],
}
// 'ment-ai-highlight': '#111827',
