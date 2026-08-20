# QA-14 Smoke Test in CI
## Test Cases

**Project ID:** QA-14  
**Project Title:** Smoke Test in CI  
**Application Under Test:** QA-14 Fintech API  
**Testing Type:** Automated Smoke Testing  
**Version:** 1.0

---

## Test Case Summary

| Test ID | Test Description | Method | Endpoint | Expected Status | Priority |
|---|---|---|---|---:|---|
| ST-001 | Verify API health | GET | /health | 200 | Critical |
| ST-002 | Login with valid credentials | POST | /api/login | 200 | Critical |
| ST-003 | Reject invalid login credentials | POST | /api/login | 401 | High |
| ST-004 | Retrieve wallet balance | GET | /api/wallet/balance | 200 | Critical |
| ST-005 | Retrieve transaction history | GET | /api/transactions | 200 | High |
| ST-006 | Fund wallet with valid amount | POST | /api/wallet/fund | 200 | Critical |
| ST-007 | Transfer money with valid amount | POST | /api/wallet/transfer | 200 | Critical |
| ST-008 | Reject invalid wallet funding | POST | /api/wallet/fund | 400 | High |
| ST-009 | Reject transfer exceeding balance | POST | /api/wallet/transfer | 400 | Critical |
| ST-010 | Reject unknown endpoint | GET | /api/unknown-endpoint | 404 | Medium |

---

# ST-001 — Verify API Health

**Test ID:** ST-001  
**Title:** Verify API health endpoint is available  
**Priority:** Critical  
**Type:** Smoke Test

### Preconditions

- Application is running.
- API is accessible on port 3000.

### Test Steps

1. Send a GET request to /health.
2. Check the HTTP response status.
3. Verify that the response contains a service status.

### Test Data

No request body required.

### Expected Result

- HTTP status is 200.
- Response contains status.
- Status value is ok.
- Response identifies the QA-14 Fintech API service.

### Pass Criteria

Test passes when all expected conditions are satisfied.

---

# ST-002 — Login with Valid Credentials

**Test ID:** ST-002  
**Title:** Verify user can log in with valid credentials  
**Priority:** Critical  
**Type:** Smoke Test

### Preconditions

- Application is running.
- Valid test user exists.

### Test Steps

1. Send a POST request to /api/login.
2. Provide valid email and password.
3. Check the HTTP response status.
4. Verify that a token is returned.
5. Verify the authenticated user's information.

### Test Data

Email: testuser@example.com

Password: Password123!

### Expected Result

- HTTP status is 200.
- success is true.
- Response contains an authentication token.
- Response contains user information.
- User email matches the supplied email.

### Pass Criteria

Test passes when valid credentials result in successful authentication.

---

# ST-003 — Reject Invalid Login Credentials

**Test ID:** ST-003  
**Title:** Verify invalid login credentials are rejected  
**Priority:** High  
**Type:** Smoke Test

### Preconditions

- Application is running.

### Test Steps

1. Send a POST request to /api/login.
2. Provide an incorrect password.
3. Check the HTTP response status.
4. Verify the error response.

### Test Data

Email: testuser@example.com

Password: WrongPassword123!

### Expected Result

- HTTP status is 401.
- success is false.
- Response contains an invalid credentials message.
- Authentication token is not returned.

### Pass Criteria

Test passes when invalid credentials are rejected correctly.

---

# ST-004 — Retrieve Wallet Balance

**Test ID:** ST-004  
**Title:** Verify wallet balance can be retrieved  
**Priority:** Critical  
**Type:** Smoke Test

### Preconditions

- Application is running.

### Test Steps

1. Send a GET request to /api/wallet/balance.
2. Check the HTTP response status.
3. Verify the currency.
4. Verify that a balance value is returned.

### Expected Result

- HTTP status is 200.
- success is true.
- Currency is NGN.
- Balance is returned as a numeric value.

### Pass Criteria

Test passes when wallet balance information is successfully returned.

---

# ST-005 — Retrieve Transaction History

**Test ID:** ST-005  
**Title:** Verify transaction history can be retrieved  
**Priority:** High  
**Type:** Smoke Test

### Preconditions

- Application is running.

### Test Steps

1. Send a GET request to /api/transactions.
2. Check the HTTP response status.
3. Verify that transaction data is returned.
4. Verify the transaction count.

### Expected Result

- HTTP status is 200.
- success is true.
- transactions is an array.
- Transaction count is returned.
- At least one transaction exists.

### Pass Criteria

Test passes when transaction history is successfully returned.

---

# ST-006 — Fund Wallet with Valid Amount

**Test ID:** ST-006  
**Title:** Verify wallet can be funded with a valid amount  
**Priority:** Critical  
**Type:** Smoke Test

### Preconditions

- Application is running.
- Wallet is available.

### Test Steps

1. Send a POST request to /api/wallet/fund.
2. Provide a valid funding amount.
3. Check the HTTP response status.
4. Verify the funding response.
5. Verify that the new balance is returned.

### Test Data

Amount: 1000 NGN

### Expected Result

- HTTP status is 200.
- success is true.
- Funding amount is 1000.
- New wallet balance is returned.
- New balance is greater than the previous balance.

### Pass Criteria

Test passes when the wallet is successfully funded.

---

# ST-007 — Transfer Money with Valid Amount

**Test ID:** ST-007  
**Title:** Verify money can be transferred with a valid amount  
**Priority:** Critical  
**Type:** Smoke Test

### Preconditions

- Application is running.
- Wallet contains sufficient funds.

### Test Steps

1. Send a POST request to /api/wallet/transfer.
2. Provide a valid transfer amount.
3. Check the HTTP response status.
4. Verify the transfer response.
5. Verify the new wallet balance.

### Test Data

Amount: 5000 NGN

### Expected Result

- HTTP status is 200.
- success is true.
- Transfer amount is 5000.
- Successful transfer message is returned.
- New wallet balance is returned.

### Pass Criteria

Test passes when the transfer is completed successfully.

---

# ST-008 — Reject Invalid Wallet Funding

**Test ID:** ST-008  
**Title:** Verify invalid wallet funding amount is rejected  
**Priority:** High  
**Type:** Smoke Test

### Preconditions

- Application is running.

### Test Steps

1. Send a POST request to /api/wallet/fund.
2. Provide an amount of zero.
3. Check the HTTP response status.
4. Verify the error message.

### Test Data

Amount: 0 NGN

### Expected Result

- HTTP status is 400.
- success is false.
- Response indicates that the amount must be greater than zero.

### Pass Criteria

Test passes when invalid funding is rejected.

---

# ST-009 — Reject Transfer Exceeding Balance

**Test ID:** ST-009  
**Title:** Verify transfer exceeding available balance is rejected  
**Priority:** Critical  
**Type:** Smoke Test

### Preconditions

- Application is running.
- Wallet has a known balance.

### Test Steps

1. Send a POST request to /api/wallet/transfer.
2. Provide an amount greater than the available balance.
3. Check the HTTP response status.
4. Verify the error response.
5. Verify that the wallet balance is not reduced.

### Test Data

Amount: 999999999 NGN

### Expected Result

- HTTP status is 400.
- success is false.
- Response indicates insufficient wallet balance.
- Wallet balance is not reduced.

### Pass Criteria

Test passes when an over-limit transfer is rejected.

---

# ST-010 — Reject Unknown Endpoint

**Test ID:** ST-010  
**Title:** Verify unknown API endpoint returns 404  
**Priority:** Medium  
**Type:** Smoke Test

### Preconditions

- Application is running.

### Test Steps

1. Send a GET request to /api/unknown-endpoint.
2. Check the HTTP response status.
3. Verify the error response.

### Expected Result

- HTTP status is 404.
- success is false.
- Response contains Route not found.

### Pass Criteria

Test passes when an unknown endpoint is correctly rejected.

---

# Test Execution Rules

Each test will be executed against the QA-14 Fintech API.

A test is marked PASS when all defined expected results are satisfied.

A test is marked FAIL when one or more expected results are not satisfied.

A failed Critical test should cause the CI smoke-test job to fail.

---

# Test Case Completion Status

| Test ID | Status |
|---|---|
| ST-001 | Not Executed |
| ST-002 | Not Executed |
| ST-003 | Not Executed |
| ST-004 | Not Executed |
| ST-005 | Not Executed |
| ST-006 | Not Executed |
| ST-007 | Not Executed |
| ST-008 | Not Executed |
| ST-009 | Not Executed |
| ST-010 | Not Executed |

**Overall Status:** Not Executed

---

## End of Test Cases
