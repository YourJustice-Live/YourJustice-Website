## 인간성 지표로서의 사회적 평가

호텔이 손님을 놓고 경쟁하듯 국가가 시민과 기업을 놓고 경쟁해야 사람들을 더 잘 대해야 합니다.

그렇기 때문에 글로벌 커뮤니티에 연결된 가상 부족과 네트워크 상태가 필요합니다. 오늘날 리히텐슈타인, UAE, 싱가포르, 에스토니아, 몰타, 키프로스, 스위스 등과 같이 이민자를 적극적으로 유치하는 국가의 생활 수준이 더 높습니다.

YourJustice는 모든 사람이 법률, 법원 및 계약, 클라우드 우선으로 자신의 국가를 만들 수 있도록 열려 있습니다. 분산되고 검열에 강하고 지속 가능합니다.

### 역사

반면에 대체 가능한 항목은 고유한 속성이 아니라 가치를 정의하기 때문에 교환될 수 있습니다.

예를 들어 ETH 또는 달러는 1 ETH / $1 USD가 다른 1 ETH / $1 USD로 교환 가능하기 때문에 대체 가능합니다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5Sn5DhLjKYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 디지털 자판기

자동 판매기와 같은 스마트 계약에는 논리가 프로그래밍되어 있습니다. 다음은 이 자동 판매기가 스마트 계약처럼 보일 수 있는 간단한 예입니다.

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

### NFT 예

NFT 세계는 비교적 새롭습니다. 이론적으로 NFT의 범위는 입증 가능한 소유권이 필요한 고유한 모든 것입니다. 다음은 아이디어를 얻는 데 도움이 되는 오늘날 존재하는 NFT의 몇 가지 예입니다.

* [Intrinsic value](/)
* [Smart property](/)
* [Smart contracts](/)
* [B-money](/)
* [Reusable proofs of work](/)
* [Bitcoin whitepaper](/)
* [Namecoin](/)
* [Zooko's triangle](/)

### NFT는 어떻게 작동합니까?

NFT는 각 개별 토큰이 완전히 고유하고 나눌 수 없다는 점에서 DAI 또는 LINK와 같은 ERC-20 토큰과 다릅니다. NFT는 이더리움의 블록체인을 공개 원장으로 사용하여 추적할 수 있는 고유한 디지털 데이터 부분을 할당하거나 소유권을 주장할 수 있는 기능을 제공합니다. NFT는 디지털 또는 비디지털 자산의 표현으로 디지털 개체에서 생성됩니다. 예를 들어 NFT는 다음을 나타낼 수 있습니다.

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

### 더 푸른 미래를...

이더리움이 존재하는 한 채굴의 에너지 소비는 개발자와 연구원에게 큰 초점 영역이었습니다. 그리고 그 비전은 항상 가능한 한 빨리 그것을 대체하는 것이었습니다. <Link to="/">More on Ethereum's vision</Link>

#### 더 친환경적인 이더리움: Eth2

스마트 계약은 Ethereum에서 공개되며 개방형 API로 생각할 수 있습니다. 즉, 자신의 스마트 계약에서 다른 스마트 계약을 호출하여 가능한 것을 크게 확장할 수 있습니다. 계약은 다른 계약을 배포할 수도 있습니다.

<Link to="/">More on energy estimates</Link>

*Eth2 에너지 소비에 대한 이해를 친숙한 이름과 비교하기 위해 Visa와의 기본 비교를 제공했습니다. 하지만 실제로는 거래 건수로 비교하는 것은 옳지 않습니다. 이더리움의 에너지 출력은 시간 기반입니다. 이더리움이 1분에서 다음 분까지 더 많거나 적은 트랜잭션을 수행하면 에너지 출력은 동일하게 유지됩니다.*

<Button fill="true">More on Dike v.1.0</Button>
