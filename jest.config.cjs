module.exports = {
     preset: "ts-jest",
     testEnvironment: "jsdom",
     setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
     moduleNameMapper: {
          "\\.(css|less|scss|sass)$": "identity-obj-proxy",
          "^@/(.*)$": "<rootDir>/$1",
     },
     transform: {
          "^.+\\.tsx?$": "ts-jest",
          "^.+\\.jsx?$": "babel-jest",
     },
};
