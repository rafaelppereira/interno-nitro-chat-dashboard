import { Phone } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function SettingsLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex w-full flex-col gap-4 p-10">
      <div className="flex items-center justify-between border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
          <p className="mt-1 text-muted-foreground">
            Gerencie as configurações da sua conta e defina preferências de
            e-mail.
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" variant="destructive">
              <Phone className="mr-2 h-4 w-4" />
              Conectar meu WhatsApp
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Leitura do QRCode</DialogTitle>
              <DialogDescription>
                Abre seu WhatsApp e faça a leitura do QRCode para finalizar o
                processo.
              </DialogDescription>
            </DialogHeader>

            <img
              alt="QRCode"
              src="/qrcode.png"
              className="aspect-square w-full object-contain"
            />

            <DialogFooter className="space-x-4">
              <Button variant="outline">Gerar um novo</Button>
              <DialogClose>
                <Button variant="destructive">Cancelar</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-6">
        <div className="flex w-full max-w-56 flex-col gap-4">
          <Link
            data-current={pathname === '/configuracoes/etiquetas'}
            to="/configuracoes/etiquetas"
            className="w-full rounded-sm px-3 py-2 transition-colors hover:bg-muted data-[current=true]:bg-muted"
          >
            Etiquetas
          </Link>

          <Link
            data-current={pathname === '/configuracoes/respostas-rapidas'}
            to="/configuracoes/respostas-rapidas"
            className="w-full rounded-sm px-3 py-2 transition-colors hover:bg-muted data-[current=true]:bg-muted"
          >
            Respostas rápidas
          </Link>

          <Link
            data-current={pathname === '/configuracoes/equipe'}
            to="/configuracoes/equipe"
            className="w-full rounded-sm px-3 py-2 transition-colors hover:bg-muted data-[current=true]:bg-muted"
          >
            Equipe
          </Link>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
