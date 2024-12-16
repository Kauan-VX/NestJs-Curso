export default {
  moduleFileExtensions: ['js', 'ts', 'json'],
  testRegex: '.*\\.e2e-spec\\.ts&',
  transform: {
    '·+\\.(t|j)s$': 'ts-jest',
  },
  collectionCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnviroment: 'node',
};
