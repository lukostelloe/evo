import { create } from 'zustand';

type ButtonTabState = {
  activeCard: string;
  changeButtonTab: (card: string) => void;
};

export const useButtonTabState = create<ButtonTabState>((set) => ({
  activeCard: 'aboutMe',
  changeButtonTab: (card) => set({ activeCard: card }),
}));