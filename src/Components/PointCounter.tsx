import { Chip } from '@mui/material'
import { usePointStore } from '../hooks/usePointStore'

export function PointCounter () {
  const { points } = usePointStore()
  return <Chip label={points}/>
}
