import { create } from 'zustand'
import { randomNote } from '../Logic/randomizer'
import { Note } from '../Types/Note'

interface QuizSettings {
  onlyTargetPitchClasses: boolean;
  onlyNaturals: boolean;
}

interface QuizStore {
  targetNote: Note;
  settings: QuizSettings;
  rerollTargetNote: () => void;
  setTargetNote: (note: Note) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  targetNote: randomNote(),
  settings: {
    onlyTargetPitchClasses: true,
    onlyNaturals: false
  },
  setTargetNote: (targetNote: Note) => set(() => ({ targetNote })),
  setQuizSettings: (settings: QuizSettings) => set(() => ({ settings })),
  rerollTargetNote: () => set(() => ({ targetNote: randomNote() }))
}))
