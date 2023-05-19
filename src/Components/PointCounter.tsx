import { Chip } from '@mui/material'
import { usePointStore } from '../hooks/Stores/usePointStore'

export function PointCounter () {
  const { points } = usePointStore()
  return <Chip label={points}/>
}
