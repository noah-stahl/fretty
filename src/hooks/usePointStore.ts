import { create } from 'zustand'

interface PointState {
  points: number;
  increasePoints: (by: number) => void;
  clearPoints: () => void;
}

export const usePointStore = create<PointState>((set) => ({
  points: 0,
  increasePoints: (by) => set((state) => ({ points: state.points + by })),
  clearPoints: () => set({ points: 0 })
}))
