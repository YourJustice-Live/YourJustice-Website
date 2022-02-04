# Введение в смарт-контракты

<Author ava="/assets/images/author-ava.png">Last edit: [\@glebsovin](/), October 30, 2021</Author>

### ЧТО ТАКОЕ SMART CONTRACT?

В 21 веке люди хотят более справедливого мира, свободного от насилия, деспотизма и паразитизма. Мир, полный свободы и безопасности нашей жизни и имущества.

Мы живем в эпоху виртуальных сообществ, географической независимости, трансграничных взаимодействий, вступающих в совершенно новый мир гибридных реальностей. Консервативные законодательные системы не могут предложить быстрое и доступное разрешение конфликтов для этого растущего разнообразия человеческих отношений. Миллионы людей живут со своими невысказанными травмами и болью.

### БЕЗ РАЗРЕШЕНИЯ

Кто угодно может написать смарт-контракт и развернуть его в сети. Вам просто нужно научиться кодировать на языке смарт-контрактов и иметь достаточно ETH для развертывания контракта. Развертывание смарт-контракта технически является транзакцией, поэтому вам нужно платить за газ так же, как вам нужно платить за простой перевод ETH. Однако затраты на газ для развертывания по контракту намного выше.

В Ethereum есть удобные для разработчиков языки для написания смарт-контрактов:

* Solidity
* Vyper  

<Link to="/">Подробнее об оценках энергии</Link>

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
