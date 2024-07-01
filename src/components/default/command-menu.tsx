'use client'

import {
  BarChart,
  MessageCircle,
  Paperclip,
  Phone,
  Plus,
  Users2,
  Zap,
} from 'lucide-react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

import { DropdownMenuLabel } from '../ui/dropdown-menu'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'

export function CommandMenu() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  function handleRedirect(url: string) {
    navigate(url)
  }

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Pesquisar{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Escreva o comando para buscar..." />
        <CommandList>
          <CommandEmpty>Sem resultados encontrados.</CommandEmpty>
          <CommandGroup>
            <DropdownMenuLabel>
              <div className="flex items-center space-x-2">
                <Switch id="work-mode" />
                <Label htmlFor="work-mode">Modo de trabalho</Label>
              </div>
            </DropdownMenuLabel>
          </CommandGroup>

          <CommandGroup heading="Atalhos">
            <CommandItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>Adicionar um usuário a equipe</span>
            </CommandItem>
            <CommandItem>
              <Phone className="mr-2 h-4 w-4" />
              <span>Conectar WhatsApp empresarial</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Sugestões">
            <CommandItem title="Dashboard" onClick={() => handleRedirect('/')}>
              <BarChart className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem title="Bate papo ao-vivo">
              <MessageCircle className="mr-2 h-4 w-4" />
              <span>Bate papo ao-vivo</span>
            </CommandItem>

            <CommandEmpty>daw</CommandEmpty>
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Settings">
            <CommandItem title="Etiquetas">
              <Paperclip className="mr-2 h-4 w-4" />
              <span>Etiquetas</span>
            </CommandItem>
            <CommandItem title="Respostas rápidas">
              <Zap className="mr-2 h-4 w-4" />
              <span>Respostas rápidas</span>
            </CommandItem>
            <CommandItem title="Equipe">
              <Users2 className="mr-2 h-4 w-4" />
              <span>Equipe</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
