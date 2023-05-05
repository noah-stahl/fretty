import { GuitarString } from './GuitarString'
import { Note } from './Note'

export type Fret = {
  guitarString: GuitarString;
  fretNumber: number;
  note: Note;
}
