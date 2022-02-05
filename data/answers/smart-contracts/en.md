# Introduction to smart contracts

<Author ava="/assets/images/author-ava.png">Last edit: [\@glebsovin](/), October 30, 2021</Author>

### WHAT IS A SMART CONTRACT?

In the 21st century people want a fairer world liberated from violence, despotism and parasitism. A world full of freedom and safety of our lives and property.

We live in the era of virtual communities, geo-independence, cross-border interactions entering a whole new world of hybrid realities. Conservative legislation systems can't offer fast and affordable conflict resolution for this emerging diversity of human relations. Millions of people live with their own traumas and pains unspoken.

### PERMISSIONLESS

Anyone can write a smart contract and deploy it to the network. You just need to learn how to code in a smart contract language, and have enough ETH to deploy your contract. Deploying a smart contract is technically a transaction, so you need to pay your Gas in the same way that you need to pay gas for a simple ETH transfer. Gas costs for contract deployment are far higher, however.

Ethereum has developer-friendly languages for writing smart contracts:

* Solidity
* Vyper  

<Link to="/">More on energy estimates</Link>

<Code>
pragma solidity 0.8.7;
&nbsp;
contract VendingMachine {
    &nbsp;
    // Declare state variables of the contract
    address public owner;
    mapping (address => uint) public cupcakeBalances;
    &nbsp;
    // When 'VendingMachine' contract is deployed:
    // 1. set the deploying address as the owner of the contract
    // 2. set the deployed smart contract's cupcake balance to 100
    constructor() {
        owner = msg.sender;
        cupcakeBalances[address(this)] = 100;
    }
    &nbsp;
    // Allow the owner to increase the smart contract's cupcake balance
    function refill(uint amount) public {
        require(msg.sender == owner, "Only the owner can refill.");
        cupcakeBalances[address(this)] += amount;
    }
    &nbsp;
    // Allow anyone to purchase cupcakes
    function purchase(uint amount) public payable {
        require(msg.value >= amount * 1 ether, "You must pay at least 1 ETH per cupcake");
        require(cupcakeBalances[address(this)] >= amount, "Not enough cupcakes in stock to complete this purchase");
        cupcakeBalances[address(this)] -= amount;
        cupcakeBalances[msg.sender] += amount;
    }
}
</Code>
