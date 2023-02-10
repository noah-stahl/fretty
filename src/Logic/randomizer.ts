import { Note } from '../Types/Note'
import { PitchClass } from '../Types/PitchClass'
import { ALL_NATURAL_NOTES, ALL_NOTES } from './notes'
import { ALL_NATURAL_PITCH_CLASSES, ALL_PITCH_CLASSES } from './pitchClasses'

interface RandomPitchClassProps {
  onlyNatural: boolean;
}
export function randomPitchClass (
  { onlyNatural = true }: RandomPitchClassProps = { onlyNatural: true }
): PitchClass {
  if (onlyNatural) {
    return randomValueInArray(ALL_NATURAL_PITCH_CLASSES)
  }
  return randomValueInArray(ALL_PITCH_CLASSES)
}

interface RandomNoteProps {
  onlyNatural: boolean;
}

export function randomNote ({ onlyNatural = true }: RandomNoteProps = { onlyNatural: true }
): Note {
  if (onlyNatural) {
    return randomValueInArray(ALL_NATURAL_NOTES)
  }
  return randomValueInArray(ALL_NOTES)
}

function randomValueInArray<T> (myArray: Array<T>): T {
  return myArray[randomInt(0, myArray.length - 1)]
}

function randomInt (min: number, max: number) {
  const minInt = Math.floor(min)
  const maxInt = Math.floor(max)

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt
}
