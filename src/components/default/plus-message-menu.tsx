import {
  Images,
  MapPin,
  MenuSquare,
  Paperclip,
  Plus,
  SquareUser,
  Zap,
} from 'lucide-react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function PlusMessageMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="secondary"
          className="h-14 w-14 shrink-0 text-2xl text-muted-foreground"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Selecione uma opção</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Paperclip className="mr-2 h-4 w-4" />
          <span>Arquivo</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Images className="mr-2 h-4 w-4" />
          <span>Fotos e vídeos</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <SquareUser className="mr-2 h-4 w-4" />
          <span>Contato</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <MapPin className="mr-2 h-4 w-4" />
          <span>Localização</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <MenuSquare className="mr-2 h-4 w-4" />
          <span>Enquete</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Zap className="mr-2 h-4 w-4" />
          <span>Resposta rápida</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
