"use client"
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useTransition } from "react";
import { Heart, LoaderCircle } from "lucide-react";
import { addToWishlist } from "@/services/wishlist.service";
import { useWishlist } from "@/context/WishlistContext";

export default function AddToWishlistBtn({productId , ...props}: {productId: string , [key:string] : string}) {
 
  const [isPending , startTransition] = useTransition()
    const {getWishlistDetails} = useWishlist()
  

  async function addProductToWishlist (productId : string) {
     startTransition(async () => {
      const res = await addToWishlist(productId)

     if(res.success) {
        toast.success(res.message , {
            position: "top-right"
        })

        getWishlistDetails()
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
     <Button disabled={isPending} onClick={() => addProductToWishlist(productId)} {...props}>
      {isPending ? <LoaderCircle className="animate-spin"/> : <Heart/>}
      </Button>
    </>
  )
}
