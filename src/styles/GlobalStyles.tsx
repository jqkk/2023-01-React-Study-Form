import { Global } from '@emotion/react';
import React from 'react';
import { css, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css({
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;