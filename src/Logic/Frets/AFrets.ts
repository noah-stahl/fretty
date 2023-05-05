import { Fret } from '../../Types/Fret'
import { GuitarString } from '../../Types/GuitarString'
import { ALL_NOTES } from '../notes'

const guitarString = GuitarString.A

const A0: Fret = {
  guitarString,
  fretNumber: 0,
  note: ALL_NOTES[0 + 5]
}

const A1: Fret = {
  guitarString,
  fretNumber: 1,
  note: ALL_NOTES[1 + 5]
}

const A2: Fret = {
  guitarString,
  fretNumber: 2,
  note: ALL_NOTES[2 + 5]
}

const A3: Fret = {
  guitarString,
  fretNumber: 3,
  note: ALL_NOTES[3 + 5]
}

const A4: Fret = {
  guitarString,
  fretNumber: 4,
  note: ALL_NOTES[4 + 5]
}

const A5: Fret = {
  guitarString,
  fretNumber: 5,
  note: ALL_NOTES[5 + 5]
}

const A6: Fret = {
  guitarString,
  fretNumber: 6,
  note: ALL_NOTES[6 + 5]
}

const A7: Fret = {
  guitarString,
  fretNumber: 7,
  note: ALL_NOTES[7 + 5]
}

const A8: Fret = {
  guitarString,
  fretNumber: 8,
  note: ALL_NOTES[8 + 5]
}

const A9: Fret = {
  guitarString,
  fretNumber: 9,
  note: ALL_NOTES[9 + 5]
}

const A10: Fret = {
  guitarString,
  fretNumber: 10,
  note: ALL_NOTES[10 + 5]
}

const A11: Fret = {
  guitarString,
  fretNumber: 11,
  note: ALL_NOTES[11 + 5]
}

const A12: Fret = {
  guitarString,
  fretNumber: 12,
  note: ALL_NOTES[12 + 5]
}

const A_FRETS: Fret[] = [
  A0,
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12
]

export { A_FRETS }
