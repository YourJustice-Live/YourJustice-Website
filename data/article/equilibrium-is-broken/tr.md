## Bir insanlık metriği olarak sosyal derecelendirme

Чтобы лучше относиться к людям, страны должны конкурировать за граждан и компании, так же как отели соревнуются за гостей.

Вот почему нам нужны виртуальные племена и сетевые государства, связанные в глобальное сообщество. Сегодня те страны, которые активно привлекают мигрантов, такие как Лихтенштейн, ОАЭ, Сингапур, Эстония, Мальта, Кипр, Швейцария и др., Имеют более высокий уровень жизни.

YourJustice открыт для всех, кто может создать свою собственную страну с законодательством, судами и контрактами, в первую очередь облачными. Децентрализованный, устойчивый к цензуре и устойчивый.

### История

С другой стороны, взаимозаменяемые предметы можно обменивать, потому что их ценность определяет их, а не их уникальные свойства.

Например, ETH или доллары взаимозаменяемы, потому что 1 ETH / 1 доллар США можно обменять на другой 1 ETH / 1 доллар США.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5Sn5DhLjKYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Цифровой торговый автомат

В смарт-контракт, как в торговый автомат, заложена логика. Вот простой пример того, как этот торговый автомат может выглядеть как смарт-контракт:

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

### Примеры NFT

Мир NFT относительно новый. Теоретически область применения NFT - это все, что уникально, что требует доказуемого владения. Вот несколько примеров существующих сегодня NFT, которые помогут вам понять:

* [Intrinsic value](/)
* [Smart property](/)
* [Smart contracts](/)
* [B-money](/)
* [Reusable proofs of work](/)
* [Bitcoin whitepaper](/)
* [Namecoin](/)
* [Zooko's triangle](/)

### Как работают NFT?

NFT отличаются от токенов ERC-20, таких как DAI или LINK, тем, что каждый отдельный токен полностью уникален и не делится. NFT дают возможность назначать или заявлять право собственности на любой уникальный фрагмент цифровых данных, отслеживаемых с помощью блокчейна Ethereum в качестве публичной книги. NFT создается из цифровых объектов как представление цифровых или нецифровых активов. Например, NFT может представлять:

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

### Более зеленое будущее ...

С тех пор, как существует Ethereum, энергопотребление при майнинге было огромной областью внимания разработчиков и исследователей. И всегда стремились заменить его как можно скорее. <Link to="/">More on Ethereum's vision</Link>

#### Более зеленый Ethereum: Eth2

Смарт-контракты являются общедоступными в Ethereum и могут рассматриваться как открытые API. Это означает, что вы можете вызывать другие смарт-контракты в своем собственном смарт-контракте, чтобы значительно расширить возможности. Контракты могут даже использовать другие контракты.

<Link to="/">More on energy estimates</Link>

*Мы провели базовое сравнение с Visa, чтобы сопоставить ваше понимание энергопотребления Eth2 со знакомым названием. Однако на практике сравнивать по количеству транзакций некорректно. Выработка энергии Ethereum зависит от времени. Если Ethereum будет выполнять больше или меньше транзакций от одной минуты к другой, выход энергии останется прежним.*

<Button fill="true">More on Dike v.1.0</Button>
