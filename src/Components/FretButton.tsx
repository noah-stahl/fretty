import { Button } from '@mui/material'
import { Note } from '../Types/Note'

interface FretButtonProps {
  label: string;
  note?: Note;
}

export function FretButton ({ label, note }: FretButtonProps) {
  if (!note) {
    return <Button>---</Button>
  }
  return <Button onClick={() => {
    note.sound.play()
    note.sound.fade(1, 0, 1500)
  }}>{label}</Button>
}
