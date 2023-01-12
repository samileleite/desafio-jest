import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    automock: false,
    collectCoverage: true,
    collectCoverageFrom: [
        "src/classes/**/*.ts",
        "src/interfaces/**/*.ts",
        "src/services/**/*.ts",
    ],
    coverageDirectory: "coverage",
    coverageReporters: [ "text", "lcov"],
    reporters: ["default"],
    // testMatch: ["__tests__/*.spec.ts"]
};
export default config;

