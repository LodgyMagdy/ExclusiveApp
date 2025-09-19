import { IPagination } from "./pagination.interface"

export interface IBrandResponse {
  results: number
  metadata: IPagination
  data: IBrand[]
}

export interface IBrand {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
   __v?: number
}