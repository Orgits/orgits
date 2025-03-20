/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js Pages Router
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // For Next.js App Router
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };