/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
//   preset: 'ts-jest',
  transform: {
  	"\\.[jt]sx?$": "babel-jest",
  },
  rootDir: './',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
	  "\\.(css|less|scss)$": "identity-obj-proxy"
  },
};

//   "jest": {
//     "moduleNameMapper": {
//       "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
//     },
//     "transform": {
//       "^.+\\.tsx?$": "ts-jest"
//     },
//     "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$"
//   },