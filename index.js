"use strict";
// const defi_threat_matrix = require('./index.json');
module.exports = [
  {
    THREAT_MATRIX: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
    ],
    market_attacks: [
      "Front-Running",
      "Coordinated Attack",
      "Liquidity Pocket",
      "Quote Stuffing",
      "Wash Trading",
      "Ramping The Market",
      "Cornering The Market",
      "Churning",
      "Flash Loans",
      "Aggregated Transactions",
      "Bulge Bracket Transactions",
      "Layering",
      "Spoofing",
      "Order Book",
      "Market Index Calculation Attack",
      "Flash Crash",
      "Repo",
      "Excessive Leverage",
      'Breaking the "Buck"',
      '"Fake" News',
      "Nested Bot",
      "Audience of Bots",
      "Arb. Exploit",
      "Slippage Exploit",
      "Safety Check Exploits",
      "Circulating Supply Dump",
      "Governance Cartel",
      'Flash "Straddle"',
      "Structuring",
      "",
      "Back-Running",
    ],
    economic_attack: [
      "Front-Running",
      "Insufficient gas griefing",
      "Token Inflation",
      "Circulating Supply Attack",
      "Gas Griefing (DoS)",
      "Network Congestion (uDoS)",
      "Liquidity Squeeze",
      "Smurfing",
      "Like Asset Price Divergence",
      "Price Induced Oracle Volatility",
      "Stalking Horse",
      "Blockchain Transaction Based",
      "Governance Attack",
      "Interlocking Directorate",
      "Governance Cartels",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    "off-Chain": [
      "Price Feed",
      "Quote Stuffing",
      "Spoofing",
      "Credential Access",
      "Reentrancy",
      "Privilege Escalation",
      "Credential Access",
      "Encryption Protections",
      "Phishing",
      "Unicode Exploits",
      "API",
      "DNS Attacks",
      "Transaction Pool",
      "Checksum Address",
      "Siphon Funds",
      "",
      "Synthetic Mint Spread",
      "Syscall Exploit",
      "Container Priv. Escalation",
      "Keyctl missuse (syscall)",
      "Unlimited Permissions on Token Approval",
      "Influencers'",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    "on-Chain": [
      "Timestamp Dependence",
      "Admin Key",
      "Timelock",
      "Lateral Movements",
      "Multi-Sig Keys",
      "Miner Cartel",
      "Finality",
      "Honeypot",
      "Red Queen",
      "Sole block synchronization",
      "Transaction Pool",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    solidity_EVM: [
      "Integer Overflow and Underflow",
      "DoS with (Unexpected) revert",
      "DoS with Block Gas Limit",
      "Arithmetic Over/Under Flows",
      "Forcibly Sending Ether to a Contract",
      "Delegatecall",
      "Entropy Illusion",
      "Short Address/Parameter Attack",
      "Uninitialized Storage Pointers",
      "Floating Points and Numerical Precision",
      "Right-To-Left-Override control character (U+202E)",
      "Delegatecall to Untrusted Callee",
      "Requirement Violation",
      "Shadowing State Variables",
      "Transaction Order Dependence",
      "Assert Violation",
      "Uninitialized Storage Pointer",
      "Unprotected Ether Withdrawal",
      "Floating Pragma",
      "Outdated Compiler Version",
      "Function Default Visibility",
      "msg.sender",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
];

// @export default
