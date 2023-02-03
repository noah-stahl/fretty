import { randomNote } from './randomizer'
import { PitchClass } from '../Types/PitchClass'

describe('randomNote', () => {
  it('returns random natural by default', () => {
    [...Array(1000)].forEach(() => {
      const note = randomNote()
      expect([
        PitchClass.A,
        PitchClass.B,
        PitchClass.C,
        PitchClass.D,
        PitchClass.E,
        PitchClass.F,
        PitchClass.G
      ]).toContain(note)
    })
  })
  it('returns with accidentals if option is passed', () => {
    [...Array(1000)].forEach(() => {
      const note = randomNote({ onlyNatural: false })
      expect([
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
        PitchClass.GSharp
      ]).toContain(note)
    })
  })
})
