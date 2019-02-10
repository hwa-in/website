import { css } from 'styled-components';

const sizes = {
  tablet: 768,
  desktop: 1280,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export {
  media,
};
