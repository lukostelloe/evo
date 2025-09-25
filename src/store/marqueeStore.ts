import { create } from 'zustand';

type MarqueeState = {
  marqueeOn: boolean;
  setMarqueeOn: (on: boolean) => void;
};

export const useMarqueeStore = create<MarqueeState>((set) => ({
  marqueeOn: true,
  setMarqueeOn: (on) => set({ marqueeOn: on }),
}));


