import { Howl } from 'howler'
import { Note } from '../Types/Note'
import { usePointStore } from './usePointStore'
import { useQuizStore } from './useQuizStore'

const successSound = new Howl({ src: '../sounds/_SUCCESS.mp3' })

export function useQuiz () {
  const { targetNote, settings, rerollTargetNote } = useQuizStore()
  const { increasePoints } = usePointStore()

  const makeGuess = (note: Note) => {
    let isGuessCorrect = false
    if (settings.onlyTargetPitchClasses) {
      isGuessCorrect = note.pitchClass === targetNote.pitchClass
    } else {
      isGuessCorrect = note === targetNote
    }

    if (isGuessCorrect) {
      increasePoints(1)
      rerollTargetNote()
      successSound.play()
    } else {
      // errorSound.play()
    }
  }

  return {
    makeGuess
  }
}
