import { create } from 'zustand';

export interface AppConfigState {
  appName: string;
}

const useAppConfigStore = create<AppConfigState>((set) => ({
  appName: 'My App',
  setAppName: (appName: string) => set({ appName }),
}));

export default useAppConfigStore;
