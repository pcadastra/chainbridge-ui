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
  // Ethereum - Avalanche Bridge
  chains: [
    {
      chainId: 1,
      networkId: 5,
      name: "Ethereum",
      bridgeAddress: "0x96B845aBE346b49135B865E5CeDD735FC448C3aD",
      erc20HandlerAddress: "0xdAC7Bb7Ce4fF441A235F08408e632FA1D799A147",
      rpcUrl: "https://mainnet.infura.io/v3/9a76dde18da0480b96fe5fc0caf20bb0",
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      defaultGasPrice: 90,
      tokens: [
        {
          address: "0x6b175474e89094c44da98b954eedeac495271d0f",
          name: "DAI",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x00000000000000000000006b175474e89094c44da98b954eedeac495271d0f00",
        },
      ],
    },
    {
      chainId: 2,
      networkId: 43113,
      name: "AVAX-C Chain",
      bridgeAddress: "0x32E35B48e10cAA2eD433486287B1f39207D1b39F",
      erc20HandlerAddress: "0x96B845aBE346b49135B865E5CeDD735FC448C3aD",
      rpcUrl: "http://127.0.0.1:9650/ext/bc/C/rpc",
      type: "Ethereum",
      blockExplorer: "https://cchain.explorer.avax.network/tx",
      nativeTokenSymbol: "AVAX",
      defaultGasPrice: 470,
      tokens: [
        {
          address: "0xdAC7Bb7Ce4fF441A235F08408e632FA1D799A147",
          name: "DAI",
          symbol: "ERC20",
          imageUri: ETHIcon,
          resourceId:
            "0x00000000000000000000006b175474e89094c44da98b954eedeac495271d0f00",
        },
      ],
    },
  ],
};
