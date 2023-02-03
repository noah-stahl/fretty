import { Button } from "@mui/material";
import { Note } from "../Types/Note";

interface FretButtonProps {
  note?: Note;
}

export function FretButton({ note }: FretButtonProps) {
  if (!note) {
    return <Button>---</Button>
  }
  return <Button onClick={() => {
    note.sound.play()
    note.sound.fade(1, 0, 1500)
  }}>{note.name}</Button>;
}
