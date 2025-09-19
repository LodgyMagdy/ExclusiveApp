"use client"

import AddToCartBtn from "@/components/products/AddToCartBtn"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/context/WishlistContext"
import { removeFromWishlist } from "@/services/wishlist.service"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

export default function WishlistPage() {

  const {wishlistDetails , setWishlistDetails} = useWishlist()

  async function removeProductFromWishlist (productId: string) {
    const res = await removeFromWishlist(productId)

    if(res.message) {
      toast.success(res.message ,{
        position: "top-right"
      }
      )
      setWishlistDetails(res.data)
    } else {
      toast.error(res.message ,{
        position: "top-right"
      })
    }
  }


  return (
    <>
      <section className="py-20">
      <div className="container mx-auto">
        {wishlistDetails ? 
        <>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistDetails?.data.map((item) => (
            <div
              key={item._id}
              className="relative rounded-md p-3"
            >
              <div className="relative border rounded-md">
                <Image
                  src={item.imageCover}
                  alt={item.title}
                  width={250}
                  height={250}
                  className="w-full h-70 object-contain"
                />
                <Badge
                  onClick={() => removeProductFromWishlist(item._id)}
                  className="cursor-pointer bg-white absolute top-2 right-2 size-10 flex items-center justify-center rounded-full"
                  variant="outline"
                >
                  <Trash2 className="!size-10" />
                </Badge>
                <AddToCartBtn productId={item._id} className="cursor-pointer absolute rounded-t-none bottom-0 bg-black w-full"/>
              </div>

              <h2
                className="mt-3 text-base font-semibold truncate hover:text-clip"
                title={item.title}
              >
                {item.title}
              </h2>

              <div className="flex items-center gap-x-3 mt-2 text-sm">
                {item.priceAfterDiscount ? <p className="font-bold text-red-500">${item.priceAfterDiscount}</p> : <p className="font-bold text-red-500">${item.price}</p>}
                {item.priceAfterDiscount && (
                  <p className="text-gray-500 line-through">
                    ${item.price}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        </> : 
        <>
         <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">Your Wishlist Is Empty</h2>
          <Link href="/products">
         <Button variant={"outline"} className="cursor-pointer">Return To Shop</Button>
        </Link>
        </div>
        </>}
      </div>
    </section>
    </>
  )
}
