# Akıllı sözleşmelere giriş

<Author ava="/assets/images/author-ava.png">Last edit: [\@glebsovin](/), October 30, 2021</Author>

### AKILLI SÖZLEŞME NEDİR?

21. yüzyılda insanlar şiddetten, istibdattan ve asalaklıktan arınmış daha adil bir dünya istiyorlar. Canımızın ve malımızın özgürlüğü ve güvenliğiyle dolu bir dünya.

Sanal topluluklar, coğrafi bağımsızlık, hibrit gerçekliklerin yepyeni bir dünyasına giren sınır ötesi etkileşimler çağında yaşıyoruz. Muhafazakar mevzuat sistemleri, ortaya çıkan bu insan ilişkileri çeşitliliği için hızlı ve uygun fiyatlı uyuşmazlık çözümü sunamaz. Milyonlarca insan kendi travmaları ve acıları konuşulmadan yaşıyor.

### İZİNSİZ

Herkes akıllı bir sözleşme yazabilir ve bunu ağa dağıtabilir. Akıllı bir sözleşme dilinde nasıl kod yazılacağını öğrenmeniz ve sözleşmenizi dağıtmak için yeterli ETH'ye sahip olmanız yeterlidir. Akıllı sözleşme dağıtmak teknik olarak bir işlemdir, bu nedenle Gazınızı basit bir ETH transferi için ödemeniz gereken şekilde ödemeniz gerekir. Bununla birlikte, sözleşme dağıtımı için gaz maliyetleri çok daha yüksektir.

Ethereum, akıllı sözleşmeler yazmak için geliştirici dostu dillere sahiptir:

* Solidity
* Vyper  

<Link to="/">Enerji tahminleri hakkında daha fazla bilgi</Link>

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
