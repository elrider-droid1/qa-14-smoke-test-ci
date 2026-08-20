# QA-14 Smoke Test in CI
# Test Summary Report

**Project ID:** QA-14
**Project Title:** Smoke Test in CI
**Application Under Test:** QA-14 Fintech API
**Testing Type:** Automated Smoke Testing
**Test Framework:** Postman + Newman
**CI Platform:** GitHub Actions
**Test Date:** 20 August 2026
**Version:** 1.0

---

## 1. Executive Summary

This project implements an automated smoke test suite for a demonstration fintech API and integrates the tests into a Continuous Integration (CI) pipeline.

The API provides health checking, authentication, wallet balance retrieval, transaction history, wallet funding, and money transfer functionality.

Postman was used to define the API smoke tests and Newman was used to execute them automatically.

GitHub Actions was configured to check out the repository, install dependencies, start the API server, wait for the application to become available, execute the smoke tests, upload test evidence, and stop the API server.

The final CI execution completed successfully with all smoke tests passing.

---

## 2. Test Objectives

The objectives of this project were to:

1. Verify critical API functionality.
2. Automate repetitive smoke testing.
3. Verify positive and negative API scenarios.
4. Integrate automated testing into CI.
5. Ensure smoke tests run automatically in GitHub Actions.
6. Provide test evidence and a test summary report.
7. Demonstrate that CI can detect failures in automated tests.

---

## 3. Scope

The following functionality was tested:

- API health check
- Valid user login
- Invalid login rejection
- Wallet balance retrieval
- Transaction history
- Wallet funding
- Money transfer
- Invalid wallet funding rejection
- Insufficient balance rejection
- Unknown endpoint handling

---

## 4. Test Environment

| Component | Configuration |
|---|---|
| Operating environment | GitHub Actions |
| CI runner | GitHub-hosted Linux runner |
| Runtime | Node.js |
| API | QA-14 Fintech API |
| API port | 3000 |
| Test tool | Postman + Newman |
| CI platform | GitHub Actions |
| Repository | elrider-droid1/qa-14-smoke-test-ci |

---

## 5. Test Execution

The automated smoke test suite contains 10 test cases.

The test suite was executed using:

    npm run test:smoke

The command executes the Newman collection:

    newman run tests/postman/smoke-tests.json

The smoke test suite was successfully executed locally and through the GitHub Actions CI pipeline.

---

## 6. Test Results

### Overall Results

| Metric | Result |
|---|---:|
| Total test cases | 10 |
| Total API requests | 10 |
| Total test scripts | 10 |
| Total assertions | 36 |
| Failed assertions | 0 |
| Failed requests | 0 |
| CI iterations | 1 |
| Overall result | PASS |

### Individual Test Results

| Test ID | Test Description | Expected Status | Result |
|---|---|---:|---|
| ST-001 | API Health | 200 | PASS |
| ST-002 | Valid Login | 200 | PASS |
| ST-003 | Invalid Login | 401 | PASS |
| ST-004 | Wallet Balance | 200 | PASS |
| ST-005 | Transactions | 200 | PASS |
| ST-006 | Fund Wallet | 200 | PASS |
| ST-007 | Transfer Money | 200 | PASS |
| ST-008 | Invalid Funding | 400 | PASS |
| ST-009 | Insufficient Balance | 400 | PASS |
| ST-010 | Unknown Endpoint | 404 | PASS |
