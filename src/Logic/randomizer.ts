import { PitchClass } from "../Types/PitchClass";

interface RandomNoteProps {
  onlyNatural: boolean;
}

const ALL_PITCH_CLASSES = [
  PitchClass.A,
  PitchClass.ASharp,
  PitchClass.B,
  PitchClass.C,
  PitchClass.CSharp,
  PitchClass.D,
  PitchClass.DSharp,
  PitchClass.E,
  PitchClass.F,
  PitchClass.FSharp,
  PitchClass.G,
  PitchClass.GSharp,
];

const ALL_NATURAL_PITCH_CLASSES = [
  PitchClass.A,
  PitchClass.B,
  PitchClass.C,
  PitchClass.D,
  PitchClass.E,
  PitchClass.F,
  PitchClass.G,
];

export function randomNote(
  { onlyNatural = true }: RandomNoteProps = { onlyNatural: true }
): PitchClass {
  if (onlyNatural) {
    return randomValueInArray(ALL_NATURAL_PITCH_CLASSES);
  }
  return randomValueInArray(ALL_PITCH_CLASSES);
}

function randomValueInArray<T>(myArray: Array<T>): T {
  return myArray[randomInt(0, myArray.length - 1)];
}

function randomInt(min: number, max: number) {
  const minInt = Math.floor(min);
  const maxInt = Math.floor(max);

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}
