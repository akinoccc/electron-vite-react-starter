import { ipcRenderer } from 'electron';

export default {
  get(key: string) {
    return ipcRenderer.sendSync('electron-store-get', key);
  },
  set(property: string, val) {
    ipcRenderer.send('electron-store-set', property, val);
  },
};
