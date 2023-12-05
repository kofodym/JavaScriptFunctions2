function getBankAccountInfo(name, accountNo, transactionNo) {
  // Creating an object to store bank account details
  const bankAccount = {
    name: name,
    accountNo: accountNo,
    transactionNo: transactionNo,
  };

  // Returning the bank account details object
  return bankAccount;
}

// Example usage:
const accountDetails = getBankAccountInfo("John Doe", "1234567890", "ABC123");
console.log(accountDetails); // This will display the bank account information in the console
