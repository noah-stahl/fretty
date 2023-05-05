import { create } from 'zustand'
import { Fret } from '../Types/Fret'

interface AlreadyUsedFretState {
  alreadyUsedFrets: Fret[];
  limit: number;
  addFret: (newFret: Fret) => void;
  clearFrets: () => void;
  setLimit: (limit: number) => void;
}

export const useAlreadyUsedFretStore = create<AlreadyUsedFretState>((set) => ({
  alreadyUsedFrets: [],
  limit: 10,
  addFret: (newFret) => set((state) => ({
    alreadyUsedFrets: addFretToStore({
      newFret,
      frets: state.alreadyUsedFrets,
      limit: state.limit
    })
  })),
  clearFrets: () => set({ alreadyUsedFrets: [] }),
  setLimit: (limit) => set({ limit })
}))

interface AddFretToStoreProps {
  newFret: Fret;
  frets: Fret[];
  limit?: number;
}
export function addFretToStore ({ newFret, frets, limit = 0 }: AddFretToStoreProps) {
  if (limit > 0) {
    while (frets.length >= limit) {
      frets.shift()
    }
  }

  frets.push(newFret)

  return frets
}
