import { JetBrains_Mono } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          chillax: ['var(--font-chillax)'],
          archivo: ['var(--font-archivo)'],
          jetbrains: ['var(--font-jetbrains)'],
        },
      backgroundImage: {
          "hero" : "url('/images/hero.svg')",
          "collection-men1" : "url('/images/collection-men1.svg')",
          "collection-men2" : "url('/images/collection-2.svg')",
      },

      colors: {
        'b-black': '#1D1D1D',
        'b-dark-gray' : '#7E7E7E',
        'b-gray' : '#C3C3C3',
      },

      borderRadius: {
        '52': '52px',
        '32' : '32px',
      },

      height:{
        '30': '30em',
        '25': '25em',
      },
    },
  },
  plugins: [],
};
export default config;
