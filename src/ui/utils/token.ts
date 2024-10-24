import { TokenItem } from '@/background/service/openapi';
import { CHAINS } from '@/constant';
import { Contract, providers } from 'ethers';
import { hexToString } from 'web3-utils';

export const getTokenSymbol = async (
  id: string,
  provider: providers.JsonRpcProvider
) => {
  try {
    const contract = new Contract(
      id,
      [
        {
          constant: true,
          inputs: [],
          name: 'symbol',
          outputs: [
            {
              name: '',
              type: 'string',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
      ],
      provider
    );
    const symbol = await contract.symbol();
    return symbol;
  } catch (e) {
    try {
      const contract = new Contract(
        id,
        [
          {
            constant: true,
            inputs: [],
            name: 'symbol',
            outputs: [
              {
                name: '',
                type: 'bytes32',
              },
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function',
          },
        ],
        provider
      );
      const symbol = await contract.symbol();
      return hexToString(symbol);
    } catch (e) {
      const contract = new Contract(
        id,
        [
          {
            constant: true,
            inputs: [],
            name: 'SYMBOL',
            outputs: [
              {
                name: '',
                type: 'string',
              },
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function',
          },
        ],
        provider
      );
      return contract.SYMBOL();
    }
  }
};

export const geTokenDecimals = async (
  id: string,
  provider: providers.JsonRpcProvider
) => {
  try {
    const contract = new Contract(
      id,
      [
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [
            {
              name: '',
              type: 'uint8',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
      ],
      provider
    );
    const decimals = await contract.decimals();
    return decimals;
  } catch (e) {
    const contract = new Contract(
      id,
      [
        {
          constant: true,
          inputs: [],
          name: 'DECIMALS',
          outputs: [
            {
              name: '',
              type: 'uint8',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
      ],
      provider
    );
    return contract.DECIMALS();
  }
};

export const getTokenName = async (
  id: string,
  provider: providers.JsonRpcProvider
) => {
  try {
    const contract = new Contract(
      id,
      [
        {
          constant: true,
          inputs: [],
          name: 'name',
          outputs: [
            {
              name: '',
              type: 'string',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
      ],
      provider
    );
    const name = await contract.name();
    return name;
  } catch (e) {
    try {
      const contract = new Contract(
        id,
        [
          {
            constant: true,
            inputs: [],
            name: 'name',
            outputs: [
              {
                name: '',
                type: 'bytes32',
              },
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function',
          },
        ],
        provider
      );
      const name = await contract.name();
      return hexToString(name);
    } catch (e) {
      const contract = new Contract(
        id,
        [
          {
            constant: true,
            inputs: [],
            name: 'NAME',
            outputs: [
              {
                name: '',
                type: 'string',
              },
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function',
          },
        ],
        provider
      );
      return contract.NAME();
    }
  }
};

export type ValidateTokenParam = {
  id: string;
  symbol: string;
  decimals: number;
};
export const validateToken = async <
  T extends ValidateTokenParam = ValidateTokenParam
>(
  token: T,
  chain,
  customRPC
) => {
  if (!chain) return true;
  const currentChain = CHAINS[chain];
  if (token.id === currentChain.nativeTokenAddress) {
    if (
      token.symbol !== currentChain.nativeTokenSymbol ||
      token.decimals !== currentChain.nativeTokenDecimals
    ) {
      return false;
    }
    return true;
  }
  try {
    const [decimals, symbol] = await Promise.all([
      geTokenDecimals(
        token.id,
        new providers.JsonRpcProvider(customRPC || currentChain.thridPartyRPC)
      ),
      getTokenSymbol(
        token.id,
        new providers.JsonRpcProvider(customRPC || currentChain.thridPartyRPC)
      ),
    ]);

    if (symbol !== token.symbol || decimals !== token.decimals) {
      return false;
    }
    return true;
  } catch (e) {
    console.error('token verify failed', e);
    return false;
  }
};
