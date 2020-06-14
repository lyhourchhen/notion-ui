/* eslint-disable implicit-arrow-linebreak */
import { useState, useEffect } from 'react';
import { css as emotionCSS, SerializedStyles } from '@emotion/core';

interface ColorTheme {
  primary50: string;
  primary100: string;
  primary200: string;
  grey: string;
  grey08: string;
  grey16: string;
  grey32: string;
  grey60: string;
}

const defaultTheme: ColorTheme = {
  primary50: '#2eabdc',
  primary100: '#069bcd',
  primary200: '#008dbe',
  grey: 'rgb(55, 53, 47)',
  grey08: 'rgba(55, 53, 47, 0.08)',
  grey16: 'rgba(55, 53, 47, 0.16)',
  grey32: 'rgba(55, 53, 47, 0.32)',
  grey60: 'rgba(55, 53, 47, 0.60)',
};

const darkTheme: ColorTheme = {
  primary50: 'red',
  primary100: 'yellow',
  primary200: 'green',
  grey: 'rgba(255, 255, 255, 0.9)',
  grey08: 'rgba(255, 255, 255, 0.08)',
  grey16: 'rgba(255, 255, 255, 0.16)',
  grey32: 'rgba(255, 255, 255, 0.32)',
  grey60: 'rgba(255, 255, 255, 0.60)',
};

const toCSS = (cssObject: object): string =>
  Object.entries(cssObject)
    .map(([key, value]) => `--notion-ui--${key}: ${value};`)
    .join('\n');

export const commonCSS = `
  :root {
    ${toCSS(defaultTheme)}
  }
  @media (prefers-color-scheme: dark) {
    :root {
      ${toCSS(darkTheme)}
    }
  }
  :root {
    body.notion-body {
      ${toCSS(defaultTheme)}
    }
    body.notion-body.dark {
      ${toCSS(darkTheme)}
    }
  }
`;

export const useTheme = () => {
  const [initial, setInitial] = useState(false);
  useEffect(() => {
    if (!initial && window) {
      if (document.querySelector('#notion-ui-theme')) {
        setInitial(true);
        return;
      }
      const styleEl = document.createElement('style');
      styleEl.id = 'notion-ui-theme';
      document.head.appendChild(styleEl);
      const styleSheet: StyleSheet | null = styleEl.sheet;
      if (styleSheet) {
        // add default Theme color
        const sheet = styleSheet as CSSStyleSheet;
        sheet.insertRule(
          `:root { ${toCSS(defaultTheme)} }`,
          sheet.cssRules.length,
        );
        sheet.insertRule(
          `:root body.notion-body { ${toCSS(defaultTheme)} }`,
          sheet.cssRules.length,
        );
        // add dark Theme color
        sheet.insertRule(
          `@media (prefers-color-scheme: dark) :root { ${toCSS(darkTheme)} }`,
          sheet.cssRules.length,
        );
        sheet.insertRule(
          `:root body.notion-body.dark { ${toCSS(darkTheme)} }`,
          sheet.cssRules.length,
        );
        setInitial(true);
      }
    }
  }, []);
};

export const css = (
  template: TemplateStringsArray,
  ...args: any[]
): SerializedStyles => emotionCSS`
  ${commonCSS}
  ${template.reduce(
    (accum, chunk, index) => `${accum}${chunk}${args[index]}`,
    '',
  )};
`;

export const colors: ColorTheme = Object.keys(defaultTheme).reduce(
  (accum, key) => ({ ...accum, [key]: `var(--notion-ui--${key})` }),
  Object.create(defaultTheme),
);
