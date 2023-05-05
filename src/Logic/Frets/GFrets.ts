import { Fret } from '../../Types/Fret'
import { GuitarString } from '../../Types/GuitarString'
import { ALL_NOTES } from '../notes'

const guitarString = GuitarString.G

const G0: Fret = {
  guitarString,
  fretNumber: 0,
  note: ALL_NOTES[0 + 15]
}

const G1: Fret = {
  guitarString,
  fretNumber: 1,
  note: ALL_NOTES[1 + 15]
}

const G2: Fret = {
  guitarString,
  fretNumber: 2,
  note: ALL_NOTES[2 + 15]
}

const G3: Fret = {
  guitarString,
  fretNumber: 3,
  note: ALL_NOTES[3 + 15]
}

const G4: Fret = {
  guitarString,
  fretNumber: 4,
  note: ALL_NOTES[4 + 15]
}

const G5: Fret = {
  guitarString,
  fretNumber: 5,
  note: ALL_NOTES[5 + 15]
}

const G6: Fret = {
  guitarString,
  fretNumber: 6,
  note: ALL_NOTES[6 + 15]
}

const G7: Fret = {
  guitarString,
  fretNumber: 7,
  note: ALL_NOTES[7 + 15]
}

const G8: Fret = {
  guitarString,
  fretNumber: 8,
  note: ALL_NOTES[8 + 15]
}

const G9: Fret = {
  guitarString,
  fretNumber: 9,
  note: ALL_NOTES[9 + 15]
}

const G10: Fret = {
  guitarString,
  fretNumber: 10,
  note: ALL_NOTES[10 + 15]
}

const G11: Fret = {
  guitarString,
  fretNumber: 11,
  note: ALL_NOTES[11 + 15]
}

const G12: Fret = {
  guitarString,
  fretNumber: 12,
  note: ALL_NOTES[12 + 15]
}

const G_FRETS: Fret[] = [
  G0,
  G1,
  G2,
  G3,
  G4,
  G5,
  G6,
  G7,
  G8,
  G9,
  G10,
  G11,
  G12
]

export { G_FRETS }
