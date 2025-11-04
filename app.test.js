const { greet } = require('./app');

test('should greet the given name', () => {
  expect(greet('Bubu')).toBe('👋 Hello, Bubu!');
});
