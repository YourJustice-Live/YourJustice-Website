# 스마트 계약 소개

<Author ava="/assets/images/author-ava.png">Last edit: [\@glebsovin](/), October 30, 2021</Author>

### 스마트 계약이란 무엇입니까?

21세기에 사람들은 폭력, 독재, 기생으로부터 해방된 더 공정한 세상을 원합니다. 우리의 생명과 재산의 자유와 안전이 가득한 세상.

우리는 가상 커뮤니티, 지리적 독립, 국경을 초월한 상호 작용이 완전히 새로운 하이브리드 현실 세계로 들어가는 시대에 살고 있습니다. 보수적인 입법 시스템은 인간 관계의 이 새로운 다양성에 대해 빠르고 저렴한 분쟁 해결을 제공할 수 없습니다. 수백만 명의 사람들이 말하지 못한 자신의 트라우마와 고통을 안고 살고 있습니다.

### 무허가

누구나 스마트 계약을 작성하여 네트워크에 배포할 수 있습니다. 스마트 계약 언어로 코딩하는 방법을 배우고 계약을 배포하기에 충분한 ETH만 있으면 됩니다. 스마트 계약을 배포하는 것은 기술적으로 트랜잭션이므로 간단한 ETH 전송을 위해 가스를 지불해야 하는 것과 같은 방식으로 가스를 지불해야 합니다. 그러나 계약 배치를 위한 가스 비용은 훨씬 더 높습니다.

Ethereum에는 스마트 계약을 작성하기 위한 개발자 친화적인 언어가 있습니다.

* Solidity
* Vyper  

<Link to="/">에너지 추정치에 대한 추가 정보</Link>

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
