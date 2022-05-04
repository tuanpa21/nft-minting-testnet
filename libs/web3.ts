import detectEthereumProvider from "@metamask/detect-provider";

export const isWalletConnected = async (): Promise<boolean> => {
    const provider = await detectEthereumProvider();
    const eth_accounts = await (window['ethereum'] as any).request({ method: 'eth_accounts' });

    return !!provider && !!eth_accounts && !!eth_accounts.length;
};
