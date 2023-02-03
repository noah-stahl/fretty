import { Button } from "@mui/material";
import { Note } from "../Types/note";

interface FretButtonProps {
  note: Note;
}

export function FretButton({ note }: FretButtonProps) {
  return <Button>{note.toString()}</Button>;
}
