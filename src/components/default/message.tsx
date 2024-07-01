import {
  Check,
  ChevronDown,
  CornerDownLeft,
  CornerDownRight,
} from 'lucide-react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface MessageProps {
  text?: string
  src?: string
  type: 'text' | 'image' | 'video'
  origin?: 'left' | 'right'
}

export function Message({ type, text, src, origin = 'left' }: MessageProps) {
  return (
    <div className={`w-full ${origin === 'right' && 'flex justify-end'}`}>
      <div className="inline-flex max-w-[50%] flex-col gap-2 rounded-md bg-muted px-3 py-2">
        {type === 'text' ? (
          <span>{text}</span>
        ) : type === 'image' ? (
          <img
            alt="Imagem da mensagem"
            className="w-full rounded-md object-contain"
            src={src}
          />
        ) : (
          type === 'video' && (
            <video
              src={src}
              className="w-full rounded-md object-contain"
              controls
            />
          )
        )}

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4" /> 17:45
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon-xs" variant="secondary">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Abrir opção da mensagem</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <CornerDownLeft className="mr-2 h-4 w-4" />

                <span>Responder</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CornerDownRight className="mr-2 h-4 w-4" />
                <span>Encaminhar</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
