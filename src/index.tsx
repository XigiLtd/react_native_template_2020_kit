export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

// COMPONENTS
export { default as Button } from './components/button';
export * from './components/button/dto/buttonSytelProp';

export { default as Heading } from './components/heading';
export * from './components/heading/dto/headTypes';
export * from './components/heading/dto/headingStyleProp';

export { default as FontsLoader } from './components/helpers';

export { default as Input } from './components/input';

export { default as Colors } from './components/styles/colors';

export { default as Fonts } from './components/styles/fonts';
export * from './components/styles/fonts/fontTypes';

export { default as Text } from './components/text';
export * from './components/text/dto/textStyleProp';
