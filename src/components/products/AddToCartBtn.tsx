"use client"
import { addToCart } from "@/services/cart.service";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { useTransition } from "react";
import { LoaderCircle } from "lucide-react";

export default function AddToCartBtn({productId , ...props}: {productId: string , [key:string] : string}) {
 
  const [isPending , startTransition] = useTransition()

  const {getCartDetails} = useCart()

  async function addProductToCart (productId : string) {
     startTransition(async () => {
      const res = await addToCart(productId)

     if(res.success) {
        toast.success(res.message , {
            position: "top-right"
        })

        getCartDetails()
     }
     else {
        toast.error(res.message , {
            position: "top-right"
        })
     }
     })
  }

  return (
    <>
     <Button disabled={isPending} onClick={() => addProductToCart(productId)} {...props}>
      {isPending ? <LoaderCircle className="animate-spin"/> : "Add to Cart"}
      </Button>
    </>
  )
}
