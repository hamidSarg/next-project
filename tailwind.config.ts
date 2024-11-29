import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'regular-12-500': ['12px', {
        fontWeight: '500',
        lineHeight: '20px',
      }],
      'regular-14-400': ['14px', {
        lineHeight: '114.2%',
        fontWeight: '400',
      }],
    },
    extend: {
      fontFamily: {
        primary: 'IRANSansX',
        primaryBold: 'IRANSansX-Bold'
      },
      animation: {
        'ping-pong': 'pingPong 10s linear infinite',
      },
      keyframes: {
        pingPong: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
