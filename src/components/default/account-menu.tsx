import { Building, ChevronDown, LogOut } from 'lucide-react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          Nitro desenvolvimento
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel className="flex flex-col">
          <span>Rafael Pereira</span>
          <span className="text-sm font-normal text-muted-foreground">
            rafael@nitrochat.com.br
          </span>
        </DropdownMenuLabel>

        <DropdownMenuLabel>
          <div className="flex items-center space-x-2">
            <Switch id="work-mode" />
            <Label htmlFor="work-mode">Modo de trabalho</Label>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="text-rose-500 dark:text-rose-400">
          <button className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
