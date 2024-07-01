import { Link, useLocation } from 'react-router-dom'

import { ThemeToggle } from '../theme/theme-toggle'
import { DatePicker } from '../ui/date-picker'
import { Separator } from '../ui/separator'
import { AccountMenu } from './account-menu'
import { CommandMenu } from './command-menu'
import { NavLink } from './nav-link'

export function Header() {
  const { pathname } = useLocation()

  return (
    <header className="fixed left-0 top-0 z-10 w-full border-b bg-primary-foreground">
      <div className="flex h-16 items-center justify-between gap-6 px-6">
        <img
          src="/favicon.svg"
          alt="Logo Nitro CHAT"
          className="h-12 w-12 object-contain"
        />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">Início</NavLink>

          <NavLink to="/chat">Bate papo ao-vivo</NavLink>

          <Link
            to="/disparo/importar-contatos"
            data-current={[
              '/disparo/importar-contatos',
              '/disparo/modelo-de-mensagem',
              '/disparo/conclusao',
            ].includes(pathname)}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
          >
            Disparo
          </Link>

          <Link
            to="/configuracoes/etiquetas"
            data-current={[
              '/configuracoes/respostas-rapidas',
              '/configuracoes/etiquetas',
              '/configuracoes/equipe',
            ].includes(pathname)}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
          >
            Configurações
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <CommandMenu />
          <DatePicker />
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
