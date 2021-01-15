import ETHIcon from "./media/tokens/eth.svg";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  erc20HandlerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // Goerli - Kotti Bridge
  chains: [
    {
      chainId: 1,
      networkId: 5,
      name: "Ethereum - Goerli",
      bridgeAddress: "0xe1FE92AFe025E72aAd3Abb77a7122E20521B7790",
      erc20HandlerAddress: "0xEc8FCcd366D0C1257d40d801B1dDDF375B35d002",
      rpcUrl: "https://goerli.infura.io/v3/9a76dde18da0480b96fe5fc0caf20bb0",
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x2221A0E4e1127d2e6aC3aB3265E566f29B3A03Bd",
          name: "ERC20",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x00000000000000000000001161780b17ce1f53da7B4e80b898135B38D364B671",
        },
        {
          address: "0xc1BBE2Dc4E3b31E0d0f7F3A71754fA54C866D2B1",
          name: "WAVAX",
          symbol: "WAVAX",
          imageUri: ETHIcon,
          resourceId:
            "0x0000000000000000000000161780b17ce1f53da25Be80b898135B38D364B671",
        },
      ],
    },
    {
      chainId: 2,
      networkId: 43113,
      name: "AVAX-C Chain",
      bridgeAddress: "0xb91e995E53e12262Ba85b0390458D1dc29a7C71d",
      erc20HandlerAddress: "0xb93885Af0b7071609c4d6bBdc130c2D243503Dc7",
      rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
      type: "Ethereum",
      blockExplorer: "https://cchain.explorer.avax-test.network/tx",
      nativeTokenSymbol: "AVAX",
      defaultGasPrice: 470,
      tokens: [
        {
          address: "0x2F586C298fbf33cB2b521653Ac3446f1bB1bE0D9",
          name: "ERC20",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x00000000000000000000006847fCc3BA5848999fC3983D45464bF82A36584A01",
        },
        {
          address: "0x1D308089a2D1Ced3f1Ce36B1FcaF815b07217be3",
          name: "WAVAX",
          symbol: "WAVAX",
          imageUri: ETHIcon,
          resourceId:
            "0x0000000000000000000000ed52eCA444088D3892EdaEbb05Ccd012165545D305",
          isNativeWrappedToken: true,
        },
      ],
    },
  ],
};

// DEVNET
//   erc20ResourceId:
//   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
// chains: [
// {
//   chainId: 1,
//   networkId: 5,
//   name: "Ethereum - A",
//   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
//   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
//   rpcUrl: "http://localhost:8545",
//   type: "Ethereum",
//   tokens: [
//     {
//       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
//       name: "Test EthA",
//       symbol: "TESTA",
//       imageUri: ETHIcon,
//     },
//   ],
// },
// {
//   chainId: 2,
//   networkId: 6,
//   name: "Ethereum - B",
//   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
//   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
//   rpcUrl: "http://localhost:8546",
//   type: "Ethereum",
//   tokens: [
//     {
//       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
//       name: "Test EthB",
//       symbol: "TESTB",
//       imageUri: ETHIcon,
//     },
//   ],
// },
// ]
