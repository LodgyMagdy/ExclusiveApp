"use client"

import { getUserOrders } from "@/services/order.service"
import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IOrdersResponse } from "@/interfaces/orders.interface"

export default function AllOrdersPage() {

  const [orders, setOrders] = useState<IOrdersResponse[]>([]) 

  useEffect(() => {
    async function getOrders() {
      try {
        
          const data: IOrdersResponse[] = await getUserOrders()
          setOrders(data)
        
      } catch (err) {
        console.error("Failed to load orders:", err)
      }
    }

    getOrders()
  }, [])

  return (
    <>
     {orders && <Table className="container mx-auto my-20">
      <TableCaption>A list of your orders</TableCaption>
      <TableHeader className="text-lg">
        <TableRow>
          <TableHead className="font-bold">Id of the order</TableHead>
          <TableHead className="font-bold">Number of items</TableHead>
          <TableHead className="font-bold">Method</TableHead>
          <TableHead className="font-bold text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((order) => {
          const totalItems = order.cartItems.reduce(
            (acc, item) => acc + item.count,
            0
          )
          return (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{totalItems}</TableCell>
              <TableCell>{order.paymentMethodType}</TableCell>
              <TableCell className="text-right">{order.totalOrderPrice}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table> }
    </>
  )
}
  
