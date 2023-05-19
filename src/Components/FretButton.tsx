import { Button, ButtonProps, styled, useTheme } from '@mui/material'
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
  const theme = useTheme()
  const { makeGuess } = useQuiz()
  const { alreadyUsedFrets } = useAlreadyUsedFretStore()
  const { showPitchClassesOnFrets } = useSettingsStore()
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
      {showPitchClassesOnFrets && (
        <div style={{
          position: 'absolute',
          zIndex: -9,
          fontSize: '22pt',
          color: theme.palette.secondary.main
        }}>{note.pitchClass}</div>
      )}
      {fretNumber}
    </ButtonWithBorder>
  )
}
