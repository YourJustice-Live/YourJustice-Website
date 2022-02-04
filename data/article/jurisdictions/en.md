## Social rating as a humanity metric

In order to treat people better, countries should compete for citizens and companies, just like hotels compete for guests.

That's why we need virtual tribes and network states connected into a global community. Today those countries that actively attract migrants, like Liechtenstein, UAE, Singapore, Estonia, Malta, Cyprus, Switzerland etc., have a higher standard of living.

YourJustice is open for everyone to create their own country with legislation, courts and contracts, cloud - first. Decentralized, censorship-resistant and sustainable.

### History

Fungible items, on the other hand, can be exchanged because their value defines them rather than their unique properties.

For example, ETH or dollars are fungible because 1 ETH / $1 USD is exchangeable for another 1 ETH / $1 USD.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5Sn5DhLjKYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## A digital vending machine

A smart contract, like a vending machine, has logic programmed into it. Here's a simple example of how this vending machine might look like as a smart contract:

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

### NFT examples

The NFT world is relatively new. In theory, the scope for NFTs is anything that is unique that needs provable ownership. Here are some examples of NFTs that exist today, to help you get the idea:

* [Intrinsic value](/)
* [Smart property](/)
* [Smart contracts](/)
* [B-money](/)
* [Reusable proofs of work](/)
* [Bitcoin whitepaper](/)
* [Namecoin](/)
* [Zooko's triangle](/)

### How do NFTs work?

NFTs are different from ERC-20 tokens, such as DAI or LINK, in that each individual token is completely unique and is not divisible. NFTs give the ability to assign or claim ownership of any unique piece of digital data, trackable by using Ethereum's blockchain as a public ledger. An NFT is minted from digital objects as a representation of digital or non-digital assets. For example, an NFT could represent:

* Digital Art:
  * GIFs
  * Collectibles
  * Music
  * Videos
* Real World Items:
  * Deeds to a car
  * Tickets to a real world event
  * Tokenized invoices
  * Legal documents
  * Signatures
* Lots and lots more options to get creative with!

### A greener future...

For as long as Ethereum has been around, the energy-consumption of mining has been a huge focus area for developers and researchers. And the vision has always been to replace it as soon as possible. <Link to="/">More on Ethereum's vision</Link>

#### A greener Ethereum: Eth2

Smart contracts are public on Ethereum and can be thought of as open APIs. That means you can call other smart contracts in your own smart contract to greatly extend what's possible. Contracts can even deploy other contracts.

<Link to="/">More on energy estimates</Link>

*We’ve provided the basic comparison to Visa to baseline your understanding of Eth2 energy consumption against a familiar name. However, in practice, it’s not really correct to compare based on number of transactions. Ethereum’s energy output is time-based. If Ethereum did more or less transactions from one minute to the next, the energy output would stay the same.*

<Button fill="true">More on Dike v.1.0</Button>
