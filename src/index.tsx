export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

// COMPONENTS
export { default as Button } from './components/button';
export { default as Heading } from './components/heading';
export { default as FontsLoader } from './components/helpers';
export { default as Input } from './components/input';
export { default as Colors } from './components/styles';
export { default as Text } from './components/text';
