import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

interface TableSkeletonProps {
  length: number
}

export function TableSkeleton({ length }: TableSkeletonProps) {
  return Array.from({ length: 5 }).map((_, i) => {
    return (
      <TableRow key={i}>
        {Array.from({ length }).map((_, i) => {
          return (
            <TableCell key={i}>
              <Skeleton className="h-4 w-[148px]" />
            </TableCell>
          )
        })}
      </TableRow>
    )
  })
}
