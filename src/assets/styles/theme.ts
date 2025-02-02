// theme.ts
import { ITheme } from "../../interfaces/styled";

export const baseTheme: ITheme = {
  colors: {
    primary: "#3877ee",
    secondary: "#2b2b2b",
    success: "#4caf50",
    danger: "#f44336",
    pink: "#de76ab",
    gray: "rgba(66, 86, 122, 0.4)",
  },

  media: {
    extraLarge: "(max-width: 1140px)",
    large: "(max-width: 960px)",
    medium: "(min-width: 720px)",
    small: "(max-width: 540px)",
  },

  // in ms
  durations: {
    ms300: 300,
    // Пример: ms500: 500,
    // Можно добавить другие длительности по мере необходимости
  },
};
