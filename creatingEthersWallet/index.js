const { ethers, Wallet} = require("ethers");

const polygonRPC = "https://polygon-amoy.g.alchemy.com/v2/16sWyzVz83rNuN-XTweU18sYQny0qiFU"
const provider = new ethers.JsonRpcProvider(polygonRPC)
const wallet = Wallet.createRandom(provider)

const privKey = wallet.privateKey
console.log(wallet)
console.log(privKey)