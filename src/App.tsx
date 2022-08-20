import { useState } from "react";
import electron from "/electron.png";
import react from "/react.svg";
import vite from "/vite.svg";
import styles from "styles/app.module.scss";
import { PrinterInfo } from "electron";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [printers, setPrinters] = useState<PrinterInfo[]>([]);
  const fetchPrinters = () => {
    window.electronAPI.fetchPrinters();

    window.electronAPI.on("printers", (_: any, _printers: PrinterInfo[]) => {
      setPrinters(_printers);
    });
  };

  const print = (deviceName: string) => {
    window.electronAPI.print(deviceName);
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <button onClick={fetchPrinters}>プリンター情報取得</button>
        <ul>
          {printers.map((printer) => {
            return (
              <li key={printer.displayName}>
                {printer.displayName}
                <button onClick={() => print(printer.name)}>印刷する</button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
};

export default App;
