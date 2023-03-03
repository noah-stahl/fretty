import { Button, ButtonProps, styled } from '@mui/material'
import { useQuiz } from '../hooks/useQuiz'
import { Note } from '../Types/Note'

interface FretButtonProps {
  label: string;
  note?: Note;
}

const ButtonWithBorder = styled(Button)<ButtonProps>(({ theme }) => ({
  border: '1px solid',
  borderRadius: '0px'
}))

export function FretButton ({ label, note }: FretButtonProps) {
  const { makeGuess } = useQuiz()

  if (!note) {
    return <ButtonWithBorder>---</ButtonWithBorder>
  }

  const playNote = () => {
    note.sound.play()
    note.sound.fade(1, 0, 1500)
  }

  return <ButtonWithBorder onClick={() => {
    makeGuess(note)
    playNote()
  }}>{label}</ButtonWithBorder>
}
