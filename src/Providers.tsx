"use client"
import { CartContextProvider } from "@/context/CartContext";
import { SessionProvider } from "next-auth/react";
import { WishlistContextProvider } from "./context/WishlistContext";


export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <>
     <SessionProvider>
        <CartContextProvider><WishlistContextProvider>{children}</WishlistContextProvider></CartContextProvider>
     </SessionProvider>
    </>
  )
}
