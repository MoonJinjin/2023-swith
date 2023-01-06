import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainBackground: string;
      subBackground: string;
      primaryText: string;
      secondaryText: string;
      subText: string;
    };
  }
}
