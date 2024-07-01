import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './router'
import { queryClient } from './utils/lib/react-query'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="nitro-chat" defaultTheme="light">
        <Helmet titleTemplate="%s | Nitro CHAT" />

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
