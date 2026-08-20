QA-14 — Smoke Test in CI

Project Overview

This project demonstrates automated API 
smoke testing integrated into a 
Continuous Integration (CI) pipeline.

The objective is to verify critical API 
functionality automatically and provide
rapid feedback when changes are 
introduced into the application.

Project Information

Item| Details
Project ID| QA-14
Project| Smoke Test in CI
Application| Demonstration Fintech API
Testing Tool| Postman + Newman
CI Platform| GitHub Actions
Runtime| Node.js
API Port| 3000

What Was Built

The project includes:

- A demonstration fintech REST API
- Automated API smoke tests
- Positive and negative test scenarios
- A GitHub Actions CI workflow
- Test planning and test case documentation
- Defect and QA findings documentation
- A final test summary report

API Functionality Tested

The smoke test suite covers:

1. API health check
2. Valid user login
3. Invalid login rejection
4. Wallet balance retrieval
5. Transaction history
6. Wallet funding
7. Money transfer
8. Invalid wallet funding rejection
9. Insufficient balance rejection
10. Unknown endpoint handling

Test Results

The final smoke test execution produced:

Metric| Result
Test cases| 10
API requests| 10
Test scripts| 10
Assertions| 36
Failed assertions| 0
Failed requests| 0
CI iterations| 1
Overall result| PASS

All 10 smoke tests passed successfully.

Running Locally

Install the project dependencies:

npm install

Start the API:

npm start

The API runs on:

http://localhost:3000

Run the smoke tests:

npm run test:smoke

A successful execution should report:

iterations: 1
requests: 10
failed: 0
assertions: 36
failed assertions: 0

Continuous Integration

The project uses GitHub Actions to 
automate the smoke testing process.

The CI workflow:

1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies
4. Starts the API server
5. Waits for the health endpoint
6. Runs the Newman smoke test suite
7. Collects available test evidence and API logs
8. Stops the API server

This allows smoke tests to run 
automatically as part of the software development workflow.

Project Structure

qa-14-smoke-test-ci/
├── .github/
│   └── workflows/
│       └── smoke-tests.yml
├── application/
│   └── src/
│       └── server.js
├── docs/
│   ├── bug-reports.md
│   ├── test-cases.md
│   ├── test-plan.md
│   └── test-summary-report.md
├── tests/
│   └── postman/
│       └── smoke-tests.json
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

QA Documentation

Test Plan

"docs/test-plan.md" contains the testing 
objectives, scope, environment, risks, 
approach, and execution strategy.

Test Cases

"docs/test-cases.md" contains the detailed 
smoke test cases, expected results, 
priorities, and pass criteria.

Bug Reports and Triage

"docs/bug-reports.md" documents QA findings, 
severity, priority, impact, status,
and recommendations.

Test Summary Report

"docs/test-summary-report.md" contains 
the final test execution results and overall assessment.

Defect Assessment

During testing, several findings were 
identified in the demonstration API, 
including missing authentication 
protection on some wallet endpoints, 
in-memory financial data, and a static 
demonstration authentication token.

These findings do not prevent the smoke test
suite from demonstrating the CI workflow.

However, they would need to be addressed
before a similar application could be 
considered production-ready.

Important Note

This project uses a demonstration 
fintech API created specifically 
for QA testing and CI automation.

It is not intended to process
real financial transactions.

Conclusion

QA-14 demonstrates how automated API 
smoke testing can be integrated into 
a Continuous Integration pipeline.

The final execution completed with:

- 10 smoke tests passed
- 36 assertions passed
- 0 failed assertions
- 0 failed requests
- 1 CI iteration

The project demonstrates 
a complete QA workflow covering
test planning, test case design, 
automated API testing, defect 
documentation, CI execution, 
and final test reporting.
