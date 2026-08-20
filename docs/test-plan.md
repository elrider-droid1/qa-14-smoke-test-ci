# QA-14 Smoke Test in CI
## Test Plan

### 1. Project Information

**Project ID:** QA-14  
**Project Title:** Smoke Test in CI  
**Track:** Quality Assurance  
**Group:** Group D  
**Application Under Test:** QA-14 Fintech API  
**Testing Type:** Automated Smoke Testing  
**Automation Tool:** Postman/Newman  
**CI Platform:** GitHub Actions  

---

## 2. Project Overview

The QA-14 project addresses the problem of broken software builds being allowed to proceed without sufficient automated verification.

The objective of this project is to implement a set of automated smoke tests for a fintech API and integrate those tests into a Continuous Integration (CI) pipeline.

The smoke tests will verify the availability and basic functionality of critical application services after code changes are introduced.

---

## 3. Testing Objectives

The objectives of testing are to:

1. Verify that the application is available after a build.
2. Verify that critical API endpoints respond correctly.
3. Verify successful user authentication.
4. Verify that invalid authentication attempts are rejected.
5. Verify wallet balance functionality.
6. Verify transaction history functionality.
7. Verify wallet funding functionality.
8. Verify money transfer functionality.
9. Verify important validation rules.
10. Automatically execute smoke tests through CI.
11. Prevent a failed smoke-test suite from being considered a successful CI build.

---

## 4. Scope

### In Scope

The following functionality is included:

- API health check
- User login
- Invalid login handling
- Wallet balance retrieval
- Transaction history
- Wallet funding
- Wallet funding validation
- Money transfer
- Insufficient balance validation
- Unknown endpoint handling
- Automated smoke-test execution
- CI integration
- Test result reporting

### Out of Scope

The following are outside the scope of this MVP:

- Full security penetration testing
- Performance/load testing
- Mobile application testing
- UI testing
- Database performance testing
- Payment gateway integration
- Production deployment
- Full regression testing

---

## 5. System Under Test

The system under test is a Node.js and Express-based fintech API.

### Core Endpoints

| Endpoint | Method | Purpose |
|---|---|---|
| `/health` | GET | Verify service availability |
| `/api/login` | POST | Authenticate a user |
| `/api/wallet/balance` | GET | Retrieve wallet balance |
| `/api/transactions` | GET | Retrieve transaction history |
| `/api/wallet/fund` | POST | Fund wallet |
| `/api/wallet/transfer` | POST | Transfer funds |

---

## 6. Testing Approach

The project uses automated API smoke testing.

Tests will be created using Postman and executed automatically using Newman.

The smoke-test suite will focus on critical application functionality and basic validation rules.

The tests will be integrated into GitHub Actions so that they can execute automatically when changes are pushed to the repository or submitted through a pull request.

---

## 7. Smoke Test Strategy

The smoke-test suite will contain ten critical tests.

The suite will verify:

1. Service availability.
2. Successful authentication.
3. Rejection of invalid authentication.
4. Wallet balance availability.
5. Transaction availability.
6. Successful wallet funding.
7. Successful transfer.
8. Rejection of invalid wallet funding.
9. Rejection of transfers exceeding available balance.
10. Proper handling of unknown routes.

A failure in a critical smoke test should cause the CI job to fail.

---

## 8. Test Environment

### Local Environment

- Operating System: Linux/Termux environment
- Runtime: Node.js
- Application Framework: Express.js
- API Port: 3000

### Automation Environment

- Postman
- Newman
- GitHub Actions
- GitHub repository

---

## 9. Test Data

### Valid User

Email:

`testuser@example.com`

Password:

`Password123!`

### Initial Wallet Balance

`NGN 50,000`

### Valid Funding Amount

`NGN 1,000`

### Valid Transfer Amount

`NGN 5,000`

### Invalid Funding Amount

`NGN 0`

### Insufficient Transfer Amount

An amount greater than the available wallet balance.

---

## 10. Entry Criteria

Testing can begin when:

- The application can start successfully.
- Required dependencies are installed.
- Critical API endpoints are available.
- Test data is available.
- Postman/Newman is configured.

---

## 11. Exit Criteria

Smoke testing is considered successful when:

- All critical smoke tests pass.
- No critical smoke-test defect remains unresolved.
- CI executes the test suite successfully.
- Test results are recorded.
- The test summary has been prepared.

---

## 12. Defect Management

Any failed test that identifies unexpected application behavior will be recorded as a bug.

Each bug report will contain:

- Bug ID
- Title
- Description
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Status

---

## 13. Risks

Potential risks include:

- Application startup failure
- Dependency installation problems
- Incorrect test data
- CI environment differences
- Network-related CI failures
- Incorrect test configuration
- False-positive or false-negative test results

---

## 14. Deliverables

The following deliverables will be produced:

1. Test plan
2. Test cases
3. Automated smoke-test scripts
4. CI workflow
5. Bug reports
6. Test summary
7. Test execution evidence
8. 2–3 minute project demonstration video

---

## 15. Approval

This test plan defines the testing approach for the QA-14 Smoke Test in CI capstone project.

**Prepared by:** Student  
**Project:** 3MTT QA-14  
**Status:** In Progress
