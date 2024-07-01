import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCheck, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const messageTemplateFormData = z.object({
  header: z.string(),
  body: z.string(),
  footer: z.string(),
  buttons: z.array(
    z.object({
      type: z.string(),
      text: z.string(),
      url: z.string(),
    }),
  ),
})

type MessageTemplateFormData = z.infer<typeof messageTemplateFormData>

export function MessageTemplate() {
  const [searchParams, setSearchParams] = useSearchParams()

  const messageHeader = searchParams.get('messageHeader')
  const messageBody = searchParams.get('messageBody')
  const messageFooter = searchParams.get('messageFooter')

  const [buttonType, setButtonType] = useState<
    'website' | 'phone' | 'cancel_marketing' | null
  >()

  const { register, watch } = useForm<MessageTemplateFormData>({
    resolver: zodResolver(messageTemplateFormData),
    defaultValues: {
      header: messageHeader ?? '',
      body: messageBody ?? '',
      footer: messageFooter ?? '',
    },
  })

  function handleSetButtonType(type: 'website' | 'phone' | 'cancel_marketing') {
    setButtonType(type)
  }

  function handleAddHttpState() {
    const header = watch('header')
    const body = watch('body')
    const footer = watch('footer')

    setSearchParams((state) => {
      if (header) {
        state.set('messageHeader', header)
      } else {
        state.delete('messageHeader')
      }

      if (body) {
        state.set('messageBody', body)
      } else {
        state.delete('messageBody')
      }

      if (footer) {
        state.set('messageFooter', footer)
      } else {
        state.delete('messageFooter')
      }

      return state
    })
  }

  useEffect(() => {
    handleAddHttpState()
  }, [watch('header'), watch('body'), watch('footer')])

  return (
    <>
      <Helmet title="Modelo de mensagem" />

      <div className="w-full">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              Etapa 01 (0%) <CheckCheck className="h-4 w-4 text-primary" />
            </span>
            <span>Etapa 02 (50%)</span>
            <span>Etapa 03 (100%)</span>
          </div>

          <Progress value={50} />
        </div>

        <div className="mt-5">
          <div className="flex w-full gap-4">
            <div className="flex flex-1 flex-col gap-6">
              <div>
                <h1 className="mb-2 text-sm text-muted-foreground">
                  Cabeçalho
                  <Badge variant="outline" className="ml-1">
                    Opcional
                  </Badge>
                </h1>
                <Input
                  placeholder="Insira o texto do seu cabeçalho"
                  {...register('header')}
                />
              </div>

              <div>
                <h1 className="mb-2 text-sm text-muted-foreground">Corpo</h1>

                <Textarea
                  placeholder="Insira o texto do seu cabeçado"
                  className="max-h-40 min-h-32"
                  {...register('body')}
                />
              </div>

              <div>
                <h1 className="mb-2 text-sm text-muted-foreground">
                  Rodapé{' '}
                  <Badge variant="outline" className="ml-1">
                    Opcional
                  </Badge>
                </h1>

                <Input
                  placeholder="Insira o texto do seu rodapé"
                  {...register('footer')}
                />
              </div>

              <div>
                <h1 className="mb-2 text-sm text-muted-foreground">
                  Botões{' '}
                  <Badge variant="outline" className="ml-1">
                    Opcional
                  </Badge>
                </h1>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      className="text-muted-foreground"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Adicionar um botão
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                      <span>Botões de resposta rápida</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      onClick={() => handleSetButtonType('cancel_marketing')}
                    >
                      <span>Cancelar marketing</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuLabel className="flex flex-col">
                      <span>Botões de chamada</span>
                    </DropdownMenuLabel>

                    <DropdownMenuItem
                      onClick={() => handleSetButtonType('website')}
                    >
                      <span>Acessar site</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleSetButtonType('phone')}
                    >
                      <span>Ligar</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {buttonType && (
                <div>
                  {buttonType === 'cancel_marketing' ? (
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <Label htmlFor="button_text">Texto do botão</Label>
                          <Input
                            id="button_text"
                            value="Parar promoções"
                            disabled
                          />
                        </div>

                        <div className="flex-1">
                          <Label htmlFor="footer_text">Texto do rodapé</Label>
                          <Input
                            id="footer_text"
                            value="Não tem interesse? Toque para Parar promoções"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="mt-5 flex items-start gap-3">
                        <Checkbox
                          id="check"
                          checked={true}
                          disabled
                          className="mt-1"
                        />

                        <Label
                          htmlFor="check"
                          className="block max-w-md text-sm text-muted-foreground"
                        >
                          Estou ciente de que é responsabilidade de parar de
                          enviar mensagens de marketing para os clientes que
                          recusaram.
                        </Label>
                      </div>

                      <Button type="button" className="mt-5">
                        Adicionar esse botão
                      </Button>
                    </div>
                  ) : buttonType === 'website' ? (
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <Label htmlFor="button_text">Texto do botão</Label>
                          <Input id="button_text" />
                        </div>

                        <div className="flex-1">
                          <Label htmlFor="footer_text">URL do site</Label>
                          <Input
                            id="footer_text"
                            placeholder="https://www.exemplo.com"
                          />
                        </div>
                      </div>

                      <div className="mt-5 flex items-start gap-3">
                        <Checkbox
                          id="check"
                          checked={true}
                          disabled
                          className="mt-1"
                        />

                        <Label
                          htmlFor="check"
                          className="block max-w-md text-sm text-muted-foreground"
                        >
                          Estou ciente de que é responsabilidade de não enviar
                          links maliciosos para meus clientes
                        </Label>
                      </div>

                      <Button type="button" className="mt-5">
                        Adicionar esse botão
                      </Button>
                    </div>
                  ) : (
                    buttonType === 'phone' && (
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <Label htmlFor="button_text">Texto do botão</Label>
                            <Input id="button_text" />
                          </div>

                          <div className="flex-1">
                            <Label htmlFor="footer_text">Telefone</Label>
                            <Input
                              id="footer_text"
                              placeholder="+00 99 99999-9999"
                            />
                          </div>
                        </div>

                        <Button type="button" className="mt-5">
                          Adicionar esse botão
                        </Button>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="w-full max-w-72">
              <h1 className="font-semibold tracking-tight text-muted-foreground">
                Preview da mensagem
              </h1>

              <div className="mt-2 rounded-r-sm rounded-bl-sm bg-muted px-4 py-2">
                <h1 className="text-md font-semibold">{watch('header')}</h1>
                <span className="text-sm text-muted-foreground">
                  {watch('body')}
                </span>

                <p className="text-muted-foregrou mt-2 text-xs">
                  {watch('footer')}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="/disparo/importar-contatos"
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground"
                  >
                    <ChevronLeft />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Etapa anterior</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="/disparo/conclusao"
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
    </>
  )
}
