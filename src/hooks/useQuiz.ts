import { Howl } from 'howler'
import { usePointStore } from './usePointStore'
import { useQuizStore } from './useQuizStore'
import { useAlreadyUsedFretStore } from './useAlreadyUsedFretStore'
import { Fret } from '../Types/Fret'

const successSound = new Howl({ src: '../sounds/_SUCCESS.mp3' })

export function useQuiz () {
  const { targetNote, settings, rerollTargetNote } = useQuizStore()
  const { increasePoints, clearPoints } = usePointStore()
  const { addFret } = useAlreadyUsedFretStore()

  const makeGuess = (fret: Fret) => {
    let isGuessCorrect = false
    const { note } = fret
    if (settings.onlyTargetPitchClasses) {
      isGuessCorrect = note.pitchClass === targetNote.pitchClass
    } else {
      isGuessCorrect = note === targetNote
    }

    if (isGuessCorrect) {
      increasePoints(1)
      rerollTargetNote()
      addFret(fret)
      successSound.play()
    } else {
      clearPoints()
    }
  }

  return {
    makeGuess
  }
}
