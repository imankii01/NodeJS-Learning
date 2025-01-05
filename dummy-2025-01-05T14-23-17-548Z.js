
// filepath: /Users/ankit/development/simple-git/repo/NodeJS-Learning/dummy-2025-01-05T14-23-17-548Z.js
function multiply(a, b) {
      return a * b;
    }

function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }

function add(a, b) {
      return a + b;
    }

module.exports = { helloWorld, add, subtract, multiply, divide };
