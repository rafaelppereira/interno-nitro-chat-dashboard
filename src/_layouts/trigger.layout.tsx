import { CheckCheck, MessageSquareText } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function TriggerLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex w-full flex-col gap-4 p-10">
      <div className="flex items-center justify-between border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Disparo de mensagens
          </h1>
          <p className="mt-1 text-muted-foreground">
            Gerencie seus disparos em massa sem risco de bloqueio do número
            oficial da empresa.
          </p>
        </div>

        <Button type="button" variant="default">
          <MessageSquareText className="mr-2 h-4 w-4" />
          Gerenciar modelos de mensagens
        </Button>
      </div>

      <div className="flex gap-6">
        <div className="flex w-full max-w-60 flex-col gap-4">
          <Link
            to="/disparo/importar-contatos"
            data-current={pathname === '/disparo/importar-contatos'}
            className="flex w-full items-center justify-between rounded-sm px-3 py-2 transition-colors hover:bg-muted data-[current=true]:bg-muted"
          >
            Importar contatos
            {/* <span>01</span> */}
            <span>
              <CheckCheck className="h-4 w-4 text-primary" />
            </span>
          </Link>

          <Link
            data-disabled={true}
            to="/disparo/modelo-de-mensagem"
            data-current={pathname === '/disparo/modelo-de-mensagem'}
            className="flex w-full items-center justify-between rounded-sm px-3 py-2 transition-colors hover:bg-muted data-[disabled=true]:pointer-events-none data-[current=true]:bg-muted data-[disabled=true]:opacity-60"
          >
            Modelo de mensagem
            <span>02</span>
          </Link>

          <Link
            data-disabled={true}
            to="/disparo/conclusao"
            data-current={pathname === '/disparo/conclusao'}
            className="flex w-full items-center justify-between rounded-sm px-3 py-2 transition-colors hover:bg-muted data-[disabled=true]:pointer-events-none data-[current=true]:bg-muted data-[disabled=true]:opacity-60"
          >
            Conclusão
            <span>03</span>
          </Link>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
