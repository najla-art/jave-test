function greet(name) {
  return `👋 Hello, ${name}!`;
}

// Export for testing
module.exports = { greet };

// Run directly with `node app.js`
if (require.main === module) {
  console.log(greet("Maven + Node + GitHub Actions"));
}
