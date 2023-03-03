import { Button } from '@mui/material'
import { useQuizStore } from '../hooks/useQuizStore'

export function QuizButton () {
  const { targetNote, rerollTargetNote, settings } = useQuizStore()
  let displayValue = 'Start Quiz!'
  if (targetNote) {
    if (settings.onlyTargetPitchClasses) {
      displayValue = targetNote.pitchClass
    } else {
      displayValue = targetNote.name
    }
  }
  return (
    <Button variant="contained" sx={{ fontSize: '150pt' }} onClick={rerollTargetNote}>{displayValue}</Button>
  )
}
