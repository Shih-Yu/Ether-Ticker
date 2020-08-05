// Getting Ether Price from Etherscan API
const api_ether ="https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken"


async function getEther() {
  const response = await fetch(api_ether);
  const ether = await response.json();
  // Display Ether Price on Page
  document.getElementById("ether").innerHTML = "$" + ether.result.ethusd;
}


getEther();


setInterval(getEther, 4000);

