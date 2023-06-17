// Create global userWalletAddress variable
window.userWalletAddress = null;

// when the browser is ready
window.onload = async (event) => {
  // check if ethereum extension is installed
  if (window.ethereum) {
    // create web3 instance
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log(balance, accounts);

    
  } else {
    // prompt user to install Metamask
    alert("Please install MetaMask or any Ethereum Extension Wallet");
  }

  // check if user is already logged in and update the global userWalletAddress variable
  window.userWalletAddress = window.localStorage.getItem("userWalletAddress");


  // show the user dashboard
  showUserDashboard();
};

// Web3 login function
const loginWithEth = async () => {
  // check if there is global window.web3 instance
  if (window.web3) {
    try {
      // get the user's ethereum account - prompts metamask to login
      const selectedAccount = await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => accounts[0])
        .catch(() => {
          // if the user cancels the login prompt
          throw Error("Please select an account");
        });

      // set the global userWalletAddress variable to selected account
      window.userWalletAddress = selectedAccount;

      // store the user's wallet address in local storage
      window.localStorage.setItem("userWalletAddress", selectedAccount);

      // show the user dashboard
      showUserDashboard();
    } catch (error) {
      alert(error);
    }
  } else {
    alert("wallet not found");
  }
};

// function to show the user dashboard
const showUserDashboard = async () => {
  // if the user is not logged in - userWalletAddress is null
  if (!window.userWalletAddress) {
    // change the page title
    //document.title = "Web3 Login";

    // show the login section
    document.querySelector(".login-section").style.display = "flex";

    // hide the user dashboard section
    document.querySelector(".dashboard-section").style.display = "none";

    // return from the function
    return false;
  }

  // change the page title
 // document.title = "Web3 Dashboard  🤝";



  // hide the login section
  //document.querySelector(".login-section").style.display = "none";

  // show the dashboard section
 // document.querySelector(".dashboard-section").style.display = "flex";

  // show the user's wallet address
  showUserWalletAddress();

  // get the user's wallet balance
  getWalletBalance();
};

// show the user's wallet address from the global userWalletAddress variable
const showUserWalletAddress = () => {
  const walletAddressEl = document.querySelector(".wallet-address");
//  walletAddressEl.innerHTML = window.userWalletAddress;
};

// get the user's wallet balance
const getWalletBalance = async () => {
  // check if there is global userWalletAddress variable
  if (!window.userWalletAddress) {
    return false;
  }

  // get the user's wallet balance
 // const balance1 = await window.web3.eth.getBalance(accounts[0]);
 const balance5 = await window.web3.eth.getBalance(window.userWalletAddress);

  // convert the balance to ether
 /* document.querySelector(".wallet-balance").innerHTML = web3.utils.fromWei(
    balance,
    "ether"
  );*/
};

// web3 logout function
const logout = () => {
  // set the global userWalletAddress variable to null
  window.userWalletAddress = null;

  // remove the user's wallet address from local storage
  window.localStorage.removeItem("userWalletAddress");

  // show the user dashboard
  showUserDashboard();
};


window.onload = async () => {
  document.querySelectorAll(".loginBtn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      let isLoggedIn = window.userAddress ? true : false;
      console.log("clicked", window.userAddress, isLoggedIn);
      if (isLoggedIn) {
        logOut();
      } else {
        login();
      }
    });
  });

  const getUserInfo = () => {
    let main = document.getElementById("main");
    let isLoggedIn = window.userAddress ? true : false;
    document.querySelectorAll(".loginBtn").forEach((btn) => {
      if (isLoggedIn) {
        btn.innerText = "Logout";
        main.classList.remove("hidden");
      } else {
        btn.innerText = "Login";
        main.classList.add("hidden");
      }
    });
  };

  const login = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    window.userAddress = accounts[0];
    document.getElementById("Address").innerText = accounts[0];
    document.getElementById("balance").innerText = `${balance} ETH`;

    getUserInfo();
  };

  const logOut = async () => {
    window.userAddress = null;
    document.getElementById("Address").innerText = "";
    getUserInfo();
  };

  if (window.ethereum) {
  //  window.web3 = new Web3(window.ethereum);
    try {
      getUserInfo();
    } catch (error) {
      console.log("Error");
    }
  } else {
    alert("Please install MetaMask Extension in your browser");
  }
};


// when the user clicks the login button run the loginWithEth function
document.querySelector(".connect-button").addEventListener("click", loginWithEth);

// when the user clicks the logout button run the logout function
//document.querySelector(".logout-btn").addEventListener("click", logout);
if ($("#homepagejumbo").length > 0) {
  var video = `
  <div class="wrapper" style="position: absolute;top: 0;left: 0; width: 100%; height: 100%;">
    <video style=" width: 100%;object-fit: cover; height: 100%;" preload autoplay loop muted playsinline poster="poster.jpg" id="bgvid">
      <source src="/video/1.mp4" type="video/mp4">
    </video>
  </div>
  `;
  $("#homepagejumbo").append(video);
}
async function onInit() {
  await window.ethereum.enable();
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  
  console.log(account)
  const balance = web3.utils.fromWei(
    await web3.eth.getBalance(account) // Balance is in wei
  );
  console.log(balance);
   window.ethereum.on('accountsChanged', function (accounts) {
      // Time to reload your interface with accounts[0]!
      console.log(accounts[0])
     });

}

onInit();