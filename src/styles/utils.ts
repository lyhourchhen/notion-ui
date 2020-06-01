import { SerializedStyles } from '@emotion/core';

export const cssToReactStyle = (...styles: SerializedStyles[]): object => {
  const regex = /([\w-]*)\s*:\s*([^;]*)/g;
  const mergedStyle = styles.reduce((accum, { styles }) => accum + styles, '');
  return mergedStyle.match(regex)?.reduce((accum, chunk) => {
    const [key, value] = chunk.split(':');
    accum[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = value;
    return accum;
  }, {});
};
