// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require('hardhat');
const hre = require('hardhat');

async function main() {
  const Stringer = await ethers.getContractFactory('StringManipulate');
  const contract = await Stringer.deploy();

  console.log('Contract deployed at:', contract.address);
  console.log('BEFORE: ', await contract.greeting());
  let tx = await contract.updateString('UPDATED');
  await tx.wait();

  console.log('AFTER: ', await contract.greeting());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
