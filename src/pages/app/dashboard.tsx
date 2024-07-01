import { MessagesSquare, UsersRound } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex w-full flex-col gap-4 p-10">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid w-full grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Mensagens recebidas e enviadas (mês)
              </CardTitle>
              <MessagesSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">230</span>
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">2%</span> em
                relação ao mês passado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Mensagens recebidas e enviadas (dia)
              </CardTitle>
              <MessagesSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">34</span>
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">2%</span> em
                relação ao dia anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Limite de usuários da equipe
              </CardTitle>
              <UsersRound className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
              <span className="tracking-tigh pb-2 text-2xl font-bold">2/5</span>
              <Progress value={20} title="teste" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-10 gap-4">
          <Card className="col-span-5">
            <CardHeader className="flex-row items-center justify-between pb-8">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">
                  Envio e recebimento
                </CardTitle>
                <CardDescription>
                  Envio e recebimento de mensagens mensais
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <ResponsiveContainer width="100%" height={248}>
                <LineChart
                  data={[
                    {
                      date: 'Janeiro',
                      receipt: 405,
                    },
                    {
                      date: 'Fevereiro',
                      receipt: 607,
                    },
                    {
                      date: 'Março',
                      receipt: 23,
                    },
                  ]}
                  style={{ fontSize: 12 }}
                >
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    dy={16}
                  />

                  <YAxis
                    stroke="#888"
                    axisLine={false}
                    tickLine={false}
                    width={80}
                    tickFormatter={(value: number) => `${value} msg`}
                  />

                  <CartesianGrid vertical={false} className="stroke-muted" />

                  <Line
                    type="linear"
                    strokeWidth={2}
                    dataKey="receipt"
                    stroke={colors.violet['500']}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-5">
            <CardHeader className="flex-row items-center justify-between pb-8">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">
                  Envio e recebimento
                </CardTitle>
                <CardDescription>
                  Envio e recebimento de mensagens diárias
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <ResponsiveContainer width="100%" height={248}>
                <LineChart
                  data={[
                    {
                      date: '12/12',
                      receipt: 23,
                    },
                    {
                      date: '13/12',
                      receipt: 23,
                    },
                    {
                      date: '14/12',
                      receipt: 2,
                    },
                    {
                      date: '15/12',
                      receipt: 34,
                    },
                  ]}
                  style={{ fontSize: 12 }}
                >
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    dy={16}
                  />

                  <YAxis
                    stroke="#888"
                    axisLine={false}
                    tickLine={false}
                    width={80}
                    tickFormatter={(value: number) => `${value} msg`}
                  />

                  <CartesianGrid vertical={false} className="stroke-muted" />

                  <Line
                    type="linear"
                    strokeWidth={2}
                    dataKey="receipt"
                    stroke={colors.violet['500']}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-5">
            <CardHeader className="flex-row items-center justify-between pb-8">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">
                  Envio e recebimento
                </CardTitle>
                <CardDescription>
                  Envio e recebimento de mensagens diárias
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <ResponsiveContainer width="100%" height={248}>
                <LineChart
                  data={[
                    {
                      date: '12/12',
                      receipt: 23,
                    },
                    {
                      date: '13/12',
                      receipt: 23,
                    },
                    {
                      date: '14/12',
                      receipt: 2,
                    },
                    {
                      date: '15/12',
                      receipt: 34,
                    },
                  ]}
                  style={{ fontSize: 12 }}
                >
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    dy={16}
                  />

                  <YAxis
                    stroke="#888"
                    axisLine={false}
                    tickLine={false}
                    width={80}
                    tickFormatter={(value: number) => `${value} msg`}
                  />

                  <CartesianGrid vertical={false} className="stroke-muted" />

                  <Line
                    type="linear"
                    strokeWidth={2}
                    dataKey="receipt"
                    stroke={colors.violet['500']}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-5">
            <CardHeader className="flex-row items-center justify-between pb-8">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">
                  Envio e recebimento
                </CardTitle>
                <CardDescription>
                  Envio e recebimento de mensagens diárias
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <ResponsiveContainer width="100%" height={248}>
                <LineChart
                  data={[
                    {
                      date: '12/12',
                      receipt: 23,
                    },
                    {
                      date: '13/12',
                      receipt: 23,
                    },
                    {
                      date: '14/12',
                      receipt: 2,
                    },
                    {
                      date: '15/12',
                      receipt: 34,
                    },
                  ]}
                  style={{ fontSize: 12 }}
                >
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    dy={16}
                  />

                  <YAxis
                    stroke="#888"
                    axisLine={false}
                    tickLine={false}
                    width={80}
                    tickFormatter={(value: number) => `${value} msg`}
                  />

                  <CartesianGrid vertical={false} className="stroke-muted" />

                  <Line
                    type="linear"
                    strokeWidth={2}
                    dataKey="receipt"
                    stroke={colors.violet['500']}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
