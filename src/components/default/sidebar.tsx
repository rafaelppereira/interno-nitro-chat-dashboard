import { BarChart2, MessagesSquare } from 'lucide-react'

import { Button } from '../ui/button'

export function Sidebar() {
  return (
    <aside className="flex w-full max-w-64 flex-col border-r">
      <div className="flex h-16 w-full items-center justify-center border-b"></div>

      <div className="flex-1 p-2">
        <Button
          type="button"
          className="flex w-full items-center justify-between"
          variant="ghost"
        >
          <div className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4" />
            Dashboard
          </div>
        </Button>

        <Button
          type="button"
          className="flex w-full items-center justify-between"
          variant="ghost"
        >
          <div className="flex items-center gap-2">
            <MessagesSquare className="h-4 w-4" />
            Bate papo ao-vivo
          </div>

          <span>10</span>
        </Button>

        <Button
          type="button"
          className="flex w-full items-center justify-between"
          variant="ghost"
        >
          <div className="flex items-center gap-2">
            <MessagesSquare className="h-4 w-4" />
            Usuários
          </div>

          <span>10</span>
        </Button>

        <Button
          type="button"
          className="flex w-full items-center justify-between"
          variant="ghost"
        >
          <div className="flex items-center gap-2">
            <MessagesSquare className="h-4 w-4" />
            Fluxos de conversa
          </div>

          <span>10</span>
        </Button>
      </div>
    </aside>
  )
}
