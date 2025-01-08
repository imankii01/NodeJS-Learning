
// filepath: /Users/ankit/development/simple-git/repo/NodeJS-Learning/dummy-2025-01-08T15-30-00-574Z.js
function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }

function helloWorld() {
      console.log('Hello, world!');
    }

function add(a, b) {
      return a + b;
    }

module.exports = { helloWorld, add, subtract, multiply, divide };
