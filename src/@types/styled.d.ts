import 'styled-components';
import { light } from './../assets/theme';

declare module 'styled-components' {
  type ThemeType = typeof light;

  export interface DefaultTheme extends ThemeType {}
}