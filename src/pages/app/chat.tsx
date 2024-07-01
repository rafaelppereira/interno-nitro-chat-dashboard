import EmojiPicker, { Theme } from 'emoji-picker-react'
import { CheckCheck, FilePlus2, Mic, Smile, StickyNote } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Message } from '@/components/default/message'
import { PlusMessageMenu } from '@/components/default/plus-message-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Chat() {
  return (
    <>
      <Helmet title="Bate papo ao-vivo" />

      <div className="w-full flex-1 rounded-md ">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={30} minSize={30} maxSize={45}>
            <Tabs defaultValue="me">
              <div className="flex h-full flex-col p-5">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold tracking-tight">
                    Mensagens
                  </h1>

                  <TabsList>
                    <TabsTrigger value="me">Meus atendimentos</TabsTrigger>
                    <TabsTrigger value="all">Todos</TabsTrigger>
                  </TabsList>
                </div>

                <Input
                  type="text"
                  placeholder="Buscar uma conversa..."
                  className="mt-3"
                />

                <TabsContent value="me">
                  <div className="mt-4 flex h-full max-h-full flex-1 flex-col gap-3 overflow-y-auto">
                    {Array.from({ length: 6 }).map((_, i) => {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-4 rounded-t-md p-3 transition-all hover:rounded-b-md hover:bg-muted"
                        >
                          <Avatar>
                            <AvatarImage src="https://github.com/rafaelppereira.png" />
                            <AvatarFallback>RP</AvatarFallback>
                          </Avatar>

                          <div className="flex-1 overflow-hidden ">
                            <div className="flex items-center justify-between">
                              <h1 className="text-lg tracking-tight">
                                Rafael Pereira
                              </h1>

                              <span className="text-xs text-muted-foreground">
                                17:34
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-muted-foreground">
                              <CheckCheck className="h-3 w-3" />
                              <p className="max-w-[85%] truncate text-sm ">
                                Fala meu amigo, tudo bem? e como posso ta te
                                ajudando hoje em relação a programação?
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="all">
                  <div className="mt-4 flex h-full max-h-full flex-1 flex-col gap-3 overflow-y-auto">
                    {Array.from({ length: 3 }).map((_, i) => {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-4 rounded-t-md p-3 transition-all hover:rounded-b-md hover:bg-muted"
                        >
                          <Avatar>
                            <AvatarImage src="https://github.com/BernardoPadilha.png" />
                            <AvatarFallback>BP</AvatarFallback>
                          </Avatar>

                          <div className="flex-1 overflow-hidden ">
                            <div className="flex items-center justify-between">
                              <h1 className="text-lg tracking-tight">
                                Bernardo Padilha
                              </h1>

                              <span className="text-xs text-muted-foreground">
                                17:34
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-muted-foreground">
                              <CheckCheck className="h-3 w-3" />
                              <p className="max-w-[85%] truncate text-sm ">
                                Eai mano tudo bem?
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel>
            <div className="flex h-full flex-1 flex-col ">
              <div className="flex h-16 items-center justify-between gap-3 border-b px-5">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/rafaelppereira.png" />
                    <AvatarFallback>RP</AvatarFallback>
                  </Avatar>

                  <h1 className="text-lg tracking-tight text-muted-foreground">
                    Rafael Pereira
                  </h1>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="destructive">FGTS</Badge>
                  <Badge variant="outline">Cliente 2024</Badge>

                  <Popover>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <PopoverTrigger asChild>
                            <Button size="icon" variant="secondary">
                              <StickyNote className="h-4 w-4" />
                              <span className="sr-only">
                                Adicionar uma observação
                              </span>
                            </Button>
                          </PopoverTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Adicionar uma observação</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <PopoverContent align="end" className="w-96">
                      <h1 className="text-lg font-medium tracking-tight">
                        Observação para o cliente
                      </h1>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Esse informação estará disponível para todos os
                        atendentes.
                      </p>

                      <Textarea
                        placeholder="Digite sua observação"
                        className="mt-4"
                      />

                      <span className="mt-2 block text-sm text-muted-foreground">
                        Essa informação será salva assim que você clicar fora
                      </span>
                    </PopoverContent>
                  </Popover>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="secondary">
                          <FilePlus2 className="h-4 w-4" />
                          <span className="sr-only">Criar uma etiqueta</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Criar uma etiqueta</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <div className="flex flex-col gap-4">
                  <Message type="text" text="Fala Rafael tudo bem?" />

                  {/* <Message
                    type="image"
                    src="https://media.glassdoor.com/l/66/5a/fc/15/cidade-de-deus-sede-administrativa.jpg"
                  />

                  <Message
                    type="video"
                    src="https://media.graphassets.com/A9rWFoFyQiKGytaG4W1Q"
                  /> */}
                </div>
              </div>

              <div className="flex items-center gap-2 p-5">
                <PlusMessageMenu />

                <div className="relative w-full">
                  <Input
                    type="text"
                    className="text-md h-14 flex-1 px-4"
                    placeholder="Digite uma mensagem..."
                  />

                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-muted-foreground"
                        >
                          <Smile className="h-6 w-6" />
                        </Button>
                      </PopoverTrigger>

                      <PopoverContent align="end" className="w-auto">
                        <EmojiPicker
                          searchDisabled
                          skinTonesDisabled
                          style={{
                            backgroundColor: 'hsl(var(--muted))',
                            border: '1px solid hsl(var(--muted))',
                          }}
                          theme={Theme.DARK}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <Button
                  size="icon"
                  variant="secondary"
                  className="h-14 w-14 shrink-0 text-2xl text-muted-foreground"
                >
                  <Mic className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  )
}
