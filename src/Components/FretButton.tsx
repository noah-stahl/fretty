import { Button, ButtonProps, styled } from '@mui/material'
import { useQuiz } from '../hooks/useQuiz'
import { Fret } from '../Types/Fret'
import { useAlreadyUsedFretStore } from '../hooks/Stores/useAlreadyUsedFretStore'
import { useSettingsStore } from '../hooks/Stores/useSettingsStore'

interface FretButtonProps {
  fret: Fret;
}

const ButtonWithBorder = styled(Button)<ButtonProps>(({ theme }) => ({
  border: '1px solid',
  borderRadius: '0px'
}))

export function FretButton ({ fret }: FretButtonProps) {
  const { makeGuess } = useQuiz()
  const { alreadyUsedFrets } = useAlreadyUsedFretStore()
  const { note, fretNumber } = fret

  const playNote = () => {
    note.sound.play()
    note.sound.fade(1, 0, 1500)
  }

  return (
    <ButtonWithBorder
      disabled={alreadyUsedFrets.includes(fret)}
      onClick={() => {
        makeGuess(fret)
        playNote()
      }}
    >
      {fretNumber}
    </ButtonWithBorder>
  )
}
