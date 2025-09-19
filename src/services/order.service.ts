"use server"
import { getUserId, getUserToken } from "@/lib/server-utils";
import { addressFormSchema, addressFormStateType } from "@/schema/address.schema";

export async function handlePayment (formState: addressFormStateType , formData: FormData) : Promise<addressFormStateType> {
   const shippingAddress = {
      details: formData.get("details"),
      phone: formData.get("phone"),
      city: formData.get("city")
   }

   const cartId = formData.get("cartId")
   const paymentMethod = formData.get("paymentMethod")

   const parsedData = addressFormSchema.safeParse({...shippingAddress , cartId , paymentMethod})

   if(!parsedData.success) {
     return {
        success: false ,
        error: parsedData.error?.flatten().fieldErrors ,
        message: null ,
        callbackUrl: "/cart"
     }
   }

   try {

    const token = await getUserToken()

    const endPoint = paymentMethod === "cash" ? `api/v1/orders/${cartId}` : `api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`

    const res = await fetch(`${process.env.API_BASE_URL}/${endPoint}` , {
        method: "POST" , 
        headers: {
            "Content-Type" : "application/json" ,
            token: token as string
        } ,
        body: JSON.stringify(shippingAddress)
        
    })

    const data = await res.json()

        if(!res.ok) {
            return {
                success: false ,
                error: {} ,
                message: data.message || "Failed to place order" ,
                callbackUrl: "/cart" ,
                

            }
        }

        return {
                success: true ,
                error: {} ,
                message: data.message || "Order placed successfully" ,
                callbackUrl: paymentMethod === "cash" ? "/allorders" : data.session.url ,
                

            }

   } catch (error) {
      return {
                success: false ,
                error: {} ,
                message: (error as string) || "Something went wrong"
            }
   }
}

export async function getUserOrders () {
    try {
       const userId = await getUserId()
       const res = await fetch(`${process.env.API_BASE_URL}/api/v1/orders/user/${userId}`)

       if(!res.ok) {
         throw new Error ("Failed to get user orders")
       }

       const data = await res.json()
       return data 

    } catch (error) {
        return {error: error as string}
    }
  }