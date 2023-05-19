import { create } from 'zustand'

interface SettingsSore {
  lefty: boolean;
  toggleLefty: () => void;
  showPitchClassesOnFrets: boolean;
  toggleShowPitchClassesOnFrets: () => void;
}

export const useSettingsStore = create<SettingsSore>((set) => ({
  lefty: true,
  showPitchClassesOnFrets: false,
  toggleLefty: () => set((state) => {
    console.log(state.lefty)
    if (state.lefty) {
      return ({ lefty: false })
    }
    return ({ lefty: true })
  }),
  toggleShowPitchClassesOnFrets: () => set((state) => ({ showPitchClassesOnFrets: !state.showPitchClassesOnFrets }), false)
}))
