import { ArrowDownToLine, ChevronRight, Upload } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Dropzone } from '@/components/default/dropzone'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function ImportContacts() {
  return (
    <>
      <Helmet title="Importar contatos para disparo" />

      <div className="w-full">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
            <span>Etapa 01 (0%)</span>
            <span>Etapa 02 (50%)</span>
            <span>Etapa 03 (100%)</span>
          </div>

          <Progress value={0} />
        </div>

        <div className="mt-5">
          <Button type="button" variant="outline">
            <ArrowDownToLine className="mr-2 h-4 w-4" />
            Baixar template
          </Button>

          <div className="my-5">
            <Dropzone />
          </div>

          <div className="flex items-center justify-between">
            <Button type="button">
              <Upload className="mr-2 h-4 w-4" />
              Começar a importar
            </Button>

            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to="/disparo/modelo-de-mensagem"
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground"
                    >
                      <ChevronRight />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Próxima etapa</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
