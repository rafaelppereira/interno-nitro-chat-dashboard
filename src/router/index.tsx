import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/_layouts/app.layout'
import { SettingsLayout } from '@/_layouts/settings.layout'
import { TriggerLayout } from '@/_layouts/trigger.layout'
import { Chat } from '@/pages/app/chat'
import { Dashboard } from '@/pages/app/dashboard'
import { HangTags } from '@/pages/app/settings/hang-tags'
import { QuickResponses } from '@/pages/app/settings/quick-responses'
import { Team } from '@/pages/app/settings/team'
import { Conclusion } from '@/pages/app/trigger/conclusion'
import { ImportContacts } from '@/pages/app/trigger/import-contacts'
import { MessageTemplate } from '@/pages/app/trigger/message-template'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/',
        element: <TriggerLayout />,
        children: [
          {
            path: '/disparo/importar-contatos',
            element: <ImportContacts />,
          },
          {
            path: '/disparo/modelo-de-mensagem',
            element: <MessageTemplate />,
          },
          {
            path: '/disparo/conclusao',
            element: <Conclusion />,
          },
        ],
      },
      {
        path: '/',
        element: <SettingsLayout />,
        children: [
          {
            path: '/configuracoes/etiquetas',
            element: <HangTags />,
          },
          {
            path: '/configuracoes/respostas-rapidas',
            element: <QuickResponses />,
          },
          {
            path: '/configuracoes/equipe',
            element: <Team />,
          },
        ],
      },
    ],
  },
])
