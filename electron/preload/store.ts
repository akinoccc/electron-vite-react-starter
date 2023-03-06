import { ipcRenderer } from 'electron';

export default {
  get(key) {
    return ipcRenderer.sendSync('electron-store-get', key);
  },
  set(property, val) {
    ipcRenderer.send('electron-store-set', property, val);
  },
};
