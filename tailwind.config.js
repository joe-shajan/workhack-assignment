/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#7e7a83",
          200: "#2f203c",
          300: "#1b181d",
          400: "#130221",
          500: "rgba(255, 255, 255, 0.11)",
          600: "rgba(255, 255, 255, 0.08)",
          700: "rgba(255, 255, 255, 0.16)",
          800: "rgba(19, 2, 33, 0.09)",
          900: "rgba(0, 0, 0, 0.25)",
        },
        "brand-500": "#a140f2",
        "white-white": "#fff",
        ghostwhite: {
          100: "#fdfaff",
          200: "#f1f1ff",
        },
        whitesmoke: {
          100: "#f9f9f9",
          200: "#f7f6f9",
          300: "#f3f2f3",
          400: "#eae8eb",
        },
        dimgray: {
          100: "#63586c",
          200: "#5b585d",
        },
        darkolivegreen: {
          100: "#5e520f",
          200: "rgba(94, 82, 15, 0.51)",
          300: "rgba(94, 82, 15, 0.6)",
        },
        palegoldenrod: "#fff0a5",
        khaki: "#e6d68c",
        midnightblue: {
          100: "#310b50",
          200: "rgba(49, 11, 80, 0.86)",
          300: "rgba(49, 11, 80, 0.7)",
        },
        peachpuff: "#ffdbb9",
        saddlebrown: "#8a4b12",
        lightgoldenrodyellow: "#dcffd9",
        green: "#1b8a12",
        goldenrod: "#bba111",
      },
      spacing: {},
      fontFamily: {
        "text-base-regular": "'DM Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        mid: "17px",
        "2xs": "11px",
        smi: "13px",
      },
    },
    fontSize: {
      base: "16px",
      "43xl": "62px",
      "31xl": "50px",
      "18xl": "37px",
      lg: "18px",
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      "11xl": "30px",
      "13xl": "32px",
      "7xl": "26px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "3xl-6": "22.6px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        raw: "screen and (max-width: 1050px)",
      },
      sm: {
        raw: "screen and (max-width: 750px)",
      },
      xs: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
