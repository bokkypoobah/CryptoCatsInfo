const ENSREVERSERECORDSADDRESS="0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C";
const ENSREVERSERECORDSABI=[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"getNames","outputs":[{"internalType":"string[]","name":"r","type":"string[]"}],"stateMutability":"view","type":"function"}];

// const WETHADDRESS="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
// const WETHADDRESS_RINKEBY="0xD0000DE5A8A759EAD912F89d2E6f1ae59063a61A";
const WETHABI=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}];


const ERC721_INTERFACE = "0x80ac58cd";
const ERC721METADATA_INTERFACE = "0x5b5e139f";
const ERC721ENUMERABLE_INTERFACE = "0x780e9d63";

const MASK_ERC721 = 2**0;
const MASK_ERC721METADATA = 2**1;
const MASK_ERC721ENUMERABLE = 2**2;

const ERC721HELPERADDRESS="0x1CB0bA2E867549Aa7485a91dD90C454C2121b975";
const ERC721HELPERABI=[{"inputs":[],"name":"ISERC721","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ISERC721ENUMERABLE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ISERC721METADATA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ERC20","name":"token","type":"address"},{"internalType":"address[]","name":"tokenOwners","type":"address[]"},{"internalType":"address","name":"spender","type":"address"}],"name":"getERC20Info","outputs":[{"internalType":"uint256[]","name":"balances","type":"uint256[]"},{"internalType":"uint256[]","name":"allowances","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"ownersByEnumerableIndex","outputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"address[]","name":"owners","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"ownersByTokenIds","outputs":[{"internalType":"bool[]","name":"successes","type":"bool[]"},{"internalType":"address[]","name":"owners","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"tokenInfo","outputs":[{"internalType":"uint256[]","name":"statuses","type":"uint256[]"},{"internalType":"string[]","name":"symbols","type":"string[]"},{"internalType":"string[]","name":"names","type":"string[]"},{"internalType":"uint256[]","name":"totalSupplys","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"tokenURIsByEnumerableIndex","outputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"string[]","name":"tokenURIs","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"tokenURIsByTokenIds","outputs":[{"internalType":"bool[]","name":"successes","type":"bool[]"},{"internalType":"string[]","name":"tokenURIs","type":"string[]"}],"stateMutability":"view","type":"function"}];

const CRYPTOCATSV1 = "0x9508008227b6b3391959334604677d60169EF540";
const CRYPTOCATSV2 = "0x19c320b43744254ebdBcb1F1BD0e2a3dc08E01dc";
const CRYPTOCATSV3 = "0x088C6Ad962812b5Aa905BA6F3c5c145f9D4C079f";

const CRYPTOCATSHELPERADDRESS = "0x373F3AaADb81CE97D1E27c3AAb9d378f48284a4D";
const CRYPTOCATSHELPERABI = [{"inputs":[{"internalType":"contract CryptoCatsMarkets","name":"cryptoCatsMarket","type":"address"},{"internalType":"uint256[]","name":"catIds","type":"uint256[]"}],"name":"getCatData","outputs":[{"internalType":"address[]","name":"owners","type":"address[]"},{"internalType":"string[]","name":"attributeNames","type":"string[]"},{"internalType":"string[6][]","name":"attributes","type":"string[6][]"},{"components":[{"internalType":"bool","name":"isForSale","type":"bool"},{"internalType":"uint256","name":"catIndex","type":"uint256"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"minPrice","type":"uint256"},{"internalType":"address","name":"sellOnlyTo","type":"address"}],"internalType":"struct CryptoCatsMarkets.Offer[]","name":"offers","type":"tuple[]"}],"stateMutability":"view","type":"function"}];
