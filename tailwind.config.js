/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#02040a",
        obsidian: "#070b12",
        eclipse: "#0c1220",
        cyan: "#2ee9dc",
        pulse: "#3f73ff",
        violet: "#8b5cf6",
        copper: "#d7a85c",
        starlight: "#f2f7fb",
        mist: "#a8b3c7",
        nebula: "#6d788d",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "0.5rem",
        shell: "1.75rem",
      },
      boxShadow: {
        cinematic:
          "0 56px 160px rgb(0 0 0 / 0.38), inset 0 1px 0 rgb(242 247 251 / 0.08)",
        control: "inset 0 1px 0 rgb(242 247 251 / 0.1)",
      },
      transitionTimingFunction: {
        fluid: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
