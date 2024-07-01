import { api } from '../lib/axios'

export interface GetTeamServiceQuery {
  name?: string | null
  description?: string | null
  pageIndex?: number | null
}

interface TeamProps {
  id: string
  name: string
  email: string
  permissions: string[]
}

export interface GetTeamServiceResponseSearch {
  teams: TeamProps[]
  meta: {
    pageIndex: number
    perPage: number
    totalItems: number
  }
}

export interface GetTeamServiceResponse {
  items: number
  data: TeamProps[]
}

export async function getTeamService({
  name,
  description,
  pageIndex,
}: GetTeamServiceQuery) {
  const response = await api.get<GetTeamServiceResponse>(`/team`, {
    params: {
      _page: pageIndex,
      _per_page: 5,
      name,
      description,
    },
  })

  const result: GetTeamServiceResponseSearch = {
    teams: response.data.data,
    meta: {
      totalItems: response.data.items,
      pageIndex: pageIndex || 0,
      perPage: 5,
    },
  }

  return result
}
