import { ICartProduct } from "./cart.interface"

export type Root = IOrdersResponse[]

export interface  IOrdersResponse {
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  user: User
  cartItems: ICartProduct[]
  createdAt: string
  updatedAt: string
  id: number
  __v: number
  paidAt?: string
}

export interface User {
  _id: string
  name: string
  email: string
  phone: string
}





