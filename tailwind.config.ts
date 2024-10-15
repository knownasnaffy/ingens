import type { Config } from "tailwindcss";

export default {
  content: ["./client/**/*.{ts,tsx,js,jsx}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
