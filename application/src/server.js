const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const users = [
  {
    id: 1,
    email: "testuser@example.com",
    password: "Password123!",
    name: "Test User",
    balance: 50000
  }
];

const transactions = [
  {
    id: "TXN001",
    type: "CREDIT",
    amount: 25000,
    description: "Wallet funding",
    status: "SUCCESS"
  },
  {
    id: "TXN002",
    type: "DEBIT",
    amount: 5000,
    description: "Transfer",
    status: "SUCCESS"
  }
];

/*
 * Health Check
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "QA-14 Fintech API",
    timestamp: new Date().toISOString()
  });
});

/*
 * Login
 */
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (item) => item.email === email && item.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }

  res.status(200).json({
    success: true,
    message: "Login successful",
    token: "qa14-demo-token-12345",
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  });
});

/*
 * Wallet Balance
 */
app.get("/api/wallet/balance", (req, res) => {
  res.status(200).json({
    success: true,
    currency: "NGN",
    balance: users[0].balance
  });
});

/*
 * Transactions
 */
app.get("/api/transactions", (req, res) => {
  res.status(200).json({
    success: true,
    count: transactions.length,
    transactions
  });
});

/*
 * Fund Wallet
 */
app.post("/api/wallet/fund", (req, res) => {
  const amount = Number(req.body.amount);

  if (!amount || amount <= 0) {
    return res.status(400).json({
      success: false,
      message: "Amount must be greater than zero"
    });
  }

  users[0].balance += amount;

  res.status(200).json({
    success: true,
    message: "Wallet funded successfully",
    amount,
    newBalance: users[0].balance
  });
});

/*
 * Transfer Money
 */
app.post("/api/wallet/transfer", (req, res) => {
  const amount = Number(req.body.amount);

  if (!amount || amount <= 0) {
    return res.status(400).json({
      success: false,
      message: "Transfer amount must be greater than zero"
    });
  }

  if (amount > users[0].balance) {
    return res.status(400).json({
      success: false,
      message: "Insufficient wallet balance"
    });
  }

  users[0].balance -= amount;

  res.status(200).json({
    success: true,
    message: "Transfer successful",
    amount,
    newBalance: users[0].balance
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`QA-14 Fintech API running on port ${PORT}`);
});
