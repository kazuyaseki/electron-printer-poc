export interface IElectronAPI {
  fetchPrinters: () => Promise<any>;
  print: (deviceName: string) => Promise<any>;
  on: (channel: any, callback: any) => Electron.IpcRenderer;
}

declare global {
  interface Window {
    electronAPI: typeof electronAPIFunctions;
  }
}
