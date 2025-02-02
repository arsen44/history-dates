// styled.ts

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    pink: string;
    gray: string;
  };

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };

  durations: {
    ms300: number;
  };
}
