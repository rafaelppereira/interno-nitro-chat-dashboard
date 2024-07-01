import { useQuery } from '@tanstack/react-query'
import { Loader2, Plus, Search, Trash, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Pagination } from '@/components/default/pagination'
import { TableSkeleton } from '@/components/skeletons/table-skeleton'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { getTeamService } from '@/utils/services/get-team.service'

export function Team() {
  const [searchParams, setSearchParams] = useSearchParams()

  const name = searchParams.get('name')
  const description = searchParams.get('description')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page)
    .parse(searchParams.get('page') ?? '1')

  const { data: result, isLoading: isLoadingTeam } = useQuery({
    queryKey: ['team', pageIndex, name, description],
    queryFn: () => getTeamService({ name, description, pageIndex }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', pageIndex.toString())

      return state
    })
  }

  return (
    <>
      <Helmet title="Equipe" />

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2 text-lg font-medium tracking-tight">
            Todas os membros da equipe{' '}
            {isLoadingTeam ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              `(${result?.meta.totalItems})`
            )}
          </h1>
          <Button
            type="button"
            variant="ghost"
            className="text-muted-foreground"
          >
            <Plus className="mr-2 h-4 w-4" />
            <span>Adicionar um novo membro</span>
          </Button>
        </div>

        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>

          <Input placeholder="Nome" className="h-8 w-auto" />

          <Input placeholder="E-mail" className="h-8 w-[320px]" />

          <Button type="submit" variant="secondary" size="sm">
            <Search className="mr-2 h-4 w-4" />
            Filtrar resultadors
          </Button>

          <Button type="button" variant="outline" size="sm">
            <X className="mr-2 h-4 w-4" />
            Remover filtros
          </Button>
        </form>

        <Table className="my-5">
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Permissões</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoadingTeam && <TableSkeleton length={4} />}

            {result &&
              result.teams.map((team, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{team.name}</TableCell>
                    <TableCell>{team.email}</TableCell>
                    <TableCell className="space-x-3">
                      {team.permissions.map((permission, i) => (
                        <Badge key={i}>{permission}</Badge>
                      ))}
                    </TableCell>

                    <TableCell className="space-x-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="outline"
                              className="text-muted-foreground hover:bg-rose-500 hover:text-white"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Remover membro da equipe</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>

        {result && (
          <Pagination
            perPage={result.meta.perPage}
            onPageChange={handlePaginate}
            pageIndex={result.meta.pageIndex}
            totalCount={result?.meta.totalItems}
          />
        )}
      </div>
    </>
  )
}
