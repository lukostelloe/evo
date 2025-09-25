
import { useMediaQuery as useMediaQueryHook } from '@uidotdev/usehooks';

export const breakpoints = {
  xs: '350px',
  sm: '580px',
  md: '840px',
  lg: '1024px',
  xl: '1240px',
  '2xl': '1440px',
};

type MinOrMaxWidth = 'min' | 'max';
type Breakpoint = keyof typeof breakpoints;
const getMediaQueryString = (w: MinOrMaxWidth, breakpoint: Breakpoint) =>
  `only screen and (${w}-width: ${breakpoints[breakpoint]})`;


export function useMediaQuery(w: MinOrMaxWidth, breakpoint: Breakpoint) {
  return useMediaQueryHook(getMediaQueryString(w, breakpoint));
}
