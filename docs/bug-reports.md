# QA-14 Smoke Test in CI
# Bug Reports and Triage

**Project ID:** QA-14  
**Project Title:** Smoke Test in CI  
**Application Under Test:** QA-14 Fintech API  
**Testing Type:** Automated Smoke Testing  
**Environment:** GitHub Actions CI  
**Tester:** QA-14 Project Fellow  
**Date:** 20 August 2026  

---

## 1. Purpose

This document records defects and quality findings identified during testing of the QA-14 Fintech API.

The smoke test suite was designed primarily to verify that critical application functionality is available and operational. Negative test scenarios were also included to verify that invalid requests are handled correctly.

---

## 2. Defect Triage Summary

| Bug ID | Description | Severity | Priority | Status | Recommendation |
|---|---|---|---|---|---|
| BUG-001 | Wallet balance and transfer endpoints do not require authentication | Medium | High | Open | Implement authentication middleware |
| BUG-002 | Wallet funding and transfer operations use in-memory data | Medium | Medium | Open | Persist financial transactions in a database |
| BUG-003 | Demo authentication token is static | Medium | Medium | Open | Replace with secure, expiring authentication tokens |

---

# BUG-001 — Missing Authentication Protection

**Severity:** Medium  
**Priority:** High  
**Status:** Open  
**Category:** Security / Access Control

### Description

The wallet balance, wallet funding, transfer, and transaction endpoints can be accessed without supplying an authentication token.

### Affected Endpoints

- `GET /api/wallet/balance`
- `GET /api/transactions`
- `POST /api/wallet/fund`
- `POST /api/wallet/transfer`

### Expected Result

Protected financial endpoints should require valid authentication before returning or modifying user financial information.

### Actual Result

The endpoints respond successfully without an authentication header.

### Risk

In a production fintech application, unauthenticated access to financial information or financial operations could create a security and authorization risk.

### Severity Rationale

**Medium** because the current application is a demonstration application and does not use real financial accounts or money.

### Priority Rationale

**High** because authentication should be implemented before the application is considered production-ready.

### Recommendation

Implement authentication middleware and require a valid access token for protected wallet and transaction endpoints.

---

# BUG-002 — Financial Data Is Stored In Memory

**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  
**Category:** Data Persistence

### Description

Wallet balances and transaction data are stored in application memory.

### Expected Result

Financial data should be persisted in a reliable database with appropriate transaction controls.

### Actual Result

The application stores demonstration user and transaction information in JavaScript arrays.

### Risk

Data can be lost when the application restarts. This design is not suitable for production financial transactions.

### Recommendation

Use a persistent database such as PostgreSQL and implement proper database transactions and audit records.

---

# BUG-003 — Static Authentication Token

**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  
**Category:** Authentication

### Description

The login endpoint returns a static demonstration authentication token.

### Expected Result

Authentication should generate a secure token that is unique, signed, and appropriately protected.

### Actual Result

The application returns a predefined demonstration token.

### Risk

A static token would not be suitable for a production authentication system.

### Recommendation

Implement secure token generation, expiration, validation, and token revocation where appropriate.

---

# 3. Triage Conclusion

The identified findings do not prevent the QA-14 smoke test suite from executing successfully.

The smoke test suite confirms that critical API functionality is operational in the test environment.

The identified issues should be addressed before the demonstration API is considered production-ready.

---

## 4. Overall Defect Assessment

**Critical defects:** 0  
**High-priority defects:** 1  
**Medium-severity findings:** 3  
**Resolved defects:** 0  
**Open findings:** 3  

---

## 5. Note

The findings above are documented in the context of a demonstration fintech API created for QA testing and CI automation. The application is not intended to process real financial transactions.
