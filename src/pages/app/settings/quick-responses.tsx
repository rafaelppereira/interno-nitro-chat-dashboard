import { Pencil, Plus, Search, Trash, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/default/pagination'
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

export function QuickResponses() {
  return (
    <>
      <Helmet title="Respostas rápidas" />

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight">
            Todas as respostas rápidas (5)
          </h1>
          <Button
            type="button"
            variant="ghost"
            className="text-muted-foreground"
          >
            <Plus className="mr-2 h-4 w-4" />
            <span>Adicionar uma resposta rápida</span>
          </Button>
        </div>

        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>

          <Input placeholder="Identificador" className="h-8 w-auto" />

          <Input placeholder="Resposta" className="h-8 w-[320px]" />

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
              <TableHead>Identificador</TableHead>
              <TableHead>Resposta</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>Enviar orçamento</TableCell>
                  <TableCell>
                    Nosso orçamento está avaliado em R$ [MUDAR]
                  </TableCell>

                  <TableCell className="space-x-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            size="icon"
                            variant="outline"
                            className="text-muted-foreground"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Editar resposta rápida</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

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
                          <p>Excluir resposta rápida</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        <Pagination
          onPageChange={() => console.log}
          pageIndex={0}
          perPage={5}
          totalCount={200}
        />
      </div>
    </>
  )
}
