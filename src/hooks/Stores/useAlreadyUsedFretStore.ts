import { create } from 'zustand'
import { Fret } from '../../Types/Fret'

interface AlreadyUsedFretStore {
  alreadyUsedFrets: Fret[];
  limit: number;
  addFret: (newFret: Fret) => void;
  clearFrets: () => void;
  setLimit: (limit: number) => void;
  incrementLimit: () => void;
  decrementLimit: () => void;
}

export const useAlreadyUsedFretStore = create<AlreadyUsedFretStore>((set) => ({
  alreadyUsedFrets: [],
  limit: 5,
  addFret: (newFret) => set((state) => ({
    alreadyUsedFrets: addFretToStore({
      newFret,
      frets: state.alreadyUsedFrets,
      limit: state.limit
    })
  })),
  clearFrets: () => set({ alreadyUsedFrets: [] }),
  setLimit: (limit) => set({ limit }),
  incrementLimit: () => set((state) => ({ limit: state.limit + 1 })),
  decrementLimit: () => set((state) => {
    if (state.limit <= 0) {
      return { limit: 0 }
    }
    return { limit: state.limit - 1 }
  })
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
