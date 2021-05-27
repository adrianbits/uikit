import { Colors } from "./types";

export const baseColors = {
  failure: "#FF3B30",
  primary: "#FF2D55",
  primaryBright: "#FF6885",
  primaryDark: "#F1002E",
  secondary: "#FF9500",
  success: "#34C759",
  warning: "#FF9500",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#F4F4F7",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#261913",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#F4F0EA",
  inputSecondary: "#ECDCCA",
  tertiary: "#F5EFF0",
  text: "#5F370D",
  textDisabled: "#C4BDBE",
  textSubtle: "#AA846E",
  disabled: "#EBE9E9",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFE5E5 0%, #FFF6EF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #FFF6EF 0%, #FFE5E5 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2F1EC 0%, #F6E8E8 100%)",
    blue: "linear-gradient(180deg, #F1A7A7 0%, #F29494 100%)",
    violet: "linear-gradient(180deg, #FBE4C9 0%, #FADCB8 100%)",
    violetAlt: "linear-gradient(180deg, #EFDDCB 0%, #D0BA9A 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#FF9F0A",
  background: "#1C1C1E",
  backgroundDisabled: "#423D37",
  backgroundAlt: "#2C2926",
  cardBorder: "#413932",
  contrast: "#FFFFFF",
  dropdown: "#201F1D",
  dropdownDeep: "#18120C",
  invertedContrast: "#261D13",
  input: "#473D2F",
  inputSecondary: "#302721",
  primaryDark: "#F1002E",
  tertiary: "#473C35",
  text: "#FFF3EE",
  textDisabled: "#716861",
  textSubtle: "#D2C1AD",
  disabled: "#63544B",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5C3131 0%, #54402A 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #54402A 0%, #5C3131 100%)",
    cardHeader: "linear-gradient(166.77deg, #553B3B 0%, #453C30 100%)",
    blue: "linear-gradient(180deg, #7F0000 0%, #8C1926 100%)",
    violet: "linear-gradient(180deg, #996149 0%, #B2704D 100%)",
    violetAlt: "linear-gradient(180deg, #755A43 0%, #8D6E57 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};