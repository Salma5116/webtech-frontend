module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\.vue$': '@vue/vue3-jest',
    '^.+\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['vue', 'js'],
  moduleNameMapper: {
    '^@/(.)$': '<rootDir>/src/$1'
  },
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  testRegex: '(/tests/.|(\.|/)(test|spec))\.(js|ts)$'
}
