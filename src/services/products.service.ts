export async function getProducts (limit = 40 , categoryId?: string) {
    try {

      const endPoint = categoryId ? `limit=${limit}&category[in]=${categoryId}` : `limit=${limit}`

      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?${endPoint}` , {
        cache: "no-cache" ,
        
       })

       if(!res.ok) {
         throw new Error (res.statusText || "Failed to fetch products")
       }

       const data = await res.json()
       return data 

    } catch (error) {
        return {error: error as string}
    }
  }



  export async function getProductDetails (id: string) {
    try {
       const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}` , {
        cache: "no-cache" ,
        
       })

       if(!res.ok) {
         throw new Error (res.statusText || "Failed to fetch this product details")
       }

       const data = await res.json()
       return data 

    } catch (error) {
        return {error: error as string}
    }
  }
