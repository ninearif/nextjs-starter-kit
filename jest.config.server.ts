// Server-side testing config
import { createJestConfig, customJestConfig } from './jest.config';

const customServerConfig = {
  ...customJestConfig,
  // instead of 'jsdom' environment, use node as the testEnvironment.
  testEnvironment: 'node',
  // match test with .server.spec|test.ts(x)
  testMatch: ['**/?(*.)+(server).(spec|test).[jt]s'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.server.ts'],
};

export default createJestConfig(customServerConfig);
