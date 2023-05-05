import { A_FRETS } from '../Logic/Frets/AFrets'
import { B_FRETS } from '../Logic/Frets/BFrets'
import { HIGH_E_FRETS } from '../Logic/Frets/HighEFrets'
import { LOW_E_FRETS } from '../Logic/Frets/LowEFrets'
import { addFretToStore } from './useAlreadyUsedFretStore'

describe('addFretToStore', () => {
  it('adds frets at end of array', () => {
    const frets = [LOW_E_FRETS[0], HIGH_E_FRETS[0]]
    const result = addFretToStore({
      frets,
      newFret: A_FRETS[0]
    })

    expect(result).toEqual(
      [LOW_E_FRETS[0], HIGH_E_FRETS[0], A_FRETS[0]]
    )
  })

  it('if limit is exceeded, remove fret at start of array', () => {
    const frets = [B_FRETS[0], B_FRETS[1], LOW_E_FRETS[0], HIGH_E_FRETS[0]]
    const result = addFretToStore({
      frets,
      newFret: A_FRETS[0],
      limit: 2
    })

    expect(result).toEqual(
      [HIGH_E_FRETS[0], A_FRETS[0]]
    )
  })

  it('if limit is greater than number of frets, don`t remove anything', () => {
    const frets = [A_FRETS[0]]
    const result = addFretToStore({
      frets,
      newFret: B_FRETS[0],
      limit: 3
    })

    expect(result).toEqual(
      [A_FRETS[0], B_FRETS[0]]
    )
  })

  it('if limit is not a positive number, don`t remove anything', () => {
    const frets = [A_FRETS[0]]
    const result = addFretToStore({
      frets,
      newFret: B_FRETS[0],
      limit: -1
    })

    expect(result).toEqual(
      [A_FRETS[0], B_FRETS[0]]
    )
  })
})
