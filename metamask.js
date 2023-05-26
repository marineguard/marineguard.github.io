
/*
<script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.4-rc.1/web3.min.js"></script>
<script>
/* To connect using MetaMask */
/*
async function connect() {
 if (window.ethereum) {

  await window.ethereum.request({ method: "eth_requestAccounts" });
  window.web3 = new Web3(window.ethereum);

 } else {
  console.log("No wallet");
 }
}
</script>

const web3 = new Web3(window.ethereum);

web3.eth.requestAccounts()
  .then(accounts => {
    // Connection successful, accounts contains the connected addresses
    console.log("Connected accounts:", accounts);
  })
  .catch(error => {
    // Connection failed or user rejected the connection request
    console.error("Error connecting to MetaMask:", error);
  });

if (typeof web3 !== 'undefined' && web3.currentProvider.isMetaMask) {
  // MetaMask is available
} else {
  // MetaMask is not available
}
*/

/*
<script>
  document.getElementById("connect-button").addEventListener('click', event => {
    let account;
    ethereum.request({method: 'eth_requestAccounts'}).then(account => {
      account = accounts[0];
      console.log(account);

      ethereum.request({method: 'eth_getBalance', params: [account, 'latest']}).then(result = > {
        console.log(result);
      })
    }
  })
</script>

* /
