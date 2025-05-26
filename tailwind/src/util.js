/* Hex conversions */

const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

/* Pixel conversions */

const pxToEm = (px, base = 16) => `${stripUnit(px) / base}em`;
const pxToPercent = (px) => `${+(px * 100).toFixed(6)}%`;
const pxToRem = (px, base = 16) => `${stripUnit(px) / base}rem`;
const pxToVw = (px, base = 1024) => `${(100 / base) * stripUnit(px)}vw`;

/* Rem conversions */

const remToPx = (rem, base = 16) => `${stripUnit(rem) * base}`;
const remToVw = (rem, screen = 1024) =>
  `${(100 / screen) * remToPx(stripUnit(rem))}vw`;

/* Strip units to use in conversions */

const stripUnit = (str) => `${str}`.replace(/em|px|rem|%|vh|vw/gi, '');

module.exports = {
  hexToRgb,
  pxToEm,
  pxToPercent,
  pxToRem,
  pxToVw,
  remToPx,
  remToVw,
  stripUnit,
};
