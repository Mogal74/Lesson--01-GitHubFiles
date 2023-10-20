Create the Account object using JSON
var account = {
    accountNumber: "A123",
    name: "John Doe",
    balance: 1000,
    mobile: "1234567890",
    pan: "ABCDE1234F",
    // Method to show account details
    showDetails: function() {
      console.log("=====================================================");
      console.log("Account Details");
      console.log("=====================================================");
      console.log("Account Number","    ", ":" + this.accountNumber);
      console.log("Name" ,"              ", ":"+this.name);
      console.log("Balance", "           ", ":"+this.balance);
      console.log("Mobile","            ", ":" +this.mobile);
      console.log("PAN" ,"               ", ":"+this.pan);
      console.log("=====================================================");
      
      document.write("<h2>============================================</h2>");
      document.write("<h2>Account Details</h2>");
      document.write("<h2>============================================</h2>");
      document.write("<h3>Account Number: " + "&nbsp;".repeat(13) +":" + this.accountNumber+"</h3>");
      document.write("<h3>Name   " + "&nbsp;".repeat(33) +":" + this.name+"</h3>");
      document.write("<h3>Balance  " + "&nbsp;".repeat(30) +":" + this.balance+"</h3>");
      document.write("<h3>Mobile  " + "&nbsp;".repeat(31) +":" + this.mobile+"</h3>");
      document.write("<h3>PAN:  " + "&nbsp;".repeat(34) +":" + this.pan+"</h3>");
      document.write("<h2>============================================</h2>");
    }
  };
  // Display account details
  account.showDetails();
  