// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
// setupFile.js <-- this will run before the tests in jest.
import { setGlobalConfig } from '@storybook/testing-react'
import * as globalStorybookConfig from './.storybook/preview' // path of your preview.js file

setGlobalConfig(globalStorybookConfig)
