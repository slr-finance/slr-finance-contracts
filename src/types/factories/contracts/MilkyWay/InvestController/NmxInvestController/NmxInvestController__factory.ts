/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  NmxInvestController,
  NmxInvestControllerInterface,
} from "../../../../../contracts/MilkyWay/InvestController/NmxInvestController/NmxInvestController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_milkyWayAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bnbAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_investingTokenAddress",
        type: "address",
      },
      {
        internalType: "enum IBaseInvestController.InvestingTokenType",
        name: "_investingTokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_rewardsTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factoryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingServiceAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "bnbAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAndBuyBack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factoryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_targetToken",
        type: "address",
      },
    ],
    name: "getTokenPriceInBnb",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_investingBnbAmount",
        type: "uint256",
      },
    ],
    name: "invest",
    outputs: [
      {
        internalType: "uint256",
        name: "investingAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "investedBnb",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "investedTokensByBnbPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "priceInBnb",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "investingTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "investingTokenType",
    outputs: [
      {
        internalType: "enum IBaseInvestController.InvestingTokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingServiceAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawalAndRefoundToMilkyWal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawnBnb",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405260c86007553480156200001657600080fd5b50604051620026253803806200262583398181016040528101906200003c91906200027f565b868686868686846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600660006101000a81548160ff02191690836001811115620000eb57620000ea62000332565b5b021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508573ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050505050508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050505050505062000361565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200021f82620001f2565b9050919050565b620002318162000212565b81146200023d57600080fd5b50565b600081519050620002518162000226565b92915050565b600281106200026557600080fd5b50565b600081519050620002798162000257565b92915050565b600080600080600080600060e0888a031215620002a157620002a0620001ed565b5b6000620002b18a828b0162000240565b9750506020620002c48a828b0162000240565b9650506040620002d78a828b0162000240565b9550506060620002ea8a828b0162000268565b9450506080620002fd8a828b0162000240565b93505060a0620003108a828b0162000240565b92505060c0620003238a828b0162000240565b91505092959891949750929550565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60805160a051612282620003a36000396000818161057201528181610b3001528181610b9a01528181610c320152610cd70152600061068f01526122826000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806391b6bae21161008c578063d11c583a11610066578063d11c583a1461023d578063de8e81321461025b578063e2a9a53814610279578063e93793f614610283576100ea565b806391b6bae2146101e3578063966dae0e1461020157806399ad96a11461021f576100ea565b8063531efbcf116100c8578063531efbcf1461016b57806354cf2aeb1461018957806355bf8bcd146101a757806388dcef31146101c5576100ea565b80631b674e8c146100ef5780632afcf4801461011f578063529f1e731461014f575b600080fd5b610109600480360381019061010491906116a5565b6102a1565b60405161011691906116eb565b60405180910390f35b61013960048036038101906101349190611732565b61030c565b60405161014691906116eb565b60405180910390f35b61016960048036038101906101649190611732565b6103d1565b005b610173610544565b604051610180919061176e565b60405180910390f35b61019161056a565b60405161019e91906116eb565b60405180910390f35b6101af610570565b6040516101bc919061176e565b60405180910390f35b6101cd610594565b6040516101da91906116eb565b60405180910390f35b6101eb61060b565b6040516101f891906116eb565b60405180910390f35b610209610611565b604051610216919061176e565b60405180910390f35b610227610637565b60405161023491906116eb565b60405180910390f35b61024561063d565b604051610252919061176e565b60405180910390f35b610263610661565b6040516102709190611800565b60405180910390f35b610281610674565b005b61028b61071c565b604051610298919061176e565b60405180910390f35b60008060006102f3600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686610742565b9150915080826103039190611879565b92505050919050565b6000610316610674565b60018081111561032957610328611789565b5b600660009054906101000a900460ff16600181111561034b5761034a611789565b5b141561035a57600090506103aa565b6103a78260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166108e3565b90505b81600460008282546103bc91906118aa565b925050819055506103cc81610b2b565b919050565b60006103db610c2e565b90506103e682610cd5565b60006001808111156103fb576103fa611789565b5b600660009054906101000a900460ff16600181111561041d5761041c611789565b5b141561042c5760009050610526565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156104bf576104b883836104b391906118aa565b610d6b565b9050610525565b6104c882610d6b565b905061051783600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff166108e3565b8161052291906118aa565b90505b5b806005600082825461053891906118aa565b92505081905550505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006001808111156105a9576105a8611789565b5b600660009054906101000a900460ff1660018111156105cb576105ca611789565b5b14156105da5760009050610608565b610605600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166102a1565b90505b90565b60055481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900460ff1681565b600061067e610c2e565b9050600061068b82610d6b565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d62229ba826040518263ffffffff1660e01b81526004016106e691906116eb565b600060405180830381600087803b15801561070057600080fd5b505af1158015610714573d6000803e3d6000fd5b505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806107528686610dc1565b9150915060008773ffffffffffffffffffffffffffffffffffffffff1663e6a4390584846040518363ffffffff1660e01b8152600401610793929190611900565b60206040518083038186803b1580156107ab57600080fd5b505afa1580156107bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e3919061193e565b90506000808273ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561082e57600080fd5b505afa158015610842573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086691906119ed565b50915091508473ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff16146108a55780826108a8565b81815b816dffffffffffffffffffffffffffff169150806dffffffffffffffffffffffffffff16905080975081985050505050505050935093915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148061091f5750600084145b1561092c57839050610b24565b6000806109398585610dc1565b915091506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e6a4390584846040518363ffffffff1660e01b815260040161099c929190611900565b60206040518083038186803b1580156109b457600080fd5b505afa1580156109c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ec919061193e565b90506109fd87828888600754610eef565b9350600080610a0f8789886000610f1c565b935093505050610a60838a60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610f7e9092919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff1663022c0d9f838330600067ffffffffffffffff811115610a9a57610a99611a40565b5b6040519080825280601f01601f191660200182016040528015610acc5781602001600182028036833780820191505090505b506040518563ffffffff1660e01b8152600401610aec9493929190611b08565b600060405180830381600087803b158015610b0657600080fd5b505af1158015610b1a573d6000803e3d6000fd5b5050505050505050505b9392505050565b610b987f000000000000000000000000000000000000000000000000000000000000000082600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166110049092919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166388fe2be8610bdd83611162565b6040518263ffffffff1660e01b8152600401610bf99190611b7f565b600060405180830381600087803b158015610c1357600080fd5b505af1158015610c27573d6000803e3d6000fd5b5050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b88a802f6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610c9857600080fd5b505af1158015610cac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd09190611baf565b905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663458a1d6e610d1a83611162565b6040518263ffffffff1660e01b8152600401610d369190611b7f565b600060405180830381600087803b158015610d5057600080fd5b505af1158015610d64573d6000803e3d6000fd5b5050505050565b6000610dba82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff166108e3565b9050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610e33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2a90611c39565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610610e6d578284610e70565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ee8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edf90611ca5565b60405180910390fd5b9250929050565b6000806000610eff8787876111c1565b91509150610f0f888383876112cf565b9250505095945050505050565b6000806000808673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1610610f5e5786888688610f63565b878787875b80945081955082965083975050505050945094509450949050565b610fff8363a9059cbb60e01b8484604051602401610f9d929190611cc5565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113c5565b505050565b600081148061109d575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b815260040161104b929190611900565b60206040518083038186803b15801561106357600080fd5b505afa158015611077573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109b9190611baf565b145b6110dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d390611d60565b60405180910390fd5b61115d8363095ea7b360e01b84846040516024016110fb929190611cc5565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113c5565b505050565b60006fffffffffffffffffffffffffffffffff80168211156111b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b090611df2565b60405180910390fd5b819050919050565b60008060006111d08585610dc1565b5090506000808773ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561121c57600080fd5b505afa158015611230573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125491906119ed565b50915091508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614611293578082611296565b81815b816dffffffffffffffffffffffffffff169150806dffffffffffffffffffffffffffff1690508095508196505050505050935093915050565b6000808511611313576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130a90611e84565b60405180910390fd5b6000841180156113235750600083115b611362576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135990611ef0565b60405180910390fd5b6000826127106113729190611f10565b8661137d9190611f44565b90506000848261138d9190611f44565b9050600082612710886113a09190611f44565b6113aa91906118aa565b905080826113b89190611879565b9350505050949350505050565b6000611427826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661148c9092919063ffffffff16565b905060008151111561148757808060200190518101906114479190611fd6565b611486576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147d90612075565b60405180910390fd5b5b505050565b606061149b84846000856114a4565b90509392505050565b6060824710156114e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e090612107565b60405180910390fd5b6114f2856115b8565b611531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152890612173565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161155a91906121cf565b60006040518083038185875af1925050503d8060008114611597576040519150601f19603f3d011682016040523d82523d6000602084013e61159c565b606091505b50915091506115ac8282866115db565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606083156115eb5782905061163b565b6000835111156115fe5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611632919061222a565b60405180910390fd5b9392505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061167282611647565b9050919050565b61168281611667565b811461168d57600080fd5b50565b60008135905061169f81611679565b92915050565b6000602082840312156116bb576116ba611642565b5b60006116c984828501611690565b91505092915050565b6000819050919050565b6116e5816116d2565b82525050565b600060208201905061170060008301846116dc565b92915050565b61170f816116d2565b811461171a57600080fd5b50565b60008135905061172c81611706565b92915050565b60006020828403121561174857611747611642565b5b60006117568482850161171d565b91505092915050565b61176881611667565b82525050565b6000602082019050611783600083018461175f565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600281106117c9576117c8611789565b5b50565b60008190506117da826117b8565b919050565b60006117ea826117cc565b9050919050565b6117fa816117df565b82525050565b600060208201905061181560008301846117f1565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611884826116d2565b915061188f836116d2565b92508261189f5761189e61181b565b5b828204905092915050565b60006118b5826116d2565b91506118c0836116d2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118f5576118f461184a565b5b828201905092915050565b6000604082019050611915600083018561175f565b611922602083018461175f565b9392505050565b60008151905061193881611679565b92915050565b60006020828403121561195457611953611642565b5b600061196284828501611929565b91505092915050565b60006dffffffffffffffffffffffffffff82169050919050565b61198e8161196b565b811461199957600080fd5b50565b6000815190506119ab81611985565b92915050565b600063ffffffff82169050919050565b6119ca816119b1565b81146119d557600080fd5b50565b6000815190506119e7816119c1565b92915050565b600080600060608486031215611a0657611a05611642565b5b6000611a148682870161199c565b9350506020611a258682870161199c565b9250506040611a36868287016119d8565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081519050919050565b600082825260208201905092915050565b60005b83811015611aa9578082015181840152602081019050611a8e565b83811115611ab8576000848401525b50505050565b6000601f19601f8301169050919050565b6000611ada82611a6f565b611ae48185611a7a565b9350611af4818560208601611a8b565b611afd81611abe565b840191505092915050565b6000608082019050611b1d60008301876116dc565b611b2a60208301866116dc565b611b37604083018561175f565b8181036060830152611b498184611acf565b905095945050505050565b60006fffffffffffffffffffffffffffffffff82169050919050565b611b7981611b54565b82525050565b6000602082019050611b946000830184611b70565b92915050565b600081519050611ba981611706565b92915050565b600060208284031215611bc557611bc4611642565b5b6000611bd384828501611b9a565b91505092915050565b600082825260208201905092915050565b7f537761704d6174683a204944454e544943414c5f414444524553534553000000600082015250565b6000611c23601d83611bdc565b9150611c2e82611bed565b602082019050919050565b60006020820190508181036000830152611c5281611c16565b9050919050565b7f537761704d6174683a205a45524f5f4144445245535300000000000000000000600082015250565b6000611c8f601683611bdc565b9150611c9a82611c59565b602082019050919050565b60006020820190508181036000830152611cbe81611c82565b9050919050565b6000604082019050611cda600083018561175f565b611ce760208301846116dc565b9392505050565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b6000611d4a603683611bdc565b9150611d5582611cee565b604082019050919050565b60006020820190508181036000830152611d7981611d3d565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203160008201527f3238206269747300000000000000000000000000000000000000000000000000602082015250565b6000611ddc602783611bdc565b9150611de782611d80565b604082019050919050565b60006020820190508181036000830152611e0b81611dcf565b9050919050565b7f537761704d6174683a20494e53554646494349454e545f494e5055545f414d4f60008201527f554e540000000000000000000000000000000000000000000000000000000000602082015250565b6000611e6e602383611bdc565b9150611e7982611e12565b604082019050919050565b60006020820190508181036000830152611e9d81611e61565b9050919050565b7f537761704d6174683a20494e53554646494349454e545f4c4951554944495459600082015250565b6000611eda602083611bdc565b9150611ee582611ea4565b602082019050919050565b60006020820190508181036000830152611f0981611ecd565b9050919050565b6000611f1b826116d2565b9150611f26836116d2565b925082821015611f3957611f3861184a565b5b828203905092915050565b6000611f4f826116d2565b9150611f5a836116d2565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611f9357611f9261184a565b5b828202905092915050565b60008115159050919050565b611fb381611f9e565b8114611fbe57600080fd5b50565b600081519050611fd081611faa565b92915050565b600060208284031215611fec57611feb611642565b5b6000611ffa84828501611fc1565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b600061205f602a83611bdc565b915061206a82612003565b604082019050919050565b6000602082019050818103600083015261208e81612052565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006120f1602683611bdc565b91506120fc82612095565b604082019050919050565b60006020820190508181036000830152612120816120e4565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600061215d601d83611bdc565b915061216882612127565b602082019050919050565b6000602082019050818103600083015261218c81612150565b9050919050565b600081905092915050565b60006121a982611a6f565b6121b38185612193565b93506121c3818560208601611a8b565b80840191505092915050565b60006121db828461219e565b915081905092915050565b600081519050919050565b60006121fc826121e6565b6122068185611bdc565b9350612216818560208601611a8b565b61221f81611abe565b840191505092915050565b6000602082019050818103600083015261224481846121f1565b90509291505056fea264697066735822122028c107cc09ff1ef95b34912c0c6d22d7da9141fa32702426962d221dff8aa4f264736f6c63430008090033";

type NmxInvestControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NmxInvestControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NmxInvestController__factory extends ContractFactory {
  constructor(...args: NmxInvestControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _milkyWayAddress: PromiseOrValue<string>,
    _bnbAddress: PromiseOrValue<string>,
    _investingTokenAddress: PromiseOrValue<string>,
    _investingTokenType: PromiseOrValue<BigNumberish>,
    _rewardsTokenAddress: PromiseOrValue<string>,
    _factoryAddress: PromiseOrValue<string>,
    _stakingServiceAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NmxInvestController> {
    return super.deploy(
      _milkyWayAddress,
      _bnbAddress,
      _investingTokenAddress,
      _investingTokenType,
      _rewardsTokenAddress,
      _factoryAddress,
      _stakingServiceAddress,
      overrides || {}
    ) as Promise<NmxInvestController>;
  }
  override getDeployTransaction(
    _milkyWayAddress: PromiseOrValue<string>,
    _bnbAddress: PromiseOrValue<string>,
    _investingTokenAddress: PromiseOrValue<string>,
    _investingTokenType: PromiseOrValue<BigNumberish>,
    _rewardsTokenAddress: PromiseOrValue<string>,
    _factoryAddress: PromiseOrValue<string>,
    _stakingServiceAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _milkyWayAddress,
      _bnbAddress,
      _investingTokenAddress,
      _investingTokenType,
      _rewardsTokenAddress,
      _factoryAddress,
      _stakingServiceAddress,
      overrides || {}
    );
  }
  override attach(address: string): NmxInvestController {
    return super.attach(address) as NmxInvestController;
  }
  override connect(signer: Signer): NmxInvestController__factory {
    return super.connect(signer) as NmxInvestController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NmxInvestControllerInterface {
    return new utils.Interface(_abi) as NmxInvestControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NmxInvestController {
    return new Contract(address, _abi, signerOrProvider) as NmxInvestController;
  }
}
