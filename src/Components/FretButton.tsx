import { Button } from '@mui/material'
import { Note } from '../Types/Note'

interface FretButtonProps {
  note?: Note;
  hidden?: boolean;
}

export function FretButton ({ note, hidden }: FretButtonProps) {
  if (!note) {
    return <Button>---</Button>
  }
  return <Button onClick={() => {
    note.sound.play()
    note.sound.fade(1, 0, 1500)
  }}>{hidden ? '?' : note.name}</Button>
}
