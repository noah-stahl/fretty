import { Button } from '@mui/material'
import { usePointStore } from '../hooks/usePointStore'

export function PointIncrease () {
  const { increasePoints } = usePointStore()
  return <Button onClick={() => increasePoints(1)}>+1</Button>
}

export function PointReset () {
  const { clearPoints } = usePointStore()
  return <Button onClick={() => clearPoints()}>clear</Button>
}
