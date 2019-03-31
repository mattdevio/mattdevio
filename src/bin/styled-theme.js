// Vendor Imports
import { css } from 'styled-components';

/**
 * generateMediaMixin - Construct media queries based
 * @param  {object} sizes [Key value pair of label to pixel size]
 * @return {object}       [Mixin functions]
 */
export function generateMediaMixin (sizes) {
  return Object.keys(sizes).reduce((acc, label) => {
    const mediaString = `(max-width:${ sizes[label] / 16 }em)`;
    acc[label] = (...args) => css`
      @media ${ mediaString } {
        ${ css(...args) }
      }
    `;
    acc[label].toString = () => mediaString;
    acc[label].breakPoint = sizes[label];
    return acc;
  }, {});
}

/**
 * moolahlahTheme - a styled component theme object
 */
export const matdevioTheme = {
  ...generateMediaMixin({
    small: 550,
    medium: 780,
    large: 980,
  }),
  typeFont: 'Hypatia Sans Pro, Helvetica, sans-serif',
  accentFont: 'Uppercut Angle',
  headerFont: 'program, sans-serif',
  siteMaxWidth: '120rem',
  white: '#FFFFFF',
  black: '#0B132B',
  navy: '#1C2541',
  greyblue: '#3A506B',
  greenblue: '#5BC0BE',
  teal: '#6FFFE9',
  alertRed: '#E74C3C',
  alertYellow: '#F5D95F',
};
