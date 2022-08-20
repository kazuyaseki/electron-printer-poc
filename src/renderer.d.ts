export interface IElectronAPI {
  fetchPrinters: () => Promise<any>;
  on: (channel: any, callback: any) => Electron.IpcRenderer;
}

declare global {
  interface Window {
    electronAPI: typeof electronAPIFunctions;
  }
}
