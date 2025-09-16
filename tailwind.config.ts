import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myprimary: "#4CAF50",
        mysecondary: "#FF9800",
        myaccent: "#FFC107",
        mybg: "#F5F5F5",
        mytext: "#212121",
        myerror: "#EF4444",
        mysuccess: "#22C55E",
        mywarning: "#F59E0B",
        myinfo: "#3B82F8",
      },
    },
  },
  plugins: [],
} satisfies Config;
