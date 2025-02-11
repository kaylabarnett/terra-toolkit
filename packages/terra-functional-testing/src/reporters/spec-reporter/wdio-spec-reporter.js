const fs = require('fs-extra');
const path = require('path');
const WDIOReporter = require('@wdio/reporter').default;
const getOutputDir = require('./get-output-dir');

class SpecReporter extends WDIOReporter {
  /**
   * Hook invoked when the runner ends.
   * @param {RunnerStats} runner - The test runner stats object.
   */
  onRunnerEnd(runner) {
    // The root suite is always at index 0 and is guaranteed to exist.
    const rootSuite = this.currentSuites[0];
    const results = SpecReporter.formatResults(rootSuite, runner);

    SpecReporter.writeResults(runner, results);
  }

  /**
   * Formats the test runner spec results.
   * @param {SuiteStats} rootSuite - The root suite object.
   * @param {RunnerStats} runner - The test runner stats object.
   * @returns {Object} - A formatted results object for a single spec file.
   */
  static formatResults(rootSuite, runner) {
    const {
      start,
      end,
      capabilities,
      specs,
    } = runner;

    const { suites, tests } = rootSuite;

    return {
      spec: specs[0],
      start,
      end,
      capabilities: SpecReporter.formatCapabilities(capabilities),
      packageName: SpecReporter.getPackageName(specs[0]),
      suites: SpecReporter.formatSuites(suites),
      tests: SpecReporter.formatTests(tests),
    };
  }

  /**
   * Formats the browser capabilities.
   * @param {Object} capabilities - The browser capabilities.
   */
  static formatCapabilities(capabilities) {
    const { browserName, platform, version } = capabilities;

    return { browserName, platform, version };
  }

  /**
   * Formats the test suite results.
   * @param {array} suites - The collection of suites.
   * @returns {Object} - A formatted suite results object.
   */
  static formatSuites(suites) {
    return suites.map((suite) => {
      const {
        title,
        fullTitle,
        duration,
        start,
        end,
        tests,
      } = suite;

      return {
        title,
        fullTitle,
        duration,
        start,
        end,
        tests: SpecReporter.formatTests(tests),
        suites: SpecReporter.formatSuites(suite.suites),
      };
    });
  }

  /**
   * Formats the test results.
   * @param {array} tests - An array of test results.
   * @returns {Object} - A formatted test results object.
   */
  static formatTests(tests) {
    return tests.map((test) => {
      const {
        title,
        fullTitle,
        duration,
        start,
        end,
        state,
        error,
      } = test;

      return {
        title,
        fullTitle,
        duration,
        start,
        end,
        state,
        error,
      };
    });
  }

  /**
   * Returns the package name of the spec file.
   * @param {string} spec - The spec filepath.
   * @returns {string} - The package name of the spec file.
   */
  static getPackageName(spec) {
    // Check if the spec file is nested within a monorepo package.
    if (spec.indexOf(`${path.sep}packages${path.sep}`) > -1) {
      return spec.split(`${path.sep}packages${path.sep}`).pop().split(path.sep)[0];
    }
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packagejson = fs.readJsonSync(packageJsonPath);
      return packagejson.name;
    }
    return process.cwd().split(path.sep).pop();
  }

  /**
   * Writes the spec results to file.
   * @param {RunnerStats} runner - The test runner stats object.
   * @param {Object} results - A formatted results object for a spec file.
   */
  static writeResults(runner, results) {
    const { cid } = runner;
    const outputDir = getOutputDir();

    // Create the output directory if it does not already exist.
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const fileName = path.join(outputDir, `wdio-spec-results-${cid}.json`);

    fs.writeFileSync(fileName, JSON.stringify(results, null, 2));
  }
}

module.exports = SpecReporter;
