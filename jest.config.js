/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        url: 'http://localhost',
    },
    testMatch: ['**/__tests__/**/*.test.js'],
    testTimeout: 7000,
}

module.exports = config