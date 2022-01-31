import { ethers, providers } from 'ethers';
import { NETWORKS } from '../constants';

const getProvider = (injectedProvider: any, defaultProviderKeys: any, network: any) => {
  let provider: providers.Provider;
  const chainId = NETWORKS[network];

  if (!injectedProvider) {
    if (defaultProviderKeys && Object.keys(defaultProviderKeys).length > 1) {
      provider = ethers.getDefaultProvider(network, defaultProviderKeys);
    } else {
      provider = ethers.getDefaultProvider(network);
      console.log(
        `These API keys are a provided as a community resource by the backend services for low-traffic projects and for early prototyping.
        It is highly recommended to use own keys: https://docs.ethers.io/v5/api-keys/`
      );
    }
  } else if (typeof injectedProvider === 'string') {
    provider = new providers.StaticJsonRpcProvider(injectedProvider, chainId);
  } else if (injectedProvider instanceof providers.Provider) {
    provider = injectedProvider;
  } else {
    provider = new providers.Web3Provider(injectedProvider, chainId);
  }

  // console.log('getProvider', { provider, chainId });

  return [provider, chainId];
};

export { getProvider };
