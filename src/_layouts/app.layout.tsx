import { Outlet } from 'react-router-dom'

import { Header } from '@/components/default/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <div className="flex min-h-screen w-full flex-col ">
        <Header />

        <div className="mt-16 flex h-full w-full flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
